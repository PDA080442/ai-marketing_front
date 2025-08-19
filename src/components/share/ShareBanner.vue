<template>
  <v-sheet
    class="share-banner d-flex align-center justify-space-between px-4 py-3 mb-6"
    rounded="lg"
    elevation="1"
  >
    <div class="d-flex align-center">
      <v-icon :color="mode === 'shared' ? 'primary' : 'grey'" class="mr-2">
        {{ mode === 'shared' ? 'mdi-link-variant' : 'mdi-lock' }}
      </v-icon>

      <div>
        <div class="font-weight-bold">
          {{ mode === 'shared' ? 'Shared link active' : 'Private mode' }}
        </div>
      </div>
    </div>

    <div class="d-flex align-center">
      <v-btn
        v-if="mode === 'private'"
        color="primary"
        variant="flat"
        size="small"
        @click="onCreate"
        :loading="loading"
        class="mr-2"
      >
        <v-icon size="16" class="mr-1">mdi-share-variant</v-icon>
        Share
      </v-btn>

      <v-btn v-else color="primary" variant="tonal" size="small" @click="copyLink" class="mr-2">
        <v-icon size="16" class="mr-1">mdi-content-copy</v-icon>
        Copy
      </v-btn>

      <v-btn
        v-if="mode === 'shared'"
        color="error"
        variant="text"
        size="small"
        @click="onRevoke"
        :loading="loading"
      >
        <v-icon size="16" class="mr-1">mdi-close</v-icon>
        Revoke
      </v-btn>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createShareLink, revokeShare } from '@/composable/Share/share.request'
import type { ShareMode, ShareCreateResponse } from '@/types/Share/share.types'

interface Props {
  mode: ShareMode
  resultId: string
  title?: string
  token?: string | null
}
const props = withDefaults(defineProps<Props>(), {
  title: 'Result access',
  token: null,
})

const emit = defineEmits<{
  (e: 'created', payload: ShareCreateResponse): void
  (e: 'revoked'): void
}>()

const loading = ref(false)
const lastShareUrl = ref<string | null>(null)

async function onCreate() {
  try {
    loading.value = true
    const res = await createShareLink({
      resultId: props.resultId,
    })
    lastShareUrl.value = res.url
    await navigator.clipboard.writeText(res.url)
    emit('created', res)
  } finally {
    loading.value = false
  }
}

async function onRevoke() {
  if (!props.token) return
  try {
    loading.value = true
    await revokeShare(props.token)
    emit('revoked')
  } finally {
    loading.value = false
  }
}

async function copyLink() {
  if (props.token) {
    const url = new URL(window.location.href)
    url.searchParams.set('share', props.token)
    await navigator.clipboard.writeText(url.toString())
  } else if (lastShareUrl.value) {
    await navigator.clipboard.writeText(lastShareUrl.value)
  }
}
</script>

<style scoped>
.share-banner {
  background: linear-gradient(90deg, #f4f9ff, #eef6ff);
  border: 1px solid #d7e3ff;
}
</style>
