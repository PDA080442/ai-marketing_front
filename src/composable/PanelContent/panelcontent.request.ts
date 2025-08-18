import type { MetaType } from '@/types/Panel/Metadata/metadata.types'
import type { DomNodeType } from '@/types/Panel/DOM/dom.types'
import type { PageText } from '@/types/Panel/Text/text.types'
import { useApi } from '../useApi'

const { call } = useApi('/panel')

export async function getMetadata(): Promise<MetaType[]> {
  const response = await call('/metadata/', {}, 'GET')
  return response as MetaType[]
}

export async function getDomStructure(): Promise<DomNodeType> {
  const response = await call('/dom/', {}, 'GET')
  return response as DomNodeType
}

export async function getTextPage(): Promise<PageText> {
  const response = await call('/text/', {}, 'GET')
  return response as PageText
}
