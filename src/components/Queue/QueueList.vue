<template>
  <v-container fluid class="queue-wrapper">
    <div class="queue-header">
      <h1 class="queue-title">Processing Queue</h1>

      <v-btn
        class="check-status-btn"
        size="large"
        rounded="pill"
        variant="elevated"
        prepend-icon="mdi-refresh"
        elevation="12"
        @click="reloadPage"
      >
        Check status
      </v-btn>
    </div>

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

// Перезагрузка страницы по клику на кнопку
const reloadPage = () => window.location.reload()
</script>

<style scoped>
.queue-wrapper {
  background: #f5f7fa;
  padding: 48px;
}

/* Заголовок + кнопка */
.queue-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 8px;
}

.queue-title {
  font-weight: 800;
  color: #0a7cff;
  margin: 0;
  font-size: 30px;
  letter-spacing: 1px;
  word-spacing: 10px;
}

/* Стильная кнопка Check status */
.check-status-btn {
  /* анимированный градиент */
  background: linear-gradient(90deg, #0ea5ff, #7c3aed, #0ea5ff) !important;
  background-size: 200% 100%;
  animation: gradientShift 3s ease infinite;
  color: #fff !important;
  text-transform: none;
  font-weight: 800;
  letter-spacing: 0.3px;
  box-shadow:
    0 12px 28px rgba(14, 165, 255, 0.35),
    0 6px 14px rgba(124, 58, 237, 0.25);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    filter 0.18s ease;
  will-change: transform, box-shadow;
}

.check-status-btn:hover {
  transform: translateY(-1px) scale(1.02);
  box-shadow:
    0 16px 36px rgba(14, 165, 255, 0.45),
    0 10px 22px rgba(124, 58, 237, 0.35);
  filter: brightness(1.02);
}

/* лёгкая анимация иконки при hover */
.check-status-btn :deep(.v-btn__prepend) {
  transition: transform 0.25s ease;
}
.check-status-btn:hover :deep(.v-btn__prepend) {
  transform: rotate(12deg);
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
