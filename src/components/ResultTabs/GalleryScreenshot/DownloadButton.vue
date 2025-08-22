<template>
  <v-btn color="primary" variant="tonal" rounded="lg" class="download-btn" @click="handleDownload">
    <v-icon start>mdi-download</v-icon>
    Watch and Download
  </v-btn>
  <BaseSnackbar v-model="snackbar" :color="snackbarColor" :text="snackbarText" />
</template>

<script setup lang="ts">
import BaseSnackbar from '@/components/SnackBar/BaseSnackbar.vue'
import { useScreenshotDownload } from '@/services/Gallery/useDownloadButton'

const props = defineProps<{ id: string }>()

const { snackbar, snackbarColor, snackbarText, handleDownload } = useScreenshotDownload(props.id)
</script>

<style scoped>
.download-btn {
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.3px;
}
</style>
