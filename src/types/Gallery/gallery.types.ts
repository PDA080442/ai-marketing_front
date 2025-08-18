export interface ScreenshotItem {
  id: string
  url: string
  alt: string
  width: number
  height: number
  pageTitle?: string
  createdAt?: string
}

export interface ScreenshotDownload {
  id: string
  url: string
  fileName: string
}
