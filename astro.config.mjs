// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

const citySubdomains = [
  'ashburn',
  'alexandria',
  'arlington',
  'centreville',
  'chantilly',
  'fairfax',
  'fallschurch',
  'greatfalls',
  'herndon',
  'leesburg',
  'lorton',
  'mclean',
  'reston',
  'springfield',
  'sterling',
  'tysons',
  'vienna',
]

const citySitemaps = process.env.CITY === 'main'
  ? citySubdomains.map((city) => `https://${city}.flood.doctor/sitemap-index.xml`)
  : undefined

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || 'https://flood.doctor',
  integrations: [
    react(),
    sitemap({
      customSitemaps: citySitemaps,
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
