/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CITY: string
  readonly SITE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
