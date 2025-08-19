import type { InputUrl, TokenUser } from '@/types/Input/input.types'
import { useApi } from '../useApi'

const { call } = useApi('/input')

export async function postUrl(data: InputUrl): Promise<TokenUser> {
  const response = await call(`/urls/`, data, 'POST')
  return response as TokenUser
}
