import { useApi } from '../useApi'
import type { ProblemItem } from '@/types/Problems/problems.types'
import type { ProblemsScore } from '@/types/Problems/problems.types'

const { call } = useApi('/problems')

function normToken(token: string): string {
  return token.replace(/-/g, '')
}

export async function getProblemsList(token: string): Promise<ProblemItem[]> {
  const t = normToken(token)
  const response = await call(`/list/?token=${encodeURIComponent(t)}`, {}, 'GET')
  return response as ProblemItem[]
}

export async function getProblemsScore(token: string): Promise<ProblemsScore> {
  const t = normToken(token)
  const response = await call(`/score/?token=${encodeURIComponent(t)}`, {}, 'GET')
  return response as ProblemsScore
}
