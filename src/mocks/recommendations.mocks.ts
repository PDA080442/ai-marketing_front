import type { RecommendationItem } from '@/types/Recommendations/recommendations.types'

export const recommendationsListMock: RecommendationItem[] = [
  {
    id: 'r1',
    title: 'Оптимизировать title с ключом и брендом',
    details: 'Title > 60 символов и без бренда. Сократить, вынести ключ, добавить "| Brand".',
    category: 'SEO',
    priority: 'high',
    impact: 0.6,
    effort: 'low',
  },
  {
    id: 'r2',
    title: 'Убрать render-blocking ресурсы',
    details: 'CSS в <head> тяжёлый, нет preload/async для критичных ресурсов.',
    category: 'Performance',
    priority: 'critical',
    impact: 0.8,
    effort: 'medium',
  },
  {
    id: 'r3',
    title: 'Контраст текста CTA',
    details: 'Кнопка «Купить» имеет низкий контраст (WCAG AA не пройден).',
    category: 'Accessibility',
    priority: 'high',
    impact: 0.5,
    effort: 'low',
  },
  {
    id: 'r4',
    title: 'Расширить описания товаров',
    details: 'Короткие описания, мало конкретики и преимуществ. Добавить выгоды и FAQ.',
    category: 'Content',
    priority: 'medium',
    impact: 0.4,
    effort: 'medium',
    excerpt: 'Наш продукт лучший на рынке…', // пример связи с Text
  },
  {
    id: 'r5',
    title: 'Упростить путь до корзины',
    details: 'Скрытая кнопка на мобильных, требуется лишний скролл.',
    category: 'UX',
    priority: 'medium',
    impact: 0.45,
    effort: 'medium',
  },
]
