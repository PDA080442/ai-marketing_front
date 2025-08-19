export interface ScreenshotItem extends BaseGallery {
  url: string
  alt: string
  width: number
  height: number
  pageTitle?: string
}

export interface ScreenshotDownload {
  id: string
  url: string
  fileName: string
}

export interface BaseGallery {
  id: string
  createdAt?: string
}
