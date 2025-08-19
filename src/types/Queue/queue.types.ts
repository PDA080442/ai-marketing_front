export interface QueueItems {
  id: number
  url: string
  progress: QueuseProgress
}

export interface QueuseProgress {
  status: 'queued' | 'done'
}

export interface QueueResponse {
  items: QueueItems[]
}
