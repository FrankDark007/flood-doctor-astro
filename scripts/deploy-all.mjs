#!/usr/bin/env node

/**
 * Multi-city deployment pipeline for Cloudflare Pages
 * Deploys each city's pre-built dist to its own Pages project.
 *
 * Usage:
 *   node scripts/deploy-all.mjs          # Build + deploy all
 *   node scripts/deploy-all.mjs --no-build  # Deploy only (skip build)
 *   node scripts/deploy-all.mjs ashburn vienna  # Deploy specific cities only
 */

import { execSync } from 'child_process'
import { existsSync } from 'fs'
import { join } from 'path'

const cities = [
  'ashburn',
  'alexandria',
  'arlington',
  'centreville',
  'chantilly',
  'fairfax',
  'herndon',
  'leesburg',
  'mclean',
  'reston',
  'springfield',
  'sterling',
  'vienna',
]

const ACCOUNT_ID = 'a6e32c7b5d77c4d75e82bba2d4238356'
const rootDir = new URL('..', import.meta.url).pathname
const distAll = join(rootDir, 'dist-all')
const args = process.argv.slice(2)
const skipBuild = args.includes('--no-build')
const specificCities = args.filter((a) => !a.startsWith('--'))
const citiesToDeploy = specificCities.length > 0 ? specificCities : cities

// Validate city names
for (const city of citiesToDeploy) {
  if (!cities.includes(city)) {
    console.error(`❌ Unknown city: ${city}`)
    console.error(`   Valid cities: ${cities.join(', ')}`)
    process.exit(1)
  }
}

// Step 1: Build (unless --no-build)
if (!skipBuild) {
  console.log('\n🏗️  Building all cities...\n')
  try {
    execSync('node scripts/build-all.mjs', { cwd: rootDir, stdio: 'inherit' })
  } catch {
    console.error('❌ Build failed. Fix errors before deploying.')
    process.exit(1)
  }
}

// Step 2: Deploy each city to its own Pages project
console.log(`\n🚀 Deploying ${citiesToDeploy.length} cities to Cloudflare Pages...\n`)

const startTime = Date.now()
const results = []

for (const city of citiesToDeploy) {
  const cityDist = join(distAll, city)
  const projectName = `fd-${city}` // e.g., fd-ashburn, fd-alexandria

  if (!existsSync(cityDist)) {
    console.log(`  ⏭️  ${city.padEnd(14)} — dist not found, skipping`)
    results.push({ city, success: false, reason: 'no dist' })
    continue
  }

  process.stdout.write(`  ⏳ ${city.padEnd(14)} → ${projectName} ... `)

  const deployEnv = { ...process.env, CLOUDFLARE_ACCOUNT_ID: ACCOUNT_ID }

  // Auto-create project if it doesn't exist
  try {
    execSync(`npx wrangler pages project create ${projectName} --production-branch=main`, {
      cwd: rootDir,
      stdio: 'pipe',
      env: deployEnv,
    })
  } catch {
    // Project already exists — that's fine
  }

  try {
    const output = execSync(
      `npx wrangler pages deploy "${cityDist}" --project-name="${projectName}" --branch=main --commit-dirty=true`,
      {
        cwd: rootDir,
        stdio: 'pipe',
        env: deployEnv,
      },
    ).toString()

    // Extract deployment URL from output
    const urlMatch = output.match(/https:\/\/[^\s]+\.pages\.dev/)
    const url = urlMatch ? urlMatch[0] : ''

    console.log(`✅ ${url}`)
    results.push({ city, success: true, url })
  } catch (error) {
    console.log('❌ FAILED')
    const stderr = error.stderr?.toString() || error.message || ''
    console.error(`     ${stderr.split('\n').filter(Boolean)[0]}`)
    results.push({ city, success: false, reason: stderr.split('\n')[0] })
  }
}

const totalTime = ((Date.now() - startTime) / 1000).toFixed(1)
const succeeded = results.filter((r) => r.success).length
const failed = results.filter((r) => !r.success).length

console.log(`\n${'─'.repeat(60)}`)
console.log(`✅ ${succeeded}/${citiesToDeploy.length} cities deployed in ${totalTime}s`)
if (failed > 0) {
  console.log(
    `❌ ${failed} failed: ${results
      .filter((r) => !r.success)
      .map((r) => r.city)
      .join(', ')}`,
  )
}
console.log()

// Print custom domain instructions if first deploy
if (succeeded > 0) {
  console.log('📋 To add custom domains, run for each city:')
  console.log('   npx wrangler pages project update fd-{city} --domain={city}.flood.doctor')
  console.log()
}

process.exit(failed > 0 ? 1 : 0)
