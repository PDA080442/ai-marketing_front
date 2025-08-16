export interface DomNodeType {
  id: string
  tag: string
  attributes?: Record<string, string>
  children?: DomNodeType[]
}
