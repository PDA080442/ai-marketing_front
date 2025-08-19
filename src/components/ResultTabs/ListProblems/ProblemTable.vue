<template>
  <v-data-table :headers="headers" :items="problems" item-key="id" class="elevation-1">
    <template v-slot:[`item.severity`]="{ item }">
      <v-chip :color="severityColor(item.severity)" size="small" variant="flat">
        {{ item.severity }}
      </v-chip>
    </template>

    <template v-slot:[`item.excerpt`]="{ item }">
      <div class="truncate">
        <v-tooltip location="bottom" v-if="item.excerpt">
          <template #activator="{ props }">
            <span v-bind="props">{{ short(item.excerpt) }}</span>
          </template>
          <span>{{ item.excerpt }}</span>
        </v-tooltip>
        <span v-else>—</span>
      </div>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import type { ProblemItem, ProblemSeverity } from '@/types/Problems/problems.types'

interface Props {
  problems: ProblemItem[]
}
defineProps<Props>()

type Header = { title: string; key: keyof ProblemItem | 'excerpt'; sortable?: boolean }

const headers: Header[] = [
  { title: 'Title', key: 'title' },
  { title: 'Details', key: 'details' },
  { title: 'Severity', key: 'severity' },
  { title: 'Occurrences', key: 'occurrences' },
  { title: 'Excerpt', key: 'excerpt', sortable: false },
]

function severityColor(sev: ProblemSeverity): string {
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

function short(text: string, max = 80): string {
  return text.length > max ? `${text.slice(0, max)}…` : text
}
</script>

<style scoped>
.truncate {
  max-width: 420px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
