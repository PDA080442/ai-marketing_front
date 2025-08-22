<template>
  <li class="dt-node">
    <div class="dt-node-line">
      <v-icon size="16" color="#0a7cff" class="mr-1">mdi-code-tags</v-icon>
      <span class="dt-tag">&lt;{{ node.tag }}</span>
      <span v-if="hasAttrs" class="dt-attrs">
        <template v-for="(val, key) in attrs" :key="key"> {{ ' ' + key }}="{{ val }}" </template>
      </span>
      <span class="dt-tag">&gt;</span>
    </div>
    <ul v-if="children.length" class="dt-children">
      <DomNodeItem v-for="child in children" :key="child.id" :node="child" />
    </ul>
  </li>
</template>

<script setup lang="ts">
import type { DomNodeType } from '@/types/Panel/DOM/dom.types'
import { useDomNodeItem } from '@/services/Panel/useDomNode'

const props = defineProps<{ node: DomNodeType }>()

const { attrs, hasAttrs, children } = useDomNodeItem(props)
</script>

<style scoped>
.dt-node {
  margin: 2px 0;
}

.dt-node-line {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #1f2937;
  flex-wrap: wrap;
  word-break: break-all;
}

.dt-tag {
  font-weight: 700;
  font-size: 16px;
  color: #0a7cff;
}

.dt-attrs {
  margin-left: 6px;
  color: #6b7280;
}

.dt-attr {
  margin-right: 6px;
}

.dt-children {
  list-style: none;
  padding-left: 18px;
  border-left: 1px dashed #cbd5e1;
}
</style>
