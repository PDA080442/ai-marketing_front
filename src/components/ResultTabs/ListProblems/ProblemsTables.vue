<template>
  <div>
    <v-card
      v-for="(group, cat) in grouped"
      :key="String(cat)"
      elevation="2"
      class="pa-3"
      rounded="lg"
    >
      <div class="d-flex align-center justify-space-between mb-2">
        <div class="title">{{ cat }} ({{ group.length }})</div>
        <div class="d-flex gap-2">
          <v-chip size="x-small" variant="flat">critical: {{ countBy(group, 'critical') }}</v-chip>
          <v-chip size="x-small" variant="flat">high: {{ countBy(group, 'high') }}</v-chip>
          <v-chip size="x-small" variant="flat">medium: {{ countBy(group, 'medium') }}</v-chip>
          <v-chip size="x-small" variant="flat">low: {{ countBy(group, 'low') }}</v-chip>
        </div>
      </div>
      <ProblemTable :problems="group" />
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ProblemTable from './ProblemTable.vue'
import type { ProblemItem, ProblemSeverity } from '@/types/Problems/problems.types'

interface Props {
  problems: ProblemItem[]
}
const props = defineProps<Props>()

const grouped = computed<Record<string, ProblemItem[]>>(() =>
  props.problems.reduce(
    (acc, p) => {
      ;(acc[p.category] ||= []).push(p)
      return acc
    },
    {} as Record<string, ProblemItem[]>,
  ),
)

function countBy(items: ProblemItem[], s: ProblemSeverity): number {
  return items.filter((i) => i.severity === s).length
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
}
@media (min-width: 1100px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
.title {
  font-weight: 700;
  font-size: 16px;
}
.gap-2 {
  gap: 8px;
}
.gap-6 {
  gap: 24px;
}
</style>
