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
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.reco-card {
  border-radius: 14px;
  background: linear-gradient(180deg, #f4f9ff 0%, #eef6ff 100%);
  border: 1px solid #d7e3ff;
  box-shadow: 0 6px 16px rgba(16, 24, 40, 0.08);
  padding: 16px 18px;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}
.reco-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 22px rgba(16, 24, 40, 0.12);
  border-color: #c7d6ff;
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid #e6eefc;
}

.title {
  margin: 0;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.3px;
  color: #0a7cff;
}

.priority {
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 12px !important;
  border-radius: 999px;
  font-weight: 800 !important;
  font-size: 0.8rem !important;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  box-shadow: 0 2px 6px rgba(16, 24, 40, 0.12);
}

.details {
  margin: 6px 0 12px;
  font-size: 0.95rem;
  line-height: 1.45;
  color: #425466;
}

.meta {
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 0.88rem;
  color: #64748b;
}

.excerpt-link {
  cursor: pointer;
  color: #0a7cff;
  font-weight: 700;
  text-underline-offset: 3px;
  transition:
    color 0.15s ease,
    text-decoration-color 0.15s ease;
}

.excerpt-link:hover {
  text-decoration: underline;
}

.excerpt-link:focus-visible {
  outline: 2px solid #0a7cff;
  outline-offset: 2px;
  border-radius: 6px;
}
</style>
