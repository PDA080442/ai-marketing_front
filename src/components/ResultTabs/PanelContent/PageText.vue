<template>
  <div>
    <header class="pt-header">
      <h1 class="pt-title">Extracted Text</h1>
    </header>
    <v-divider class="mb-4" />
    <div class="pt-content">
      <v-card
        v-for="(text, idx) in items[0]?.content || []"
        :key="idx"
        class="pt-block"
        elevation="2"
        rounded="lg"
      >
        <p class="pt-text">{{ text }}</p>
      </v-card>
    </div>
    <BaseSnackbar v-model="snackbar" :color="snackbarColor" :text="snackbarText" />
  </div>
</template>

<script setup lang="ts">
import BaseSnackbar from '@/components/SnackBar/BaseSnackbar.vue'
import { usePageText } from '@/services/Panel/usePageText'

const { snackbar, snackbarColor, snackbarText, items } = usePageText()
</script>

<style scoped>
.pt-header {
  margin-bottom: 16px;
}

.pt-title {
  font-weight: 800;
  font-size: 22px;
  color: #0a7cff;
  letter-spacing: 0.5px;
}

.pt-content {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.pt-block {
  padding: 16px 20px;
  border: 1px solid #e9edf2;
  background: linear-gradient(180deg, #ffffff, #fdfdff);
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

.pt-block:hover {
  border-color: rgba(10, 124, 255, 0.35);
  box-shadow: 0 10px 22px rgba(16, 24, 40, 0.08);
  transform: translateY(-2px);
}

.pt-text {
  color: #1f2937;
  font-size: 15px;
  line-height: 1.65;
  margin: 0;
  font-weight: 400;
}
</style>
