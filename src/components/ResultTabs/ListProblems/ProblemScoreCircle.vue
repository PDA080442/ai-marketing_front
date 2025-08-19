<template>
  <div class="score-circle">
    <v-progress-circular :model-value="score" size="90" width="10" :color="color">
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
  if (props.score >= 80) return 'green'
  if (props.score >= 60) return 'orange'
  return 'red'
})
</script>

<style scoped>
.score-circle {
  display: flex;
  align-items: center;
  justify-content: center;
}
.score-text {
  font-weight: 700;
  font-size: 18px;
  color: #1f2937;
}
</style>
