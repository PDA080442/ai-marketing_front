import type { RecommendationItem } from '@/types/Recommendations/recommendations.types'
import { useApi } from '../useApi'

const { call } = useApi('/recommendations')

/** Получить список рекомендаций */
export async function getRecommendationsList(): Promise<RecommendationItem[]> {
  const response = await call('/list/', {}, 'GET')
  return response as RecommendationItem[]
}
