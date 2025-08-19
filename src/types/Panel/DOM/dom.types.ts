export type HtmlTagName = keyof HTMLElementTagNameMap

export interface DomNodeType {
  id: string
  tag: HtmlTagName
  attributes?: Record<string, string>
  children?: DomNodeType[]
}
