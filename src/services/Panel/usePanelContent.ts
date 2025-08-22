export type SectionValue = 'metadata' | 'dom' | 'text'

export interface SectionItem {
  value: SectionValue
  label: string
  icon: string
  component: object
}

export function usePanelSections(components: { metadata: object; dom: object; text: object }) {
  const sections: SectionItem[] = [
    {
      value: 'metadata',
      label: 'Metadata',
      icon: 'mdi-file-document-outline',
      component: components.metadata,
    },
    {
      value: 'dom',
      label: 'DOM Structure',
      icon: 'mdi-text-box-outline',
      component: components.dom,
    },
    {
      value: 'text',
      label: 'Text from site',
      icon: 'mdi-format-header-pound',
      component: components.text,
    },
  ]

  return { sections }
}
