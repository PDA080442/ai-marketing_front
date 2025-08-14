import { useApi } from '../useApi'
import type { QueueItems, QueueResponse } from '@/types/Queue/queue.types'

const { call } = useApi('/api')

export async function getQueueLinks(token: string): Promise<QueueItems[]> {
  const response = (await call(`/queue?token=${token}`, {}, 'GET')) as QueueResponse
  return response.items
}
