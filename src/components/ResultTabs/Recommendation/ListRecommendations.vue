<template>
  <div>
    <header class="lp-header">
      <h1 class="lp-title">Recommendations</h1>
    </header>
    <v-tabs v-model="tab" class="problem-tabs">
      <v-tab value="list" class="tab">Recommendations List</v-tab>
      <v-tab value="text" class="tab">Page Text</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="list">
        <div class="filters">
          <v-chip
            v-for="cat in categoriesWithAll"
            :key="cat"
            :color="cat === activeCategory ? 'primary' : ''"
            variant="elevated"
            pill
            class="px-4"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </v-chip>
        </div>

        <RecommendationCardList :items="filteredFlat" />
      </v-window-item>

      <v-window-item value="text">
        <RecommendationCardList :items="textOnly" />
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import RecommendationCardList from './RecommendationCardList.vue'
import { RECO_CATEGORIES } from '@/utils/Recommendations/constants'
import { recommendationsListMock } from '@/mocks/recommendations.mocks'
import type { RecommendationItem } from '@/types/Recommendations/recommendations.types'

const tab = ref<'list' | 'text'>('list')
const list = ref<RecommendationItem[]>([])
const activeCategory = ref<string>('All')

const categoriesWithAll = computed(() => ['All', ...RECO_CATEGORIES])

const filtered = computed(() =>
  activeCategory.value === 'All'
    ? list.value
    : list.value.filter((r) => r.category === activeCategory.value),
)

const order: Record<string, number> = { critical: 0, high: 1, medium: 2, low: 3, info: 4 }
const filteredFlat = computed(() =>
  [...filtered.value].sort((a, b) => (order[a.priority] ?? 99) - (order[b.priority] ?? 99)),
)

const textOnly = computed(() => list.value.filter((r) => !!r.excerpt))

const snackbar = ref(false)
const snackbarColor = ref<'success' | 'error' | 'info'>('success')
const snackbarText = ref('')

onMounted(() => {
  try {
    list.value = recommendationsListMock
  } catch (e) {
    snackbar.value = true
    snackbarColor.value = 'error'
    snackbarText.value = 'Failed to load recommendations.'
    console.error(e)
  }
})
</script>

<style scoped>
.lp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.lp-title {
  padding-left: 16px;
  font-weight: 800;
  font-size: 25px;
  color: #0a7cff;
  letter-spacing: 1px;
}

.problem-tabs {
  margin-bottom: 22px;
  padding-left: 16px;
}
.tab {
  position: relative;
  font-weight: 800;
  letter-spacing: 1px;
  color: #425466;
  border-top-left-radius: 14px !important;
  border-top-right-radius: 14px !important;
  padding: 10px 18px;
  margin: 0 6px 2px;
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.tab:hover {
  background: rgba(10, 124, 255, 0.08);
  color: #0a7cff;
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(10, 124, 255, 0.1);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 6px 8px 16px 8px;
}
</style>
