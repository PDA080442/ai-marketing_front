// mocks/queue.mocks.ts
import type { QueueItems } from '@/types/Queue/queue.types'

export const queueMocks: QueueItems[] = [
  {
    id: 1,
    url: 'https://example.com',
    progress: { status: 'queued' },
  },
  {
    id: 2,
    url: 'https://leetcode.com/',
    progress: { status: 'processing' },
  },
  {
    id: 3,
    url: 'https://apps.skillfactory.ru/',
    progress: { status: 'done' },
  },
  {
    id: 4,
    url: 'https://leetcode.com/',
    progress: { status: 'processing' },
  },
  {
    id: 5,
    url: 'https://example.com',
    progress: { status: 'queued' },
  },
  {
    id: 6,
    url: 'https://apps.skillfactory.ru/',
    progress: { status: 'done' },
  },
]
