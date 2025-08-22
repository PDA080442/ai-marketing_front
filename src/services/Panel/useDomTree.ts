import { ref, onMounted } from 'vue'
import type { DomNodeType } from '@/types/Panel/DOM/dom.types'
import { getDomStructure } from '@/composable/PanelContent/panelcontent.request'

export function useDomTree() {
  const snackbar = ref(false)
  const snackbarColor = ref<'success' | 'error'>('success')
  const snackbarText = ref('')

  const nodes = ref<DomNodeType[]>([])

  const fetchDom = async () => {
    try {
      const response = await getDomStructure()
      nodes.value = Array.isArray(response) ? response : [response]
    } catch (err) {
      snackbar.value = true
      snackbarColor.value = 'error'
      snackbarText.value = 'An error has occurred - data not loaded. Please reload the page.'
      console.error('Failed to load DOM structure:', err)
    }
  }

  onMounted(fetchDom)

  return { snackbar, snackbarColor, snackbarText, nodes, fetchDom }
}
