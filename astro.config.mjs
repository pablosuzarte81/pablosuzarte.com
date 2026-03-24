// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sv', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },
})
