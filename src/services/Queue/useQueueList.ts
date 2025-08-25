import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { QueueItems } from '@/types/Queue/queue.types'
import { getQueueLinks, cancelQueueLink } from '@/composable/Queue/queue.request'

export function useQueueList() {
  const route = useRoute()

  const snackbar = ref(false)
  const snackbarColor = ref<'success' | 'error'>('success')
  const snackbarText = ref('')
  const queueItems = ref<QueueItems[]>([])
  const tokenUser = ref<string>('')

  const headers = [
    { title: 'Link', key: 'url', sortable: false },
    { title: 'Progress', key: 'progress', sortable: false },
    { title: 'Actions', key: 'actions', sortable: false },
  ]

  const readTokenFromRoute = (): string => {
    const raw = route.query.token
    if (typeof raw === 'string') return raw
    if (Array.isArray(raw) && raw.length > 0 && typeof raw[0] === 'string') return raw[0]
    return ''
  }

  const fetchQueue = async () => {
    tokenUser.value = readTokenFromRoute()
    if (!tokenUser.value) {
      snackbar.value = true
      snackbarColor.value = 'error'
      snackbarText.value =
        'Missing token in URL. Open the queue via the link you received after submission.'
      queueItems.value = []
      return
    }
    try {
      const data = await getQueueLinks(tokenUser.value)
      queueItems.value = data
    } catch (error) {
      console.error(error)
      snackbar.value = true
      snackbarColor.value = 'error'
      snackbarText.value = 'An error has occurred - data not loaded. Please reload the page.'
      queueItems.value = []
    }
  }

  onMounted(fetchQueue)

  watch(
    () => route.query.token,
    () => {
      void fetchQueue()
    },
  )

  const onCancel = async (item: QueueItems) => {
    if (!tokenUser.value) return
    try {
      await cancelQueueLink(item.id, tokenUser.value)
      queueItems.value = queueItems.value.filter((i) => i.id !== item.id)
    } catch (err) {
      console.error(err)
    }
  }

  return {
    snackbar,
    snackbarColor,
    snackbarText,
    queueItems,
    tokenUser,
    headers,
    onCancel,
  }
}
