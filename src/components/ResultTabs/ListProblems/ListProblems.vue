<template>
  <div>
    <header class="lp-header">
      <h1 class="lp-title">Problems & CRO Score</h1>
      <ProblemScoreCircle :score="score" />
    </header>

    <v-tabs v-model="tab" class="mb-3">
      <v-tab value="tables">Problems Table</v-tab>
      <v-tab value="text">Page Text</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="tables">
        <ProblemsTables :problems="problems" />
      </v-window-item>

      <v-window-item value="text">
        <!-- ВАЖНО: PageText.vue НЕ МЕНЯЕМ -->
        <PageText />
        <!-- При желании, ниже можно показать только текстовые проблемы: -->
        <div class="mt-6">
          <v-divider class="mb-3" />
          <h3 class="section-title">Text-related problems (for context)</h3>
          <ProblemTable :problems="textProblems" />
        </div>
      </v-window-item>
    </v-window>

    <BaseSnackbar v-model="snackbar" :color="snackbarColor" :text="snackbarText" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ProblemsTables from './ProblemsTables.vue'
import ProblemTable from './ProblemTable.vue'
import ProblemScoreCircle from './ProblemScoreCircle.vue'
import PageText from '../PanelContent/PageText.vue'
import BaseSnackbar from '@/components/SnackBar/BaseSnackbar.vue'
import type { ProblemItem } from '@/types/Problems/problems.types'
import { mockProblems } from '@/mocks/problems.mock'

const tab = ref<'tables' | 'text'>('tables')

const problems = ref<ProblemItem[]>([])
const score = ref<number>(72) // можно посчитать по формуле/с бэка

const snackbar = ref(false)
const snackbarColor = ref<'success' | 'error'>('success')
const snackbarText = ref('')

onMounted(async () => {
  try {
    // TODO: заменить на реальный API
    problems.value = mockProblems
  } catch (err) {
    snackbar.value = true
    snackbarColor.value = 'error'
    snackbarText.value = 'Failed to load problems.'
    console.error(err)
  }
})

const textProblems = computed<ProblemItem[]>(() =>
  problems.value.filter((p) => ['Content', 'SEO', 'UX'].includes(p.category) || !!p.excerpt),
)
</script>

<style scoped>
.lp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.lp-title {
  font-weight: 800;
  font-size: 22px;
  color: #0a7cff;
  letter-spacing: 0.5px;
}
.section-title {
  font-size: 16px;
  font-weight: 700;
}
.mt-6 {
  margin-top: 24px;
}
</style>
