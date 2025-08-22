<template>
  <v-container fluid class="result-wrapper">
    <v-card class="result-card" elevation="12" rounded="xl">
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
import PanelContent from '@/components/ResultTabs/PanelContent/PanelContent.vue'
import ListProblems from '../ResultTabs/ListProblems/ListProblems.vue'
import ListRecommendations from '../ResultTabs/Recommendation/ListRecommendations.vue'
import GalleryScreenshot from '../ResultTabs/GalleryScreenshot/GalleryScreenshot.vue'
import { useResultTabs } from '@/services/ResultTabs/useResultTabs'

const { tabs, activeIndex } = useResultTabs({
  PanelContent,
  GalleryScreenshot,
  ListProblems,
  ListRecommendations,
})
</script>

<style scoped>
.result-wrapper {
  background: #f9fbfd;
  padding: clamp(24px, 4vw, 48px);
  position: relative;
  overflow: clip;
}

.result-card {
  padding: 25px;
  background: #f5f7fa;
}

.tabs-title {
  font-weight: 800;
  color: #0a7cff;
  letter-spacing: 1px;
  font-size: 30px;
}

.tabs-subtitle {
  margin: 0px 0 16px;
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
