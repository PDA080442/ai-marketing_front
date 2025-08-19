<template>
  <v-container fluid class="pc-wrapper">
    <header class="pc-header">
      <h1 class="pc-title">Content & Metadata</h1>
      <p class="pc-subtitle">Structure of the page after scan</p>
    </header>
    <v-divider class="mb-4" />
    <v-expansion-panels multiple class="pc-panels">
      <v-expansion-panel
        v-for="section in sections"
        :key="section.value"
        rounded="lg"
        class="pc-panel"
      >
        <v-expansion-panel-title class="pc-panel-title" expand-icon="mdi-chevron-down">
          <v-icon size="18" class="mr-2">{{ section.icon }}</v-icon>
          {{ section.label }}
        </v-expansion-panel-title>
        <v-expansion-panel-text class="pc-panel-text">
          <component :is="section.component" />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup lang="ts">
import MetadataTable from './MetadataTable.vue'
import PageText from './PageText.vue'
import DomTree from './DomTree.vue'
type SectionValue = 'metadata' | 'dom' | 'text'

interface SectionItem {
  value: SectionValue
  label: string
  icon: string
  component: object
}

const sections: SectionItem[] = [
  {
    value: 'metadata',
    label: 'Metadata',
    icon: 'mdi-file-document-outline',
    component: MetadataTable,
  },

  {
    value: 'dom',
    label: 'DOM Structure',
    icon: 'mdi-text-box-outline',
    component: DomTree,
  },

  {
    value: 'text',
    label: 'Text from site',
    icon: 'mdi-format-header-pound',
    component: PageText,
  },
]
</script>

<style scoped>
.pc-wrapper {
  background: transparent;
  min-height: 100%;
}

.pc-header {
  padding-bottom: 8px;
}

.pc-title {
  font-weight: 800;
  color: #0a7cff;
  letter-spacing: 1px;
  font-size: 25px;
}

.pc-subtitle {
  margin-top: 6px;
  color: #6c757d;
  font-size: 13px;
}

.pc-panels {
  background: transparent;
}

.pc-panel {
  border: 1px solid #e9edf2;
  overflow: clip;
  margin-bottom: 12px;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.pc-panel:hover {
  border-color: rgba(10, 124, 255, 0.25);
  box-shadow: 0 8px 18px rgba(16, 24, 40, 0.06);
  transform: translateY(-1px);
}

.pc-panel-title {
  font-weight: 600;
  color: #1f2937;
}

.v-expansion-panel--active .pc-panel-title {
  color: #0a7cff;
  background: linear-gradient(180deg, rgba(10, 124, 255, 0.06), rgba(10, 124, 255, 0));
}

.pc-panel-text {
  padding: 12px 14px 16px 14px;
}

.pc-placeholder {
  border: 1px dashed #cbd5e1;
  background: #f9fafb;
  border-radius: 8px;
  padding: 16px;
  color: #94a3b8;
  font-style: italic;
}
</style>
