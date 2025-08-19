export type ShareMode = 'private' | 'shared'

export interface ShareCreateRequest {
  resultId: string // ID результатов (страницы)
}

export interface ShareCreateResponse {
  token: string
  url: string // уже собранная ссылка /results/:id?share=token
}

export interface ShareRevokeResponse {
  ok: true
}

export interface ShareValidation {
  valid: boolean
  resultId?: string
  reason?: string
}

export interface SharePublicPayload {
  meta: {
    resultId: string
    createdAt?: string
    pageUrl?: string
    title?: string
  }
  score?: { score: number }
  problems?: Array<{
    id: string
    title: string
    details?: string
    category?: string
    severity?: 'critical' | 'high' | 'medium' | 'low' | 'info'
    quantity?: number
    excerpt?: string
  }>
  recommendations?: Array<{
    id: string
    title: string
    details: string
    category: 'SEO' | 'Performance' | 'Accessibility' | 'Content' | 'UX' | 'CRO'
    priority: 'critical' | 'high' | 'medium' | 'low' | 'info'
    impact?: number
    effort?: number
    excerpt?: string
  }>
}
