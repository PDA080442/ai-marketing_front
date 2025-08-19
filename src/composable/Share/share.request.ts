import type {
  ShareCreateRequest,
  ShareCreateResponse,
  ShareRevokeResponse,
  ShareValidation,
  SharePublicPayload,
} from '@/types/Share/share.types'
import { useApi } from '../useApi'

const { call } = useApi('/share')

export async function createShareLink(data: ShareCreateRequest): Promise<ShareCreateResponse> {
  const response = await call('/create/', data, 'POST')
  return response as ShareCreateResponse
}

export async function revokeShare(token: string): Promise<ShareRevokeResponse> {
  const response = await call('/revoke/', { token }, 'POST')
  return response as ShareRevokeResponse
}

export async function validateShare(token: string): Promise<ShareValidation> {
  const response = await call(`/validate/?token=${encodeURIComponent(token)}`, {}, 'GET')
  return response as ShareValidation
}

export async function fetchSharedResults(token: string): Promise<SharePublicPayload> {
  const response = await call(`/data/?token=${encodeURIComponent(token)}`, {}, 'GET')
  return response as SharePublicPayload
}
