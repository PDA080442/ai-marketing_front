<template>
  <div>
    <header class="sg-header">
      <h2 class="sg-title">Screenshots</h2>
      <p class="sg-subtitle">Full-page and viewport captures from the scanned pages</p>
    </header>
    <v-divider class="mb-4" />
    <v-row class="sg-grid">
      <v-col v-for="(shot, idx) in items" :key="shot.id" md="4">
        <ScreenshotCard :shot="shot" :index="idx" :onOpen="openLightbox" />
      </v-col>
    </v-row>
    <ScreenshotLightbox
      v-model:lightboxOpen="lightboxOpen"
      v-model:carouselIndex="carouselIndex"
      :items="items"
      :currentItem="currentItem"
    />
    <BaseSnackbar v-model="snackbar" :color="snackbarColor" :text="snackbarText" />
  </div>
</template>

<script setup lang="ts">
import ScreenshotLightbox from './ScreenshotLightbox.vue'
import ScreenshotCard from './ScreenshotCard.vue'
import BaseSnackbar from '@/components/SnackBar/BaseSnackbar.vue'
import { useScreenshots } from '@/services/Gallery/useScreenshots'

const {
  items,
  lightboxOpen,
  carouselIndex,
  snackbar,
  snackbarColor,
  snackbarText,
  currentItem,
  openLightbox,
} = useScreenshots()
</script>

<style scoped>
.sg-header {
  margin-bottom: 12px;
}

.sg-title {
  font-weight: 800;
  font-size: 25px;
  color: #0a7cff;
  letter-spacing: 1px;
}

.sg-subtitle {
  color: #6c757d;
  font-size: 13px;
  margin-top: 6px;
}

.sg-grid {
  margin: 0;
}
</style>
