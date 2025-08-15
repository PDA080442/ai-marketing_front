import type { MetaType } from '@/types/Panel/Metadata/metadata.types'

export const mockMetaTags: MetaType[] = [
  { id: 'm1', name: 'title', value: 'Acme — Best SaaS platform' },
  {
    id: 'm2',
    name: 'description',
    value: 'Grow your business with powerful AI tools and automations.',
  },
  { id: 'm3', name: 'canonical', value: 'https://example.com/' },
  { id: 'm4', name: 'robots', value: 'index,follow' },

  { id: 'm5', name: 'og:title', value: 'Acme — Best SaaS platform' },
  {
    id: 'm6',
    name: 'og:description',
    value: 'Grow your business with powerful AI tools and automations.',
  },
  { id: 'm7', name: 'og:url', value: 'https://example.com/' },
  { id: 'm8', name: 'og:image', value: 'https://example.com/og.jpg' },

  { id: 'm9', name: 'twitter:card', value: 'summary_large_image' },
  { id: 'm10', name: 'twitter:title', value: 'Acme — Best SaaS platform' },

  { id: 'm11', name: 'link[rel="alternate"][hreflang="en"]', value: 'https://example.com/en/' },
  { id: 'm12', name: 'link[rel="preconnect"]', value: 'https://fonts.gstatic.com' },
]
