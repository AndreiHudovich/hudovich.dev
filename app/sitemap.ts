import { MetadataRoute } from 'next'
import type { Route } from 'next'

const pages: Array<{ url: Route | null; priority: number }> = [
  {
    url: null,
    priority: 1,
  },
  {
    url: '/contact',
    priority: 0.8,
  },
  {
    url: '/hiking',
    priority: 0.7,
  },
  {
    url: '/resume',
    priority: 0.9,
  },
  {
    url: '/tech-stack',
    priority: 0.7,
  },
  {
    url: '/uses',
    priority: 0.7,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ url, priority }) => ({
    url: url ? `${process.env.NEXT_PUBLIC_BASE_URL}${url}` : process.env.NEXT_PUBLIC_BASE_URL,
    priority,
    changeFrequency: 'monthly',
  }))
}
