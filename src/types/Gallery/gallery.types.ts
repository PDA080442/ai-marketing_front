export interface ScreenshotItem {
  id: string
  url: string // ссылка на изображение (локальная или CDN)
  alt: string
  width: number
  height: number
  pageTitle?: string
  createdAt?: string // ISO-строка времени, если нужно показывать дату
}

export interface ScreenshotDownload {
  id: string
  url: string
  fileName: string
}
