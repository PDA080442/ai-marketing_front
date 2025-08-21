<template>
  <div>
    <header class="lp-header">
      <h1 class="lp-title">Problems & CRO Score</h1>
      <ProblemScoreCircle :score="score" />
    </header>

    <v-tabs v-model="tab" class="problem-tabs">
      <v-tab value="tables" class="tab">Problems Table</v-tab>
      <v-tab value="text" class="tab">Page Text</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="tables">
        <ProblemsTables :problems="problems" />
      </v-window-item>

      <v-window-item value="text">
        <PageText />
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
import { getProblemsList, getProblemsScore } from '@/composable/ListProblems/problems.request'
import { useRoute } from 'vue-router' // ← добавь это
const route = useRoute() // ← и это

const tab = ref<'tables' | 'text'>('tables')

const problems = ref<ProblemItem[]>([])
const score = ref<number>(0) // можно посчитать по формуле/с бэка

const snackbar = ref(false)
const snackbarColor = ref<'success' | 'error'>('success')
const snackbarText = ref('')

// helper, чтобы безопасно вытащить строку из query
function qStr(x: unknown): string {
  if (typeof x === 'string') return x
  if (Array.isArray(x)) return x[0] ?? ''
  return ''
}

onMounted(async () => {
  try {
    const token = qStr(route.query.token)
    if (!token) return
    const scoreResp = await getProblemsScore(token)
    score.value = Number(scoreResp?.score ?? 0)

    const list = await getProblemsList(token)
    problems.value = Array.isArray(list) ? list : []
  } catch (err) {
    snackbar.value = true
    snackbarColor.value = 'error'
    snackbarText.value = 'Failed to load problems.'
    console.error(err)
  }
})

const textProblems = computed<ProblemItem[]>(() =>
  problems.value.filter(
    (problems) => ['Content', 'SEO', 'UX'].includes(problems.category) || !!problems.excerpt,
  ),
)
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

.section-title {
  font-size: 16px;
  font-weight: 700;
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

.tab--active {
  color: #0a7cff !important;
  background: rgba(10, 124, 255, 0.1);
}

.tab--active .tab-underline {
  opacity: 1;
  transform: scaleX(1);
}
</style>
