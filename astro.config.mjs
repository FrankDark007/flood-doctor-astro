// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || 'https://flood.doctor',
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        // Exclude redirect-only pages from sitemap
        const redirectPaths = ['/faq/', '/guides/']
        return !redirectPaths.some((p) => page.includes(p) && !page.includes('/resources/'))
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
