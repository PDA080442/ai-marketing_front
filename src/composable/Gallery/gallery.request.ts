import type { ScreenshotItem } from '@/types/Gallery/gallery.types'
import type { ScreenshotDownload } from '@/types/Gallery/gallery.types'
import { useApi } from '../useApi'

const { call } = useApi('/gallery')

export async function getGalleryScreen(): Promise<ScreenshotItem[]> {
  const response = await call('/screenshot/', {}, 'GET')
  return response as ScreenshotItem[]
}

export async function downloadScreenshot(id: string): Promise<ScreenshotDownload> {
  const response = await call(`/screenshot/${id}/download/`, {}, 'GET')
  return response as ScreenshotDownload
}
