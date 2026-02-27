/**
 * Port city service content from fd-google-redesign → flood-doctor-astro
 *
 * Reads .ts source files, dynamically imports them (via tsx),
 * transforms to CityServiceContent shape, and writes output files.
 *
 * Run: npx tsx scripts/port-city-content.ts
 */

import { readdir, mkdir, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { existsSync } from 'node:fs'

// ── Config ──────────────────────────────────────────────────────────────────

const SOURCE_ROOT = resolve(
  import.meta.dirname,
  '../../fd-google-redesign/src/content/cities'
)
const OUTPUT_ROOT = resolve(
  import.meta.dirname,
  '../src/data/city-content'
)

const CITIES = [
  'alexandria', 'arlington', 'ashburn', 'fairfax', 'fallschurch',
  'greatfalls', 'herndon', 'lorton', 'mclean', 'reston',
  'springfield', 'tysons', 'vienna',
]

/** source filename (without .ts) → astro service slug */
const SLUG_MAP: Record<string, string> = {
  'water-damage': 'water-damage-restoration',
  'burst-pipe': 'burst-pipe-cleanup',
  'fire-damage': 'fire-smoke-cleanup',
  'storm-damage': 'storm-damage-restoration',
  'flood-cleanup': 'flood-cleanup',
  'basement-flooding': 'basement-flooding',
  'mold-remediation': 'mold-remediation',
  'sewage-cleanup': 'sewage-cleanup',
}

const SKIP_FILES = new Set(['index', 'emergency-water-removal'])

const BLOG_MAPPING: Record<string, string[]> = {
  'water-damage-restoration': [
    'first-24-hours-after-water-damage',
    'water-damage-insurance-claim-guide',
    'water-damage-restoration-process',
  ],
  'flood-cleanup': [
    'first-24-hours-after-water-damage',
    'emergency-flood-response-ashburn',
    'water-damage-insurance-claim-guide',
  ],
  'storm-damage-restoration': [
    'first-24-hours-after-water-damage',
    'water-damage-insurance-claim-guide',
    'prevent-water-damage-winter',
  ],
  'burst-pipe-cleanup': [
    'first-24-hours-after-water-damage',
    'prevent-water-damage-winter',
    'water-damage-restoration-process',
  ],
  'sewage-cleanup': [
    'first-24-hours-after-water-damage',
    'water-damage-insurance-claim-guide',
  ],
  'mold-remediation': [
    'signs-of-hidden-mold',
    'black-mold-vs-regular-mold',
  ],
  'fire-smoke-cleanup': [
    'water-damage-insurance-claim-guide',
    'first-24-hours-after-water-damage',
  ],
  'basement-flooding': [
    'sump-pump-maintenance-guide',
    'first-24-hours-after-water-damage',
    'prevent-water-damage-winter',
  ],
}

// ── Transform ───────────────────────────────────────────────────────────────

// Source files come in three formats:
//
// FORMAT A (standard): processSection, localChallenges, equipmentSection, etc.
//   Cities: arlington, fairfax, fallschurch, greatfalls, lorton, vienna + some services in others
//
// FORMAT B (no localChallenges): has processSection but uses alternate section names
//   like pipeFailureTypes, damageTypes, floodTypes, etc. instead of localChallenges
//   Cities: ashburn, herndon, mclean, reston, springfield (some services)
//
// FORMAT C (legacy): heroSection, introduction, mainContent, closingContent, metadata
//   Cities: alexandria (5 services), tysons (4 services)

function transform(src: any, astroSlug: string) {
  // Detect format
  const isLegacy = 'heroSection' in src || 'mainContent' in src
  const hasStandardProcess = src.processSection?.steps
  const hasStandardChallenges = src.localChallenges?.challenges

  // ── meta ──
  const meta = {
    title: src.meta?.title ?? src.metadata?.title ?? '',
    description: src.meta?.description ?? src.metadata?.description ?? '',
  }

  // ── h1 ──
  const h1 = src.h1 ?? src.heroSection?.title ?? ''

  // ── introSection ──
  let introSection: { headline: string; paragraphs: string[]; localContext: string }
  if (src.introSection) {
    introSection = src.introSection
  } else if (isLegacy) {
    introSection = {
      headline: src.heroSection?.subtitle ?? '',
      paragraphs: src.introduction?.content ? [src.introduction.content] : [],
      localContext: src.introduction?.cta ?? '',
    }
  } else {
    introSection = { headline: '', paragraphs: [], localContext: '' }
  }

  // ── processSteps ──
  let processSteps: Array<{ title: string; description: string; timeframe: string }>
  if (hasStandardProcess) {
    processSteps = src.processSection.steps.map(
      ({ title, description, timeframe }: any) => ({ title, description, timeframe })
    )
  } else if (isLegacy && src.mainContent?.sections) {
    // Legacy format: convert mainContent sections into process steps
    processSteps = src.mainContent.sections.map((s: any) => ({
      title: s.title,
      description: s.paragraphs?.[0] ?? '',
      timeframe: '',
    }))
  } else {
    processSteps = []
  }

  // ── localChallenges ──
  let localChallenges: Array<{ title: string; description: string; solution: string }>
  if (hasStandardChallenges) {
    localChallenges = src.localChallenges.challenges
  } else {
    localChallenges = []
  }

  // ── equipmentSection (optional) ──
  const equipmentSection = src.equipmentSection ?? undefined

  // ── pricingSection ──
  const pricingSection = src.pricingSection ?? {
    headline: '',
    intro: '',
    factors: [],
    cta: '',
  }

  // ── serviceAreaSection ──
  let serviceAreaSection: { neighborhoods: string[]; responseTime: string }
  if (src.serviceAreaSection) {
    serviceAreaSection = {
      neighborhoods: src.serviceAreaSection.neighborhoods ?? [],
      responseTime: src.serviceAreaSection.responseTime ?? '',
    }
  } else {
    serviceAreaSection = { neighborhoods: [], responseTime: '' }
  }

  // ── faqs ──
  let faqs: Array<{ question: string; answer: string }>
  if (Array.isArray(src.faqSection)) {
    faqs = src.faqSection
  } else if (src.faqSection?.faqs) {
    // Legacy format wraps faqs in an object with title
    faqs = src.faqSection.faqs
  } else {
    faqs = []
  }

  // ── finalCTA ──
  let finalCTA: { headline: string; paragraph: string }
  if (src.finalCTA) {
    finalCTA = { headline: src.finalCTA.headline, paragraph: src.finalCTA.paragraph }
  } else if (src.closingContent) {
    finalCTA = {
      headline: '',
      paragraph: src.closingContent.content ?? '',
    }
  } else {
    finalCTA = { headline: '', paragraph: '' }
  }

  const result: any = {
    meta,
    h1,
    introSection,
    processSteps,
    localChallenges,
  }

  if (equipmentSection) {
    result.equipmentSection = equipmentSection
  }

  result.pricingSection = pricingSection
  result.serviceAreaSection = serviceAreaSection
  result.faqs = faqs
  result.relatedBlogSlugs = BLOG_MAPPING[astroSlug] ?? []
  result.finalCTA = finalCTA

  return result
}

// ── Serialise to TS ─────────────────────────────────────────────────────────

function serialise(obj: unknown, indent = 0): string {
  const pad = '  '.repeat(indent)
  const pad1 = '  '.repeat(indent + 1)

  if (obj === null || obj === undefined) return 'undefined'
  if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj)

  if (typeof obj === 'string') {
    // Use backtick template literal if it contains newlines or single quotes
    if (obj.includes('\n') || obj.includes("'")) {
      // Escape backticks and ${} inside the string
      const escaped = obj.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
      return '`' + escaped + '`'
    }
    return `'${obj.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]'
    // Simple string arrays on fewer lines
    if (obj.every((v) => typeof v === 'string' && !v.includes('\n') && v.length < 80)) {
      const items = obj.map((v) => serialise(v, 0)).join(', ')
      if (items.length < 100) return `[${items}]`
    }
    const items = obj.map((v) => `${pad1}${serialise(v, indent + 1)}`).join(',\n')
    return `[\n${items},\n${pad}]`
  }

  if (typeof obj === 'object') {
    const entries = Object.entries(obj as Record<string, unknown>)
    if (entries.length === 0) return '{}'
    const items = entries.map(([key, val]) => {
      const k = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`
      return `${pad1}${k}: ${serialise(val, indent + 1)}`
    }).join(',\n')
    return `{\n${items},\n${pad}}`
  }

  return String(obj)
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  let ported = 0
  let skipped = 0
  const errors: string[] = []

  for (const city of CITIES) {
    const servicesDir = join(SOURCE_ROOT, city, 'services')
    if (!existsSync(servicesDir)) {
      console.warn(`⚠ No services dir for ${city}, skipping`)
      continue
    }

    const files = await readdir(servicesDir)
    const outDir = join(OUTPUT_ROOT, city)
    await mkdir(outDir, { recursive: true })

    for (const file of files) {
      if (!file.endsWith('.ts')) continue
      const baseName = file.replace('.ts', '')

      if (SKIP_FILES.has(baseName)) {
        skipped++
        continue
      }

      const astroSlug = SLUG_MAP[baseName]
      if (!astroSlug) {
        console.warn(`⚠ No slug mapping for ${city}/${baseName}, skipping`)
        skipped++
        continue
      }

      try {
        const srcPath = join(servicesDir, file)
        const mod = await import(srcPath)

        // Find the exported content object (skip the interface export)
        const content = Object.values(mod).find(
          (v) => typeof v === 'object' && v !== null && 'meta' in (v as any)
        ) as SourceContent | undefined

        if (!content) {
          errors.push(`${city}/${baseName}: no content export found`)
          continue
        }

        const transformed = transform(content, astroSlug)

        const outContent = [
          `import type { CityServiceContent } from '../types'`,
          '',
          `export const content: CityServiceContent = ${serialise(transformed)}`,
          '',
        ].join('\n')

        const outPath = join(outDir, `${astroSlug}.ts`)
        await writeFile(outPath, outContent, 'utf-8')
        ported++
      } catch (err) {
        errors.push(`${city}/${baseName}: ${(err as Error).message}`)
      }
    }
  }

  console.log(`\nDone.`)
  console.log(`  Ported: ${ported}`)
  console.log(`  Skipped: ${skipped}`)
  if (errors.length) {
    console.log(`  Errors (${errors.length}):`)
    errors.forEach((e) => console.log(`    - ${e}`))
  }
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
