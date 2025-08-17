<template>
  <div>
    <header class="dt-header">
      <h1 class="dt-title">DOM Structure</h1>
    </header>
    <v-divider class="mb-4" />
    <ul class="dt-tree">
      <DomNodeItem v-for="node in nodes" :key="node.id" :node="node" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { DomNodeType } from '@/types/Panel/DOM/dom.types'
import DomNodeItem from './DomNodeItem.vue'
import { ref, onMounted } from 'vue'
import { getDomStructure } from '@/composable/PanelContent/panelcontent.request'

const nodes = ref<DomNodeType[]>([])

onMounted(async () => {
  try {
    const response = await getDomStructure()
    nodes.value = Array.isArray(response) ? response : [response]
  } catch (err) {
    console.error('Failed to load DOM structure:', err)
  }
})
</script>

<style scoped>
.dt-header {
  margin-bottom: 12px;
}

.dt-title {
  font-weight: 800;
  font-size: 20px;
  color: #0a7cff;
  letter-spacing: 0.5px;
}

.dt-tree {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
</style>
