<template>
  <v-container fluid class="d-flex align-center justify-center form-wrapper">
    <v-card class="pa-10 form-card" max-width="750" width="750" elevation="12">
      <v-card-title class="mb-2 form-title">AI Marketing Content Crawler</v-card-title>
      <v-card-text class="form-subtitle mb-4">
        Paste one or more URLs to run the analysis
      </v-card-text>

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

        <v-btn
          v-if="input.url.length > 1 && index !== input.url.length - 1"
          prepend-icon="mdi-close"
          variant="text"
          color="grey darken-1"
          @click="removeLink(index)"
          class="remove-btn mr-2"
        >
        </v-btn>
        <v-btn
          v-if="index === input.url.length - 1"
          icon
          color="primary"
          @click="addLink"
          class="add-btn"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
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
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { InputUrl } from '@/types/Input/input.types'
import { postUrl } from '@/composable/Input/input.request'

const input = reactive<InputUrl>({
  url: [''],
})

const addLink = () => {
  input.url.push('')
}

const removeLink = (index: number) => {
  if (input.url.length > 1) {
    input.url.splice(index, 1)
  }
}

const isValidUrl = (url: string) => {
  return (url.startsWith('http://') || url.startsWith('https://')) && !url.includes(' ')
}

const submit = async () => {
  for (const url of input.url) {
    if (!isValidUrl(url)) {
      console.error(`Невалидная ссылка: ${url}`)
      return
    }
  }

  try {
    await postUrl(input)
  } catch (err) {
    console.error(err)
  }
}
</script>

<style scoped>
.form-wrapper {
  background-color: #f5f7fa;
}

.form-card {
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
  background-color: #1e88e5;
  color: white;
  transition: 0.3s;
}

.analyze-btn:hover {
  background-color: #0a7cff !important;
}

.add-btn {
  margin-right: 15px;
  margin-left: 5px;
}

.add-btn:hover {
  background-color: #0a7cff !important;
}

.remove-btn {
  min-width: 32px;
  height: 32px;
}
</style>
