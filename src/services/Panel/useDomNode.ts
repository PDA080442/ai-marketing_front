import { computed } from 'vue'
import type { DomNodeType } from '@/types/Panel/DOM/dom.types'

export interface UseDomNodeItem {
  node: DomNodeType
}

export function useDomNodeItem(props: UseDomNodeItem) {
  const attrs = computed(() => props.node.attributes ?? {})
  const hasAttrs = computed(() => Object.keys(attrs.value).length > 0)
  const children = computed(() => props.node.children ?? [])

  return { attrs, hasAttrs, children }
}
