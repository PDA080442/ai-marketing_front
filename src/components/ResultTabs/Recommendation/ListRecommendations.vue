<template>
  <div>
    <!-- HEADER (идентично Problems) -->
    <header class="lp-header">
      <h1 class="lp-title">Recommendations</h1>
      <!-- без score-круга -->
    </header>

    <!-- CONTENT -->
    <v-window v-model="tab">
      <v-window-item value="list">
        <RecommendationsTables :items="list" />
      </v-window-item>

      <v-window-item value="text">
        <!-- При желании можно вставить PageText.vue, но здесь не требуется -->
        <RecommendationsTables :items="textOnly" />
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import RecommendationsTables from './RecommendationsTables.vue'
import { recommendationsListMock } from '@/mocks/recommendations.mocks'
import type { RecommendationItem } from '@/types/Recommendations/recommendations.types'

const tab = ref<'list' | 'text'>('list')
const list = ref<RecommendationItem[]>([])

onMounted(() => {
  try {
    list.value = recommendationsListMock
  } catch (e) {
    console.error(e)
  }
})

const textOnly = computed(() => list.value.filter((r) => !!r.excerpt))
</script>

<style scoped>
/* ====== идентичные стили как в Problems-компоненте ====== */
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
  margin-bottom: 30px;
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
  margin: 0px 6px 2px;
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

/* если используешь .tab--active в Problems — оставляю для полной идентичности */
.tab--active {
  color: #0a7cff !important;
  background: rgba(10, 124, 255, 0.1);
}

.tab--active .tab-underline {
  opacity: 1;
  transform: scaleX(1);
}
</style>
