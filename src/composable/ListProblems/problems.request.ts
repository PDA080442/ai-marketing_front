import { useApi } from '../useApi'
import type { ProblemItem } from '@/types/Problems/problems.types'
import type { ProblemsScore } from '@/types/Problems/problems.types'

const { call } = useApi('/problems')

export async function getProblemsList(): Promise<ProblemItem[]> {
  const response = await call('/list/', {}, 'GET')
  return response as ProblemItem[]
}

export async function getProblemsScore(): Promise<ProblemsScore> {
  const response = await call('/score/', {}, 'GET')
  return response as ProblemsScore
}
