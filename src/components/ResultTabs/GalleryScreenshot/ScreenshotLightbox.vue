<template>
  <v-dialog v-model="lightboxOpen" max-width="1100" transition="fade-transition">
    <v-card rounded="xl" elevation="8">
      <div class="sg-lightbox-head">
        <div class="sg-lightbox-title">
          {{ currentItem?.pageTitle || currentItem?.alt }}
        </div>
        <div class="sg-lightbox-actions">
          <DownloadButton v-if="currentItem" :id="currentItem.id" />
          <v-btn icon variant="text" @click="lightboxOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </div>

      <v-divider class="mb-2" />

      <v-carousel
        v-model="carouselIndex"
        hide-delimiter-background
        show-arrows="hover"
        height="auto"
        hide-delimiters
        class="sg-carousel"
      >
        <v-carousel-item v-for="shot in items" :key="shot.id">
          <div class="sg-lightbox-img-wrap">
            <img class="sg-lightbox-img" :src="shot.url" :alt="shot.alt" />
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import DownloadButton from './DownloadButton.vue'
import type { ScreenshotItem } from '@/types/Gallery/gallery.types'

/** двусторонняя привязка как в родителе: v-model:lightboxOpen / v-model:carouselIndex */
const lightboxOpen = defineModel<boolean>('lightboxOpen')
const carouselIndex = defineModel<number>('carouselIndex')

/** данные приходят сверху, без изменений */
defineProps<{
  items: ScreenshotItem[]
  currentItem: ScreenshotItem | null | undefined
}>()
</script>

<style scoped>
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
