<template>
  <v-container fluid class="queue-wrapper">
    <h1 class="queue-title">Processing Queue</h1>

    <v-data-table
      :headers="headers"
      :items="queueItems"
      item-key="id"
      class="elevation-4 rounded-xl overflow-hidden pa-2"
    >
      <template v-slot:[`item.url`]="{ value }">
        <div class="url-cell" :title="value">
          <v-icon size="15" class="link-icon" color="#1E88E5">mdi-link-variant</v-icon>
          <a class="url-link" :href="value" target="_blank" rel="noopener">
            {{ value }}
          </a>
        </div>
      </template>

      <template v-slot:[`item.progress`]="{ value, item }">
        <div class="status-cell">
          <template v-if="value?.status !== 'done'">
            <v-chip size="small" variant="elevated" color="#B0BEC5">Queued</v-chip>
          </template>
          <template v-else>
            <v-btn
              color="success"
              size="small"
              rounded="lg"
              variant="elevated"
              :to="{ name: 'Result', query: { id: item.id, token: tokenUser } }"
            >
              Result
            </v-btn>
          </template>
        </div>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <div class="actions-cell">
          <v-btn
            v-if="item.progress?.status !== 'done'"
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

    <BaseSnackbar v-model="snackbar" :color="snackbarColor" :text="snackbarText" />
  </v-container>
</template>

<script setup lang="ts">
import BaseSnackbar from '../SnackBar/BaseSnackbar.vue'
import { useQueueList } from '@/services/Queue/useQueueList'

const { snackbar, snackbarColor, snackbarText, queueItems, tokenUser, headers, onCancel } =
  useQueueList()
</script>

<style scoped>
.queue-wrapper {
  background: #f5f7fa;
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
</style>
