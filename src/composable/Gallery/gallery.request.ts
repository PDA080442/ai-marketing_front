import type { ScreenshotItem } from '@/types/Gallery/gallery.types'
import type { ScreenshotDownload } from '@/types/Gallery/gallery.types'
import { useApi } from '../useApi'

const { call } = useApi('/gallery')

function normToken(token: string): string {
  return token.replace(/-/g, '')
}

export async function getGalleryScreen(token: string): Promise<ScreenshotItem[]> {
  const t = normToken(token)
  const response = await call(`/screenshot/?token=${encodeURIComponent(t)}`, {}, 'GET')
  return response as ScreenshotItem[]
}

export async function downloadScreenshot(id: string): Promise<ScreenshotDownload> {
  const response = await call(`/screenshot/${id}/download/`, {}, 'GET')
  return response as ScreenshotDownload
}
