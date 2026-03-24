// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://pablosuzarte.com',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sv', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },
})
