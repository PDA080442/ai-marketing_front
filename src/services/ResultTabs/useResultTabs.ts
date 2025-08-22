import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export type TabValue = 'panel' | 'gallery' | 'problem' | 'recommend'

export interface TabItem {
  label: string
  value: TabValue
  icon: string
  component: object
}

export function useResultTabs(components: {
  PanelContent: object
  GalleryScreenshot: object
  ListProblems: object
  ListRecommendations: object
}) {
  const tabs: TabItem[] = [
    {
      label: 'Panel Content',
      value: 'panel',
      icon: 'mdi-view-dashboard-outline',
      component: components.PanelContent,
    },
    {
      label: 'Gallery Screenshots',
      value: 'gallery',
      icon: 'mdi-image-album',
      component: components.GalleryScreenshot,
    },
    {
      label: 'List Problems',
      value: 'problem',
      icon: 'mdi-alert-circle-outline',
      component: components.ListProblems,
    },
    {
      label: 'Recommendation from AI',
      value: 'recommend',
      icon: 'mdi-robot-outline',
      component: components.ListRecommendations,
    },
  ]

  const route = useRoute()

  const activeIndex = ref(
    Math.max(
      0,
      tabs.findIndex((t) => t.value === route.query.tab),
    ),
  )

  watch(
    () => route.query.tab,
    (q) => {
      const idx = tabs.findIndex((t) => t.value === q)
      if (idx !== -1) activeIndex.value = idx
    },
  )

  return { tabs, activeIndex }
}
