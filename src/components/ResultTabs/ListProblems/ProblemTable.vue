<template>
  <v-data-table
    :headers="headers"
    :items="problems"
    item-key="id"
    class="table rounded-lg elevation-5"
  >
    <template v-slot:[`item.severity`]="{ item }">
      <v-chip :color="severityColor(item.severity)" variant="flat">
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
import type { ProblemItem } from '@/types/Problems/problems.types'
import { useProblemTable } from '@/services/Problems/useProblemTable'

interface Props {
  problems: ProblemItem[]
}
defineProps<Props>()

const { headers, severityColor, short } = useProblemTable()
</script>

<style scoped>
.table {
  --accent: #0a7cff;
  --border: #ecf0f4;
  --row-hover: rgba(10, 124, 255, 0.06);
  --row-stripe: #f9fbff;

  border-radius: 14px;
  background: linear-gradient(180deg, #f4f9ff, #eef6ff);
}

/* ===== заголовок ===== */
.table :deep(thead th) {
  position: sticky;
  top: 0;
  z-index: 1;
  color: #1f2937;
  font-weight: 800 !important;
  font-size: 15px;
  letter-spacing: 0.5px;
  padding: 12px 20px !important;
  border-bottom: 1px solid var(--border);
}

/* ===== строки ===== */
.table :deep(tbody tr:hover td) {
  background: var(--row-hover); /* hover-подсветка */
}

/* ===== ячейки ===== */
.table :deep(td) {
  padding: 12px 20px !important;
  border-bottom: 1px solid var(--border);
  font-weight: 500;
  font-size: 14px;
  color: #1f2937;
}

/* чипы серьёзности в ячейках */
.table :deep(.v-chip) {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* helper */
.truncate {
  max-width: 350px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
