import { useApi } from '../useApi'
import type { QueueItems, QueueResponse } from '@/types/Queue/queue.types'

const { call } = useApi('/queue')

export async function getQueueLinks(token: string): Promise<QueueItems[]> {
  const response = (await call(`/link?token=${token}`, {}, 'GET')) as QueueResponse
  return response.items
}

export async function cancelQueueLink(id: number, token: string): Promise<void> {
  await call(`/link/${id}/?token=${token}`, {}, 'DELETE')
}
