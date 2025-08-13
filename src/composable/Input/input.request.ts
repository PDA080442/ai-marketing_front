import type { InputUrl } from '@/types/Input/input.types'
import { useApi } from '../useApi'

const { call } = useApi('/input')

export async function postUrl(data: InputUrl): Promise<void> {
  await call(`/urls/`, data, 'POST')
}
