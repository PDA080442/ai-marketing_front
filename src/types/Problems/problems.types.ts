export type ProblemSeverity = 'critical' | 'high' | 'medium' | 'low' | 'info'

export interface ProblemItem {
  id: string
  title: string
  details: string
  severity: ProblemSeverity
  category: string // SEO | Performance | Accessibility | Content | UX | CRO ...
  selector?: string // опц., оставим для будущего
  occurrences: number
  excerpt?: string // НОВОЕ: связка с текстом, без подсветки
}
