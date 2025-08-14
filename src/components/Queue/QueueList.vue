<template>
  <v-container fluid class="queue-wrapper">
    <h1 class="queue-title">Processing Queue</h1>
    <v-data-table
      :headers="headers"
      :items="queueItems"
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
        <div class="status-cell">
          <template v-if="item.progress.status !== 'done'">
            <v-chip class="queued-chip" size="small" variant="elevated" color="#B0BEC5">
              Queued
            </v-chip>
          </template>
          <template v-else>
            <v-btn
              color="success"
              size="small"
              rounded="lg"
              variant="elevated"
              :to="{ name: 'Result', query: { id: item.id } }"
            >
              Result
            </v-btn>
          </template>
        </div>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <div class="actions-cell">
          <v-btn
            v-if="item.progress.status !== 'done'"
            size="small"
            color="error"
            variant="tonal"
            @click="onCancel(item)"
          >
            Cancel
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { QueueItems } from '@/types/Queue/queue.types'
import { getQueueLinks, cancelQueueLink } from '@/composable/Queue/queue.request'

const headers = [
  { title: 'Link', key: 'url' },
  { title: 'Progress', key: 'progress', sortable: false },
  { title: 'Actions', key: 'actions', sortable: false },
]
const queueItems = ref<QueueItems[]>([])

onMounted(async () => {
  const token = localStorage.getItem('tokenUser: ') || ''
  if (!token) {
    return
  }
  try {
    const response = await getQueueLinks(token)
    queueItems.value = response
  } catch (error) {
    console.error(error)
    queueItems.value = []
  }
})

const onCancel = async (item: QueueItems) => {
  const token = localStorage.getItem('tokenUser: ') || ''
  if (!token) return
  try {
    await cancelQueueLink(item.id, token)
    queueItems.value = queueItems.value.filter((i) => i.id !== item.id)
  } catch (err) {
    console.error(err)
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
