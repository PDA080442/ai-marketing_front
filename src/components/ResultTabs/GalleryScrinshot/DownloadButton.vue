<template>
  <v-btn color="primary" variant="tonal" rounded="lg" class="download-btn" @click="handleDownload">
    <v-icon start>mdi-download</v-icon>
    Watch and Download
  </v-btn>
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { downloadScreenshot } from '@/composable/Gallery/gallery.request'
import type { ScreenshotDownload } from '@/types/Gallery/gallery.types'

const snackbar = ref(false)
const snackbarColor = ref<'success' | 'error'>('success')
const snackbarText = ref('')

const props = defineProps<{ id: string }>()

const handleDownload = async () => {
  try {
    const file: ScreenshotDownload = await downloadScreenshot(props.id)
    const f = document.createElement('a')
    f.href = file.url
    f.download = file.fileName
    f.rel = 'noopener'
    f.click()
  } catch (err) {
    snackbar.value = true
    snackbarColor.value = 'error'
    snackbarText.value = 'Error. Screenshot does not save'
    console.error(err)
  }
}
</script>

<style scoped>
.download-btn {
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.3px;
}
</style>
