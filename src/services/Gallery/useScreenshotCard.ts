import type { ScreenshotItem } from '@/types/Gallery/gallery.types'

export interface UseScreenshotCardProps {
  shot: ScreenshotItem
  index: number
  onOpen?: (index: number) => void
}

export function useScreenshotCard(props: UseScreenshotCardProps) {
  const handleClick = () => {
    props.onOpen?.(props.index)
  }

  return { handleClick }
}
