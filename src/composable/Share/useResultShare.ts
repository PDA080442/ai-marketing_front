import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { validateShare, fetchSharedResults } from './share.request'
import type { ShareMode, SharePublicPayload, ShareCreateResponse } from '@/types/Share/share.types'

export function useResultShare() {
  const route = useRoute()
  const router = useRouter()

  const token = computed(() => (route.query.share ?? '') as string)
  const mode = ref<ShareMode>('private')
  const shareToken = ref<string | null>(null)
  const resultId = ref<string>(String(route.params.id ?? ''))

  // Данные публичного просмотра
  const problems = ref<SharePublicPayload['problems']>([])
  const recommendations = ref<SharePublicPayload['recommendations']>([])
  const score = ref<number | undefined>(undefined)

  async function load() {
    if (token.value) {
      const v = await validateShare(token.value)
      if (v.valid) {
        mode.value = 'shared'
        shareToken.value = token.value
        resultId.value = v.resultId ?? resultId.value

        const data = await fetchSharedResults(token.value)
        problems.value = data.problems ?? []
        recommendations.value = data.recommendations ?? []
        score.value = data.score?.score
        return
      } else {
        // невалидный токен — убираем из URL
        const q = new URLSearchParams(route.query as Record<string, string>)
        q.delete('share')
        await router.replace({ query: Object.fromEntries(q.entries()) })
      }
    }

    // приватный режим — пусть страница грузит данные как раньше
    mode.value = 'private'
    shareToken.value = null
  }

  onMounted(load)
  watch(() => route.query.share, load)

  function onCreated(res: ShareCreateResponse) {
    shareToken.value = res.token
    mode.value = 'shared'
    // прописываем ?share= в URL
    const q = new URLSearchParams(route.query as Record<string, string>)
    q.set('share', res.token)
    router.replace({ query: Object.fromEntries(q.entries()) })
  }

  function onRevoked() {
    shareToken.value = null
    mode.value = 'private'
    // убираем токен из URL
    const q = new URLSearchParams(route.query as Record<string, string>)
    q.delete('share')
    router.replace({ query: Object.fromEntries(q.entries()) })
  }

  return {
    // состояние
    mode,
    shareToken,
    resultId,

    // данные публичного режима
    problems,
    recommendations,
    score,

    // действия
    load,
    onCreated,
    onRevoked,
  }
}
