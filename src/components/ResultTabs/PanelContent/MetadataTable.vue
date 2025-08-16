<template>
  <header class="table-header">
    <h2 class="table-title">Extracted Metadata</h2>
  </header>

  <v-divider class="mb-4" />
  <v-data-table :headers="headers" :items="items" item-key="id" class="container-table">
    <template v-slot:[`item.name`]="{ item }">
      <div class="table-name">
        <v-chip class="table-chip" size="small" label>{{ item.name }}</v-chip>
      </div>
    </template>

    <!-- VALUE (ellipsis + native tooltip) -->
    <template v-slot:[`item.value`]="{ item }">
      <div class="table-value" :title="item.value">
        {{ item.value }}
      </div>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import type { MetaType } from '@/types/Panel/Metadata/metadata.types'

interface Props {
  items: MetaType[]
}
defineProps<Props>()

const headers = [
  { title: 'Name', key: 'name', sortable: true },
  { title: 'Value', key: 'value', sortable: false },
]
</script>

<style scoped>
.container-table {
  border: 1px solid #e9edf2;
  border-radius: 10px;
}

.table-header {
  margin-bottom: 16px;
}

.table-title {
  font-weight: 800;
  font-size: 22px;
  color: #0a7cff;
  letter-spacing: 0.5px;
}

.table-name .table-chip {
  font-weight: 700;
  border-radius: 8px;
  background: #eef5ff;
  color: #0a7cff;
  letter-spacing: 1px;
}

.table-value {
  overflow: hidden;
  text-overflow: ellipsis;
  color: #1f2937;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.table-group {
  text-transform: none;
  font-weight: 700;
  letter-spacing: 1px;
}
</style>
