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
  </v-container>
</template>

<script setup lang="ts">
import BaseSnackbar from '../SnackBar/BaseSnackbar.vue'

import { useInput } from '@/services/Input/useInput'
const { input, snackbar, snackbarColor, snackbarText, submit } = useInput()
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
</style>
