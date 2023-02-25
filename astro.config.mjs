import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import frontendistahtmlMinify from '@frontendista/astro-html-minify'
import Metadata from './src/enums/Metadata.enums'

// https://astro.build/config
export default defineConfig({
  site: Metadata.BASE_URL,
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    }),
    frontendistahtmlMinify()
  ],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
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
  }
})
