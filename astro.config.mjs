// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'

export default defineConfig({
  site: 'https://pablosuzarte.com',
  trailingSlash: 'always',
  adapter: vercel(),
  env: {
    schema: {
      DASHBOARD_PASSWORD: { type: 'string', context: 'server', access: 'secret', optional: true },
      UPSTASH_REDIS_REST_URL: { type: 'string', context: 'server', access: 'secret', optional: true },
      UPSTASH_REDIS_REST_TOKEN: { type: 'string', context: 'server', access: 'secret', optional: true },
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sv', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/dashboard'),
    }),
  ],
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },
})
