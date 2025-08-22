import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { RecommendationItem } from '@/types/Recommendations/recommendations.types'
import { getRecommendationsList } from '@/composable/Recommendations/recommendations.request'

function qStr(x: unknown): string {
  if (typeof x === 'string') return x
  if (Array.isArray(x)) return x[0] ?? ''
  return ''
}

export function useRecommendationsList() {
  const route = useRoute()

  const tab = ref<'list' | 'text'>('list')
  const list = ref<RecommendationItem[]>([])
  const activeCategory = ref<string>('All')

  const filtered = computed(() =>
    activeCategory.value === 'All'
      ? list.value
      : list.value.filter((r) => r.category === activeCategory.value),
  )

  // сортировка по приоритету для карточек
  const order: Record<string, number> = { critical: 0, high: 1, medium: 2, low: 3, info: 4 }
  const filteredFlat = computed(() =>
    [...filtered.value].sort((a, b) => (order[a.priority] ?? 99) - (order[b.priority] ?? 99)),
  )

  const textOnly = computed(() => list.value.filter((r) => !!r.excerpt))

  onMounted(async () => {
    try {
      const token = qStr(route.query.token)
      if (!token) return
      const items = await getRecommendationsList(token)
      list.value = Array.isArray(items) ? items : []
    } catch (e) {
      console.error(e)
    }
  })

  return {
    tab,
    activeCategory,
    filteredFlat,
    textOnly,
  }
}
