import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { ProblemItem } from '@/types/Problems/problems.types'
import { getProblemsList, getProblemsScore } from '@/composable/ListProblems/problems.request'

function qStr(x: unknown): string {
  if (typeof x === 'string') return x
  if (Array.isArray(x)) return x[0] ?? ''
  return ''
}

export function useProblemsList() {
  const route = useRoute()

  const tab = ref<'tables' | 'text'>('tables')
  const problems = ref<ProblemItem[]>([])
  const score = ref<number>(0)

  const snackbar = ref(false)
  const snackbarColor = ref<'success' | 'error'>('success')
  const snackbarText = ref('')

  const textProblems = computed<ProblemItem[]>(() =>
    problems.value.filter((p) => ['Content', 'SEO', 'UX'].includes(p.category) || !!p.excerpt),
  )

  onMounted(async () => {
    try {
      const token = qStr(route.query.token)
      if (!token) return

      const scoreResp = await getProblemsScore(token)
      score.value = Number(scoreResp?.score ?? 0)

      const list = await getProblemsList(token)
      problems.value = Array.isArray(list) ? list : []
    } catch (err) {
      snackbar.value = true
      snackbarColor.value = 'error'
      snackbarText.value = 'Failed to load problems.'
      console.error(err)
    }
  })

  return {
    tab,
    problems,
    score,
    snackbar,
    snackbarColor,
    snackbarText,
    textProblems,
  }
}
