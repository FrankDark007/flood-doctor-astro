#!/usr/bin/env node

/**
 * Multi-city build pipeline
 * Builds all site variants sequentially, outputting each to dist-all/{city}/
 */

import { execSync } from 'child_process'
import { mkdirSync, cpSync, rmSync, existsSync } from 'fs'
import { join } from 'path'

const cities = [
  'main',
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

const rootDir = new URL('..', import.meta.url).pathname
const distAll = join(rootDir, 'dist-all')
const distDir = join(rootDir, 'dist')
const astroCacheDir = join(rootDir, '.astro')

// Clean previous multi-city output
if (existsSync(distAll)) {
  rmSync(distAll, { recursive: true })
}
mkdirSync(distAll, { recursive: true })

console.log(`\n🏗️  Building ${cities.length} city variants...\n`)

const startTime = Date.now()
const results = []

for (const city of cities) {
  const cityStart = Date.now()
  const siteUrl = city === 'main' ? 'https://flood.doctor' : `https://${city}.flood.doctor`

  process.stdout.write(`  ⏳ ${city.padEnd(14)} ... `)

  try {
    // Astro's static build can leave server chunks/cache from the previous CITY build.
    // Start each variant from clean output/cache so copied output is deterministic.
    if (existsSync(distDir)) {
      rmSync(distDir, { recursive: true })
    }
    if (existsSync(astroCacheDir)) {
      rmSync(astroCacheDir, { recursive: true })
    }

    execSync(`CITY=${city} SITE_URL=${siteUrl} npx astro build`, {
      cwd: rootDir,
      stdio: 'pipe',
      env: { ...process.env, CITY: city, SITE_URL: siteUrl },
    })

    // Copy dist/ → dist-all/{city}/
    const cityDist = join(distAll, city)
    cpSync(distDir, cityDist, { recursive: true })

    const elapsed = ((Date.now() - cityStart) / 1000).toFixed(1)
    console.log(`✅ ${elapsed}s`)
    results.push({ city, success: true, time: elapsed })
  } catch (error) {
    const elapsed = ((Date.now() - cityStart) / 1000).toFixed(1)
    console.log(`❌ FAILED (${elapsed}s)`)
    console.error(`     ${error.message?.split('\n')[0] || 'Unknown error'}`)
    results.push({ city, success: false, time: elapsed })
  }
}

const totalTime = ((Date.now() - startTime) / 1000).toFixed(1)
const succeeded = results.filter((r) => r.success).length
const failed = results.filter((r) => !r.success).length

console.log(`\n${'─'.repeat(50)}`)
console.log(`✅ ${succeeded}/${cities.length} cities built in ${totalTime}s`)
if (failed > 0) {
  console.log(`❌ ${failed} failed: ${results.filter((r) => !r.success).map((r) => r.city).join(', ')}`)
}
console.log(`📁 Output: ${distAll}/`)
console.log()

process.exit(failed > 0 ? 1 : 0)
