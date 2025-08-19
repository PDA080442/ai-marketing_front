<template>
  <div>
    <header class="sg-header">
      <h2 class="sg-title">Screenshots</h2>
      <p class="sg-subtitle">Full-page and viewport captures from the scanned pages</p>
    </header>
    <v-divider class="mb-4" />
    <v-row class="sg-grid">
      <v-col v-for="(shot, idx) in items" :key="shot.id" md="4">
        <v-card class="sg-card" rounded="xl" elevation="1" @click="openLightbox(idx)">
          <div class="sg-thumb-wrap">
            <v-img
              :src="shot.url"
              :alt="shot.alt"
              class="sg-thumb"
              cover
              lazy-src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            >
              <template #placeholder>
                <div class="sg-thumb-Sskeleton" />
              </template>
            </v-img>
          </div>
          <div class="sg-meta">
            <div class="sg-meta-title" :title="shot.pageTitle || shot.alt">
              {{ shot.pageTitle || shot.alt }}
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <ScreenshotLightbox
      v-model:lightboxOpen="lightboxOpen"
      v-model:carouselIndex="carouselIndex"
      :items="items"
      :currentItem="currentItem"
    />
    <v-snackbar
      class="snackbar"
      :color="snackbarColor"
      v-model="snackbar"
      location="top"
      elevation="0"
      transition="slide-y-transition"
    >
      <div class="snackbar-content">
        <span>{{ snackbarText }}</span>
      </div>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { ScreenshotItem } from '@/types/Gallery/gallery.types'
import { getGalleryScreen } from '@/composable/Gallery/gallery.request'
import ScreenshotLightbox from './ScreenshotLightbox.vue'

const items = ref<ScreenshotItem[]>([])
const lightboxOpen = ref(false)
const carouselIndex = ref(0)

const snackbar = ref(false)
const snackbarColor = ref<'success' | 'error'>('success')
const snackbarText = ref('')

const currentItem = computed(() => items.value[carouselIndex.value])

const openLightbox = (index: number) => {
  carouselIndex.value = index
  lightboxOpen.value = true
}

onMounted(async () => {
  try {
    items.value = await getGalleryScreen()
  } catch (err) {
    console.log('Error: ', err)
    snackbar.value = true
    snackbarColor.value = 'error'
    snackbarText.value = 'Error. Data not loaded'
  }
})
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

.sg-card {
  border: 1px solid #e9edf2;
  overflow: hidden;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
  cursor: pointer;
}

.sg-card:hover {
  border-color: rgba(10, 124, 255, 0.25);
  transform: translateY(-2px);
}

.sg-thumb-wrap {
  position: relative;
  background: #f9fafb;
}

.sg-thumb {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.sg-thumb-skeleton {
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #f2f4f7 25%, #eef2f7 37%, #f2f4f7 63%);
  background-size: 400% 100%;
}

.sg-meta {
  padding: 12px;
}

.sg-meta-title {
  font-weight: 700;
  font-size: 14px;
  color: #0a7cff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sg-meta-sub {
  color: #6c757d;
  font-size: 12px;
}

.sg-lightbox-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px 0 14px;
}

.sg-lightbox-title {
  font-weight: 800;
  color: #0a7cff;
  letter-spacing: 0.3px;
  font-size: 16px;
  padding-right: 8px;
}

.sg-carousel {
  padding: 8px 10px 16px;
}

.sg-lightbox-img-wrap {
  width: 100%;
  display: grid;
  place-items: center;
  background: #fbfcfe;
  border-radius: 14px;
  border: 1px solid #eef2f7;
  overflow: hidden;
}

.sg-lightbox-img {
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
  display: block;
}

.sg-lightbox-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
