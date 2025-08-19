<template>
  <v-card class="sg-card" rounded="xl" elevation="1" @click="handleClick">
    <div class="sg-thumb-wrap">
      <v-img
        :src="shot.url"
        :alt="shot.alt"
        class="sg-thumb"
        cover
        lazy-src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
      >
        <template #placeholder>
          <div class="sg-thumb-skeleton" />
        </template>
      </v-img>
    </div>

    <div class="sg-meta">
      <div class="sg-meta-title" :title="shot.pageTitle || shot.alt">
        {{ shot.pageTitle || shot.alt }}
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { ScreenshotItem } from '@/types/Gallery/gallery.types'

const props = defineProps<{
  shot: ScreenshotItem
  index: number
  onOpen?: (index: number) => void
}>()

const handleClick = () => {
  props.onOpen?.(props.index)
}
</script>

<style scoped>
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
</style>
