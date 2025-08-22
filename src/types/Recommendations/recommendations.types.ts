export type RecommendationPriority = 'critical' | 'high' | 'medium' | 'low' | 'info'

export interface RecommendationItem {
  id: string
  title: string
  details: string
  category: string
  priority: RecommendationPriority
  impact?: number
  effort?: 'low' | 'medium' | 'high'
  excerpt?: string
}
