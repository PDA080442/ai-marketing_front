export interface QueueItems {
  id: number
  url: string
  progress: QueuseProgress
}

export interface QueuseProgress {
  status: 'queued' | 'processing' | 'done'
}
