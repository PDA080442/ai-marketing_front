import { ref, onMounted } from 'vue'
import type { PageText } from '@/types/Panel/Text/text.types'
import { getTextPage } from '@/composable/PanelContent/panelcontent.request'

export function usePageText() {
  const snackbar = ref(false)
  const snackbarColor = ref<'success' | 'error'>('success')
  const snackbarText = ref('')

  const items = ref<PageText[]>([])

  const fetchText = async () => {
    try {
      const response = await getTextPage()
      items.value = Array.isArray(response) ? response : [response]
    } catch (err) {
      snackbar.value = true
      snackbarColor.value = 'error'
      snackbarText.value = 'An error has occurred - data not loaded. Please reload the page.'
      console.error('Failed to load page text:', err)
    }
  }

  onMounted(fetchText)

  return {
    snackbar,
    snackbarColor,
    snackbarText,
    items,
    fetchText,
  }
}
