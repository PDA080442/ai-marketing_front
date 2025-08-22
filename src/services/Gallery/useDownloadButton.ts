import { ref } from 'vue'
import type { ScreenshotDownload } from '@/types/Gallery/gallery.types'
import { downloadScreenshot } from '@/composable/Gallery/gallery.request'

export function useScreenshotDownload(id: string) {
  const snackbar = ref(false)
  const snackbarColor = ref<'success' | 'error'>('success')
  const snackbarText = ref('')

  const handleDownload = async () => {
    try {
      const file: ScreenshotDownload = await downloadScreenshot(id)
      const a = document.createElement('a')
      a.href = file.url
      a.download = file.fileName
      a.rel = 'noopener'
      a.click()
    } catch (err) {
      snackbar.value = true
      snackbarColor.value = 'error'
      snackbarText.value = 'Error. Screenshot does not save'
      console.error(err)
    }
  }

  return {
    snackbar,
    snackbarColor,
    snackbarText,
    handleDownload,
  }
}
