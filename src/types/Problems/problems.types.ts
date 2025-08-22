export type ProblemSeverity = 'critical' | 'high' | 'medium' | 'low' | 'info'

export interface ProblemItem {
  id: string
  title: string
  details: string
  severity: ProblemSeverity
  category: string
  selector?: string
  occurrences: number
  excerpt?: string
}

export interface ProblemsScore {
  score: number
}
