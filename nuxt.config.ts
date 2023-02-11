import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true
  },
  css: [
    '@/assets/styles/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
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
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons'
    ]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use 'sass-mq/mq' as * with (
              $breakpoints: (
                md: 768px
              )
            );
            @use "@/assets/styles/utilities/_functions.scss" as *;
            @use "@/assets/styles/utilities/_mixins.scss" as *;
          `
        }
      }
    }
  }
})
