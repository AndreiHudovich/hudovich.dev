import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hudovich.dev',
    icons: [
      { src: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { src: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
  }
}
