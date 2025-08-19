<template>
  <div class="score-circle neo" :style="{ '--ring': color }">
    <v-progress-circular
      :model-value="score"
      size="120"
      width="25"
      :color="color"
      class="neo-progress"
    >
      <span class="score-text">{{ score }}%</span>
    </v-progress-circular>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  score: number
}
const props = defineProps<Props>()

const color = computed(() => {
  if (props.score >= 80) return '#16a34a' // success
  if (props.score >= 60) return '#f59e0b' // warn
  return '#ef4444' // danger
})
</script>

<style scoped>
.score-circle.neo {
  position: relative;
  margin-right: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 9999px;
  border: 1px solid #e9edf2;
  box-shadow: 0 10px 22px rgba(16, 24, 40, 0.08);
}

.score-circle.neo::after {
  content: '';
}

.neo-progress :deep(.v-progress-circular__overlay) {
  stroke-linecap: round;
}

.score-text {
  position: relative;
  font-weight: 800;
  font-size: 22px;
  letter-spacing: 0.5px;
}
</style>
