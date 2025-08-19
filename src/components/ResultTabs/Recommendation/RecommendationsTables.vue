<template>
  <div class="reco-tables">
    <RecommendationTable
      v-for="(group, cat) in grouped"
      :key="cat"
      :title="cat"
      :items="group"
      class="mb-6"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { RecommendationItem } from '@/types/Recommendations/recommendations.types'
import RecommendationTable from './RecommendationTable.vue'

interface Props {
  items: RecommendationItem[]
}
const props = defineProps<Props>()

const grouped = computed<Record<string, RecommendationItem[]>>(() => {
  const acc: Record<string, RecommendationItem[]> = {}
  for (const r of props.items) {
    const k = r.category || 'Other'
    if (!acc[k]) acc[k] = []
    acc[k].push(r)
  }
  return acc
})
</script>
