import { ref, computed, onMounted } from 'vue'
import type { QueueItems } from '@/types/Queue/queue.types'
import { getQueueLinks, cancelQueueLink } from '@/composable/Queue/queue.request'

export function useQueueList() {
  const snackbar = ref(false)
  const snackbarColor = ref<'success' | 'error'>('success')
  const snackbarText = ref('')
  const queueItems = ref<QueueItems[]>([])
  const tokenUser = computed(() => localStorage.getItem('tokenUser: ') || '')

  const headers = [
    { title: 'Link', key: 'url', sortable: false },
    { title: 'Progress', key: 'progress', sortable: false },
    { title: 'Actions', key: 'actions', sortable: false },
  ]

  const fetchQueue = async () => {
    const token = localStorage.getItem('tokenUser: ') || ''
    if (!token) return
    try {
      const data = await getQueueLinks(token)
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

  const onCancel = async (item: QueueItems) => {
    const token = localStorage.getItem('tokenUser: ') || ''
    if (!token) return
    try {
      await cancelQueueLink(item.id, token)
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
