<template>
  <v-container fluid class="result-wrapper">
    <v-card class="pa-5" elevation="12" rounded="xl">
      <div>
        <h1 class="tabs-title">Analysis Results</h1>
        <p class="tabs-subtitle">Insights, issues, and AI recommendations</p>
      </div>

      <v-tabs v-model="activeIndex" class="tabs" grow selected-class="tab--active">
        <v-tab v-for="tab in tabs" :key="tab.value" class="tab">
          <v-icon size="18" class="mr-2">{{ tab.icon }}</v-icon>
          {{ tab.label }}
        </v-tab>
      </v-tabs>

      <v-divider class="mb-5" />

      <div class="panel-wrap">
        <transition name="fade-slide" mode="out-in">
          <component
            :is="tabs[activeIndex].component"
            :key="tabs[activeIndex].value"
            class="panel"
          />
        </transition>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import PanelContent from '@/components/ResultTabs/PanelContent/PanelContent.vue'
import ListProblems from '@/components/ResultTabs/ListProblems.vue'
import RecommendAI from '@/components/ResultTabs/RecommendAI.vue'
import GalleryScrinshot from '../ResultTabs/GalleryScrinshot/GalleryScrinshot.vue'

type TabValue = 'panel' | 'gallery' | 'problem' | 'recommend'

interface TabItem {
  label: string
  value: TabValue
  icon: string
  component: object
}

const tabs: TabItem[] = [
  {
    label: 'Panel Content',
    value: 'panel',
    icon: 'mdi-view-dashboard-outline',
    component: PanelContent,
  },
  {
    label: 'Gallery Screenshots',
    value: 'gallery',
    icon: 'mdi-image-album',
    component: GalleryScrinshot,
  },
  {
    label: 'List Problems',
    value: 'problem',
    icon: 'mdi-alert-circle-outline',
    component: ListProblems,
  },
  {
    label: 'Recommendation from AI',
    value: 'recommend',
    icon: 'mdi-robot-outline',
    component: RecommendAI,
  },
]

const route = useRoute()

const activeIndex = ref(
  Math.max(
    0,
    tabs.findIndex((t) => t.value === route.query.tab),
  ),
)

watch(
  () => route.query.tab,
  (q) => {
    const idx = tabs.findIndex((t) => t.value === q)
    if (idx !== -1) activeIndex.value = idx
  },
)
</script>

<style scoped>
.result-wrapper {
  background: #f5f7fa;
  min-height: 100vh;
  padding: clamp(24px, 4vw, 48px);
  position: relative;
  overflow: clip;
}

.tabs-title {
  font-weight: 800;
  color: #0a7cff;
  letter-spacing: 1px;
  font-size: 30px;
}

.tabs-subtitle {
  margin: 6px 0 16px;
  color: #6c757d;
  font-size: 16px;
}

.tab {
  position: relative;
  font-weight: 800;
  letter-spacing: 1px;
  color: #425466;
  border-top-left-radius: 14px !important;
  border-top-right-radius: 14px !important;
  padding: 10px 18px;
  margin: 2px 6px;
  transition:
    color 0.5s ease,
    background-color 0.5s ease,
    transform 0.5s ease,
    box-shadow 0.5s ease;
  outline: none;
}

.tab:hover {
  background: rgba(10, 124, 255, 0.08);
  color: #0a7cff;
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(10, 124, 255, 0.1);
}

.tab--active {
  color: #0a7cff !important;
  background: rgba(10, 124, 255, 0.1);
}

.tab--active .tab-underline {
  opacity: 1;
  transform: scaleX(1);
}
</style>
