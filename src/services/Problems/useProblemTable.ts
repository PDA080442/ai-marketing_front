import type { ProblemItem, ProblemSeverity } from '@/types/Problems/problems.types'

type Header = {
  title: string
  key: keyof ProblemItem | 'excerpt'
  sortable?: boolean
  width?: number | string
}

export function useProblemTable() {
  const headers: Header[] = [
    { title: 'Title', key: 'title', width: 250 },
    { title: 'Details', key: 'details', width: 400 },
    { title: 'Severity', key: 'severity', width: 150 },
    { title: 'Quantity', key: 'occurrences', width: 100 },
    { title: 'Excerpt', key: 'excerpt', sortable: false, width: 300 },
  ]

  const severityColor = (sev: ProblemSeverity): string => {
    switch (sev) {
      case 'critical':
        return 'red-darken-4'
      case 'high':
        return 'red'
      case 'medium':
        return 'orange'
      case 'low':
        return 'blue'
      default:
        return 'grey'
    }
  }

  const short = (text: string, max = 80): string =>
    text.length > max ? `${text.slice(0, max)}…` : text

  return { headers, severityColor, short }
}
