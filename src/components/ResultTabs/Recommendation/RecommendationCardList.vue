<template>
  <div class="reco-list">
    <div v-for="item in items" :key="item.id" class="reco-card elevation-3">
      <div class="card-head">
        <h3 class="title">{{ item.title }}</h3>
        <span class="priority" :style="priorityStyle(item.priority)">
          {{ item.priority.toUpperCase() }}
        </span>
      </div>

      <p class="details">{{ item.details }}</p>

      <div class="meta">
        <span class="effort">Effort: {{ item.effort ?? '—' }}</span>
        <span v-if="item.excerpt" class="excerpt-link" v-tooltip="item.excerpt">
          Read excerpt
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  RecommendationItem,
  RecommendationPriority,
} from '@/types/Recommendations/recommendations.types'

interface Props {
  items: RecommendationItem[]
}
defineProps<Props>()

const PRIORITY_HEX: Record<RecommendationPriority, string> = {
  critical: '#D92D20',
  high: '#F79009',
  medium: '#FDB022',
  low: '#2E90FA',
  info: '#64748B',
}

function priorityStyle(p: RecommendationPriority) {
  return {
    backgroundColor: PRIORITY_HEX[p] ?? '#0A7CFF',
    color: '#fff',
    padding: '4px 10px',
    borderRadius: '999px',
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
  }
}
</script>

<style scoped>
.reco-list {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.reco-card {
  background: #fff;
  border-radius: 12px;
  padding: 16px 20px;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
}
.reco-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.title {
  font-weight: 700;
  font-size: 1rem;
  color: #0f172a;
  margin: 0;
}

.details {
  font-size: 0.9rem;
  color: #475569;
  margin: 4px 0 12px;
}

.meta {
  display: flex;
  gap: 16px;
  font-size: 0.85rem;
  color: #64748b;
}

.excerpt-link {
  cursor: pointer;
  color: #0a7cff;
  font-weight: 600;
}
.excerpt-link:hover {
  text-decoration: underline;
}
</style>
