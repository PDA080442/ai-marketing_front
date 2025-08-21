<template>
  <v-app>
    <MainHeader
      title="Analysis Results"
      subtitle="Insights, issues, and AI recommendations"
      :show-search="true"
      @search="onSearch"
    >
      <!-- ДЕМО: табы, стилизованы под скрин -->
      <template #tabs>
        <v-tabs v-model="tab" slider-color="primary" density="comfortable" class="rounded-tabs">
          <v-tab value="panel" prepend-icon="mdi-view-dashboard-outline">Panel Content</v-tab>
          <v-tab value="gallery" prepend-icon="mdi-image-multiple-outline"
            >Gallery Screenshots</v-tab
          >
          <v-tab value="problems" prepend-icon="mdi-alert-circle-outline">List Problems</v-tab>
          <v-tab value="reco" prepend-icon="mdi-lightbulb-on-outline">Recommendation from AI</v-tab>
        </v-tabs>
      </template>

      <!-- доп. экшены справа (иконка + кнопка) -->
      <template #actions>
        <v-btn icon variant="tonal" class="hidden-sm-and-down">
          <v-badge :content="3" color="error" offset-x="5" offset-y="5">
            <v-icon icon="mdi-bell-outline" />
          </v-badge>
        </v-btn>
        <v-btn color="primary" rounded="xl" class="hidden-xs">
          <v-icon icon="mdi-play-circle-outline" class="mr-2" />
          Run Analysis
        </v-btn>
      </template>
    </MainHeader>

    <v-main class="bg-grey-lighten-5">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import MainHeader from './components/MainHeader.vue'

const router = useRouter()
const tab = ref<'panel' | 'gallery' | 'problems' | 'reco'>('panel')

watch(tab, (val) => {
  // Пример привязки к роутам (замени на свои пути при необходимости)
  const map: Record<string, string> = {
    panel: '/result/panel',
    gallery: '/result/gallery',
    problems: '/result/problems',
    reco: '/result/recommendations',
  }
  const path = map[val]
  if (path) router.push(path)
})

function onSearch(q: string) {
  // Вешай свою логику поиска/фильтрации
  console.log('Search:', q)
}
</script>

<style scoped>
.rounded-tabs :deep(.v-tab) {
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0;
  border-radius: 999px;
  margin-right: 8px;
  padding-inline: 14px;
}
.rounded-tabs :deep(.v-tab--selected) {
  background: #eef2ff;
}
</style>
