<template>
  <div>
    <header class="lp-header">
      <h1 class="lp-title">Recommendations</h1>
    </header>

    <v-window v-model="tab">
      <v-window-item value="list">
        <RecommendationCardList :items="filteredFlat" />
      </v-window-item>

      <v-window-item value="text">
        <RecommendationCardList :items="textOnly" />
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup lang="ts">
import RecommendationCardList from './RecommendationCardList.vue'
import { useRecommendationsList } from '@/services/Recommendation/useListRecommendations'

const { tab, filteredFlat, textOnly } = useRecommendationsList()
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
