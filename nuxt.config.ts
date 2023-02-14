import { defineNuxtConfig } from 'nuxt/config'
import Metadata from './enums/Metadata.enums'

export default defineNuxtConfig({
  modules: ['nuxt-simple-sitemap'],
  ssr: true,
  typescript: {
    shim: false,
    strict: true
  },
  css: ['@/assets/styles/main.scss'],
  components: [
    {
      path: '@/components',
      pathPrefix: false
    }
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        {
          rel: 'manifest',
          href: '/manifest.webmanifest'
        },
        {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: 'any'
        },
        {
          rel: 'icon',
          href: '/icon.svg',
          type: 'image/svg+xml'
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap'
        }
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use 'sass-mq/mq' as * with (
              $breakpoints: (
                sm: 576px,
                md: 768px,
                lg: 1024px,
                xl: 1280px,
                container: 1120px,
              )
            );
            @use "@/assets/styles/utilities/_functions.scss" as *;
            @use "@/assets/styles/utilities/_mixins.scss" as *;
          `
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: Metadata.BASE_URL
    }
  }
})
