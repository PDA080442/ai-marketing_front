export type RecommendationPriority = 'critical' | 'high' | 'medium' | 'low' | 'info'

export interface RecommendationItem {
  id: string
  title: string
  details: string
  category: string // SEO | Performance | Accessibility | Content | UX | CRO ...
  priority: RecommendationPriority
  impact?: number // 0..1 — влияние на CRO/конверсию (опционально)
  effort?: 'low' | 'medium' | 'high' // оценка трудозатрат (опционально)
  excerpt?: string // фрагмент текста (для связи с PageText)
}
