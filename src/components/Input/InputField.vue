<template>
  <v-container fluid class="d-flex align-center justify-center form-wrapper">
    <v-card class="pa-10 form-card" max-width="750" width="750" elevation="12">
      <v-card-title class="mb-2 form-title">AI Marketing Content Crawler</v-card-title>
      <v-card-text class="form-subtitle mb-4"> Paste URL to run the analysis </v-card-text>

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
        ></v-text-field>
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
  </v-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { InputUrl, TokenUser } from '@/types/Input/input.types'
import { postUrl } from '@/composable/Input/input.request'
import { useRouter } from 'vue-router'
import BaseSnackbar from '../SnackBar/BaseSnackbar.vue'

const router = useRouter()
const snackbar = ref(false)
const snackbarColor = ref<'success' | 'error'>('success')
const snackbarText = ref('')

const input = reactive<InputUrl>({
  url: [''],
})

const isValidUrl = (url: string) => {
  return (url.startsWith('http://') || url.startsWith('https://')) && !url.includes(' ')
}

const submit = async () => {
  for (const url of input.url) {
    if (!isValidUrl(url)) {
      console.error(`Невалидная ссылка: ${url}`)
      snackbarText.value = `${url} is not valid`
      snackbarColor.value = 'error'
      snackbar.value = true
      return
    }
  }

  try {
    const { token } = (await postUrl(input)) as TokenUser
    localStorage.setItem('tokenUser: ', token)
    await router.push({ name: 'Queue', query: { token } })
    snackbarText.value = 'You sent link(s) for analyze'
    snackbarColor.value = 'success'
    snackbar.value = true
  } catch (err) {
    console.error(err)
    snackbarText.value = 'An error has occurred. \n Please check your links and try again.'
    snackbarColor.value = 'error'
    snackbar.value = true
  }
}
</script>

<style scoped>
.form-wrapper {
  background-color: #f5f7fa;
}

.form-card {
  margin-top: 120px;
  background: white;
  border-radius: 24px;
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
  font-weight: 500;
  font-size: 18px;
  background-color: #0a7cff !important;
  color: white;
  transition: 0.3s;
}

.snackbar {
  border-radius: 12px;
  padding: 14px 20px !important;
  font-weight: 500;
  letter-spacing: 0.3px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.snackbar-content {
  text-align: center;
  font-size: 17px;
  font-weight: 600;
}
</style>
