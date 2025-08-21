import type { RecommendationItem } from '@/types/Recommendations/recommendations.types'
import { useApi } from '../useApi'

const { call } = useApi('/recommendations')

function normToken(token: string): string {
  return token.replace(/-/g, '')
}
/** Получить список рекомендаций */
export async function getRecommendationsList(token: string): Promise<RecommendationItem[]> {
  const t = normToken(token)
  const response = await call(`/list/?token=${encodeURIComponent(t)}`, {}, 'GET')
  return response as RecommendationItem[]
}
