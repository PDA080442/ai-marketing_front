export const RECO_CATEGORIES = [
  'SEO',
  'Performance',
  'Accessibility',
  'Content',
  'UX',
  'CRO',
] as const
export type RecoCategory = (typeof RECO_CATEGORIES)[number]

export const PRIORITY_COLORS: Record<string, string> = {
  critical: 'error',
  high: 'deep-orange',
  medium: 'amber',
  low: 'success',
  info: 'primary',
}

// бренд и UI
export const UI = {
  brand: '#0A7CFF',
  headerBg: '#EEF5FF', // фон thead
  rowAlt: '#F7FAFF', // зебра
  hover: 'rgba(10,124,255,0.06)',
  border: '#D7E3FF',
  footerBg: '#EDF3FF', // фон футера/пагинации
  text: '#0F172A',
  textDim: '#475569',
}

// severity-чипы (заливка, белый текст)
export const PRIORITY_HEX: Record<string, string> = {
  critical: '#D92D20', // красный
  high: '#F79009', // оранжевый
  medium: '#FDB022', // янтарный
  low: '#2E90FA', // синий
  info: '#64748B', // серый
}
