<template>
  <div>
    <v-card v-for="(group, cat) in grouped" :key="String(cat)" elevation="0" class="pa-5">
      <div class="title-table">
        <div class="title">{{ cat }} ({{ group.length }})</div>
        <div class="type-errors">
          <v-chip class="type-error" size="x-small" variant="flat"
            >critical: {{ countBy(group, 'critical') }}</v-chip
          >
          <v-chip class="type-error" size="x-small" variant="flat"
            >high: {{ countBy(group, 'high') }}</v-chip
          >
          <v-chip class="type-error" size="x-small" variant="flat"
            >medium: {{ countBy(group, 'medium') }}</v-chip
          >
          <v-chip class="type-error" size="x-small" variant="flat"
            >low: {{ countBy(group, 'low') }}</v-chip
          >
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
.title-table {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.type-errors {
  display: flex;
  gap: 12px;
}

.type-error {
  background-color: #0a7cff;
  font-weight: 600;
  font-size: 12px !important;
}

.title {
  font-weight: 800;
  color: #0a7cff;
  font-size: 20px;
  letter-spacing: 0.5px;
}
</style>
