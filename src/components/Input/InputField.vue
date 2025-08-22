<template>
  <v-container fluid class="page-split d-flex pa-0">
    <div class="left-pane d-flex align-center justify-center">
      <v-card class="pa-10 form-card" elevation="8" max-width="600" width="100%">
        <v-card-title class="mb-2 form-title">Paste URL to run the analysis</v-card-title>

        <div
          v-for="(link, index) in input.url"
          :key="index"
          class="d-flex align-center mb-5 url-input-group"
        >
          <v-text-field
            v-model="input.url[index]"
            variant="outlined"
            rounded="lg"
            hide-details="auto"
            placeholder="https://example.com"
            color="primary"
            class="flex-grow-1 mr-2"
          />
        </div>

        <v-btn
          class="analyze-btn mb-4"
          color="primary"
          size="large"
          block
          rounded="lg"
          @click="submit"
        >
          Analyze
        </v-btn>

        <BaseSnackbar v-model="snackbar" :color="snackbarColor" :text="snackbarText" />
      </v-card>
    </div>

    <div class="right-pane d-flex flex-column align-center justify-center px-12">
      <h2 class="content-title mb-4">AI Marketing Content Crawler</h2>
      <p class="content-description mb-6">
        A minimal but powerful tool for automatic website analysis and generation of recommendations
        for increasing conversion.
      </p>
    </div>

    <v-dialog v-model="scanning" persistent width="420">
      <v-card class="scan-card pa-6 d-flex flex-column align-center">
        <div class="scan-anim mb-4">
          <div class="pulse"></div>
          <div class="pulse pulse-2"></div>
          <div class="pulse pulse-3"></div>
          <v-progress-circular indeterminate :size="80" :width="6" color="primary" />
        </div>
        <h3 class="scan-title mb-1">Scanning your link…</h3>
        <p class="scan-subtitle text-medium-emphasis mb-0">Rendering and extracting content</p>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import BaseSnackbar from '../SnackBar/BaseSnackbar.vue'

import { useInput } from '@/services/Input/useInput'
const { input, snackbar, snackbarColor, snackbarText, submit, scanning } = useInput()
</script>

<style scoped>
.page-split {
  min-height: 100vh;
  height: 100vh;
  display: flex;
  overflow: hidden;
}

.left-pane {
  flex: 1;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-pane {
  flex: 1;
  background: linear-gradient(135deg, #0a7cff, #0056b3);
  color: white;
  text-align: center;
}

.content-title {
  font-size: 32px;
  font-weight: 800;
  line-height: 1.2;
  max-width: 500px;
}

.content-description {
  font-size: 20px;
  max-width: 500px;
  color: #e0e0e0;
}

.form-card {
  background: white;
  border-radius: 24px;
  width: 100%;
}

.form-title {
  font-weight: 700;
  color: #0a7cff;
  text-align: center;
  font-size: 28px;
}

.form-subtitle {
  font-size: 16px;
  text-align: center;
  color: #6c757d;
}

.analyze-btn {
  font-weight: 600;
  font-size: 18px;
  background-color: #0a7cff !important;
  color: white;
  transition: 0.3s;
}

/* Dialog styles */
.scan-card {
  border-radius: 20px;
}

.scan-title {
  font-weight: 700;
  font-size: 20px;
}

.scan-subtitle {
  font-size: 14px;
}

.scan-anim {
  position: relative;
  width: 120px;
  height: 120px;
  display: grid;
  place-items: center;
}

.pulse,
.pulse-2,
.pulse-3 {
  position: absolute;
  border: 2px solid rgba(10, 124, 255, 0.35);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: pulse 1.8s linear infinite;
}

.pulse-2 {
  animation-delay: 0.3s;
}

.pulse-3 {
  animation-delay: 0.6s;
}

@keyframes pulse {
  0% {
    transform: scale(0.6);
    opacity: 0.9;
  }
  70% {
    transform: scale(2.2);
    opacity: 0.15;
  }
  100% {
    transform: scale(2.6);
    opacity: 0;
  }
}
</style>
