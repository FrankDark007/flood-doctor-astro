# Phase 1 Brand Assets

Created for Phase 1 Worker F. These files are restoration-specific building blocks only; no page/layout files were changed.

## Files

- `src/components/BrandLogo.astro` - Flood Doctor logo lockup component using the new SVG mark.
- `src/components/RestorationBadge.astro` - small reusable badge component for defensible trust/process labels.
- `public/graphics/flood-doctor-mark.svg` - lightweight shield/roof/water/emergency-cross mark.
- `public/graphics/water-emergency-pattern.svg` - repeatable background texture for water/emergency sections.
- `public/graphics/restoration-process.svg` - four-step process graphic: call, extract, dry, document.

## Usage Notes

Use the logo in header/footer replacements instead of the Tailwind placeholder mark:

```astro
---
import BrandLogo from '../components/BrandLogo.astro'
---

<BrandLogo cityName={cityData.name} showCity variant="compact" />
```

Use `tone="dark"` when the logo sits on navy/dark backgrounds. Use `variant="mark"` only when visible surrounding text already says Flood Doctor.

Use badges for operational/process reassurance:

```astro
---
import RestorationBadge from '../components/RestorationBadge.astro'
---

<RestorationBadge kind="emergency" />
<RestorationBadge kind="documentation" />
<RestorationBadge kind="insurance-support" />
```

Safe built-in badge kinds:

- `emergency` - 24/7 emergency intake.
- `documentation` - photos, notes, and moisture readings.
- `drying` - drying equipment planning.
- `inspection` - moisture inspection.
- `insurance-support` - documentation support, not direct billing.
- `local` - Northern Virginia service-area language.
- `safety` - safety-first mitigation language.

## Constraints

- Do not use these badges to imply unsupported proof such as IICRC certification, guaranteed response times, licensed status, bonded/insured status, direct carrier billing, or review counts unless proof is documented elsewhere.
- Keep the primary brand blue as `#1a73e8`. Safety accents are orange `#f97316` and caution yellow `#facc15`.
- The SVG assets are intentionally lightweight and text-minimal. They are suitable for hero/process backgrounds but do not replace real job-site photography when approved photos become available.
- The process graphic says what happens next, not a guaranteed outcome.
