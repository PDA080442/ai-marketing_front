<template>
  <v-container fluid class="queue-wrapper">
    <h1 class="queue-title">Processing Queue</h1>
    <v-data-table
      :headers="headers"
      :items="items"
      item-key="id"
      class="elevation-4 rounded-xl overflow-hidden pa-2"
    >
      <template v-slot:[`item.url`]="{ item }">
        <div class="url-cell" :title="item.url">
          <v-icon size="15" class="link-icon" color="#1E88E5">mdi-link-variant</v-icon>
          <a class="url-link" :href="item.url" target="_blank">
            {{ item.url }}
          </a>
        </div>
      </template>
      <template v-slot:[`item.progress`]="{ item }">
        <div>
          <v-progress-linear
            :model-value="barProps(item.progress.status).value"
            :indeterminate="barProps(item.progress.status).indeterminate"
            :color="barProps(item.progress.status).color"
            height="20"
            rounded
          >
            <template #default>
              <span :class="['bar-label', barProps(item.progress.status).labelClass]">
                {{ barProps(item.progress.status).label }}
              </span>
            </template>
          </v-progress-linear>
        </div>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { QueueItems, QueuseProgress } from '@/types/Queue/queue.types'
import { queueMocks } from '@/mocks/queue.mocks'

const headers = [
  { title: 'Link', key: 'url' },
  { title: 'Progress', key: 'progress', sortable: false },
]

const items = ref<QueueItems[]>(queueMocks)

const COLORS = {
  primary: '#1E88E5',
  success: '#43A047',
  queued: '#B0BEC5',
}

function barProps(status: QueuseProgress['status']) {
  switch (status) {
    case 'queued':
      return {
        value: 0,
        indeterminate: false,
        color: COLORS.queued,
        label: 'Queued',
        labelClass: 'label-queued',
      }
    case 'processing':
      return {
        value: 50,
        indeterminate: true,
        color: COLORS.primary,
        label: 'Processing…',
        labelClass: 'label-processing',
      }
    case 'done':
      return {
        value: 100,
        indeterminate: false,
        color: COLORS.success,
        label: 'Done',
        labelClass: 'label-done',
      }
  }
}
</script>

<style scoped>
.queue-wrapper {
  background: #f5f7fa;
  min-height: 100vh;
  padding: 48px;
}

.queue-title {
  font-weight: 800;
  color: #0a7cff;
  margin-bottom: 16px;
  font-size: 30px;
  letter-spacing: 1px;
  word-spacing: 10px;
}

.url-cell {
  display: flex;
  align-items: center;
}

.url-link {
  color: #1e88e5;
  font-size: 15px;
  font-weight: 600;
}

.url-link:hover {
  text-decoration: underline;
  background: none !important;
}

.bar-label {
  font-size: 15px;
  font-weight: 800;
  padding: 5px;
}

.label-processing,
.label-done {
  color: #fff;
}
</style>
