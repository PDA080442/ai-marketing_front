import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { ScreenshotItem } from '@/types/Gallery/gallery.types'
import { getGalleryScreen } from '@/composable/Gallery/gallery.request'

function qStr(x: unknown): string {
  if (typeof x === 'string') return x
  if (Array.isArray(x)) return x[0] ?? ''
  return ''
}

export function useScreenshots() {
  const route = useRoute()

  const items = ref<ScreenshotItem[]>([])
  const lightboxOpen = ref(false)
  const carouselIndex = ref(0)

  const snackbar = ref(false)
  const snackbarColor = ref<'success' | 'error'>('success')
  const snackbarText = ref('')

  const currentItem = computed(() => items.value[carouselIndex.value])

  const openLightbox = (index: number) => {
    carouselIndex.value = index
    lightboxOpen.value = true
  }

  onMounted(async () => {
    try {
      const token = qStr(route.query.token)
      if (!token) return
      items.value = await getGalleryScreen(token)
    } catch (err) {
      console.log('Error: ', err)
      snackbar.value = true
      snackbarColor.value = 'error'
      snackbarText.value = 'Error. Data not loaded'
    }
  })

  return {
    items,
    lightboxOpen,
    carouselIndex,
    snackbar,
    snackbarColor,
    snackbarText,
    currentItem,
    openLightbox,
  }
}
