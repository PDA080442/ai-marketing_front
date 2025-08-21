export const RECO_CATEGORIES = [
  'SEO',
  'Performance',
  'Accessibility',
  'Content',
  'UX',
  'CRO',
] as const

// severity-чипы (заливка, белый текст)
export const PRIORITY_HEX: Record<string, string> = {
  critical: '#D92D20', // красный
  high: '#F79009', // оранжевый
  medium: '#FDB022', // янтарный
  low: '#2E90FA', // синий
  info: '#64748B', // серый
}
