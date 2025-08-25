import { ref, onMounted } from 'vue'
import type { MetaType } from '@/types/Panel/Metadata/metadata.types'
import { getMetadata } from '@/composable/PanelContent/panelcontent.request'

export function useMetadataTable() {
  const snackbar = ref(false)
  const snackbarColor = ref<'success' | 'error'>('success')
  const snackbarText = ref('')

  const items = ref<MetaType[]>([])

  const headers = [
    { title: 'Name', key: 'name', sortable: true },
    { title: 'Value', key: 'value', sortable: false },
  ]

  const fetchMetadata = async () => {
    try {
      const response = await getMetadata()
      items.value = response
    } catch (err) {
      console.error('Failed to load metadata:', err)
      snackbar.value = true
      snackbarColor.value = 'error'
      snackbarText.value = 'An error has occurred - data not loaded. Please reload the page.'
    }
  }

  onMounted(fetchMetadata)

  return {
    snackbar,
    snackbarColor,
    snackbarText,
    items,
    headers,
    fetchMetadata,
  }
}
