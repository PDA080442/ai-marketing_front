<template>
  <v-data-table
    :headers="headers"
    :items="items"
    item-key="id"
    class="table rounded-lg elevation-5"
    density="comfortable"
  >
    <!-- PRIORITY chip -->
    <template v-slot:[`item.priority`]="{ item }">
      <span class="sev-chip" :style="sevStyle(item.priority)">
        {{ item.priority.toUpperCase() }}
      </span>
    </template>

    <!-- EFFORT -->
    <template v-slot:[`item.effort`]="{ item }">
      <span>{{ item.effort ?? '—' }}</span>
    </template>

    <!-- EXCERPT (tooltip + truncate) -->
    <template v-slot:[`item.excerpt`]="{ item }">
      <div class="truncate">
        <v-tooltip v-if="item.excerpt" location="bottom">
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
import type {
  RecommendationItem,
  RecommendationPriority,
} from '@/types/Recommendations/recommendations.types'

interface Props {
  items: RecommendationItem[]
}
defineProps<Props>()

type Header = {
  title: string
  key: keyof RecommendationItem | 'excerpt'
  sortable?: boolean
  width?: number | string
}

const headers: Header[] = [
  { title: 'Title', key: 'title', width: 260 },
  { title: 'Details', key: 'details', width: 420 },
  { title: 'Priority', key: 'priority', width: 140 },
  { title: 'Effort', key: 'effort', width: 110 },
  { title: 'Excerpt', key: 'excerpt', sortable: false, width: 320 },
]

// цвета как на макете
const PRIORITY_HEX: Record<RecommendationPriority, string> = {
  critical: '#D92D20', // красный
  high: '#F79009', // оранжевый
  medium: '#FDB022', // янтарный
  low: '#2E90FA', // синий
  info: '#64748B', // серый
}

function sevStyle(p: RecommendationPriority): Record<string, string> {
  return {
    backgroundColor: PRIORITY_HEX[p] ?? '#0A7CFF',
    color: '#fff',
  }
}

function short(text: string, max = 80): string {
  return text.length > max ? `${text.slice(0, max)}…` : text
}
</script>

<style scoped>
/* ПАЛИТРА — под твой скрин */
.table {
  --header-bg: #eef5ff; /* thead */
  --footer-bg: #edf3ff; /* если будет внешний футер */
  --row-stripe: #f7faff; /* зебра */
  --row-hover: rgba(10, 124, 255, 0.06);
  --border: #d7e3ff;
  --text: #0f172a;

  border-radius: 14px;
  background: linear-gradient(180deg, #f4f9ff 0%, #eef6ff 100%);
}

/* THEAD — голубой, жирный */
.table :deep(thead th) {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--header-bg) !important;
  color: var(--text);
  font-weight: 800 !important;
  font-size: 15px;
  letter-spacing: 0.5px;
  padding: 12px 20px !important;
  border-bottom: 1px solid var(--border);
}

/* ЗЕБРА + HOVER */
.table :deep(tbody tr:nth-child(even) td) {
  background: var(--row-stripe);
}
.table :deep(tbody tr:hover td) {
  background: var(--row-hover);
}

/* ЯЧЕЙКИ */
.table :deep(td) {
  padding: 14px 20px !important;
  border-bottom: 1px solid var(--border);
  font-weight: 500;
  font-size: 14px;
  color: var(--text);
}
.table :deep(tbody td:first-child) {
  font-weight: 600;
}

/* ЧИП СЕРЬЁЗНОСТИ — капс, белый текст, пилюля */
.sev-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 999px;
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 0.02em;
  color: #fff;
  text-transform: uppercase;
}

/* Усилим вид Vuetify-чипов, если захочешь их вернуть */
.table :deep(.v-chip) {
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding-inline: 12px;
  color: #fff;
}

/* Обрезка текста */
.truncate {
  max-width: 360px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
