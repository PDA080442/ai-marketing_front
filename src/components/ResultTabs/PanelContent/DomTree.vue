<template>
  <div>
    <header class="dt-header">
      <h1 class="dt-title">DOM Structure</h1>
    </header>
    <v-divider class="mb-4" />
    <ul class="dt-tree">
      <DomNodeItem v-for="node in nodes" :key="node.id" :node="node" />
    </ul>
    <BaseSnackbar v-model="snackbar" :color="snackbarColor" :text="snackbarText" />
  </div>
</template>

<script setup lang="ts">
import DomNodeItem from './DomNodeItem.vue'
import BaseSnackbar from '@/components/SnackBar/BaseSnackbar.vue'
import { useDomTree } from '@/services/Panel/useDomTree'

const { snackbar, snackbarColor, snackbarText, nodes } = useDomTree()
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
