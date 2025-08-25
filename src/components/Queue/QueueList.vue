<template>
  <v-container fluid class="queue-wrapper">
    <div class="queue-header">
      <h1 class="queue-title">Processing Queue</h1>

      <v-btn
        class="check-status-btn"
        variant="outlined"
        color="primary"
        rounded="lg"
        prepend-icon="mdi-refresh"
        @click="reloadPage"
      >
        Check status
      </v-btn>
    </div>

    <v-data-table
      :headers="headers"
      :items="queueItems"
      hide-default-footer
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

const {
  snackbar,
  snackbarColor,
  snackbarText,
  queueItems,
  tokenUser,
  headers,
  onCancel,
  reloadPage,
} = useQueueList()
</script>

<style scoped>
.queue-wrapper {
  background: #f5f7fa;
  padding: 48px;
}

.queue-header {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.queue-title {
  margin: 0;
  font-weight: 800;
  color: #0a7cff;
  font-size: 30px;
  letter-spacing: 1px;
  word-spacing: 10px;
}
.check-status-btn {
  margin-left: auto;
  flex: 0 0 auto;
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
