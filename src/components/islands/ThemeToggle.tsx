import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

type ThemePreference = 'dark' | 'light' | 'system'

const icons = {
  dark: MoonIcon,
  light: SunIcon,
  system: ComputerDesktopIcon,
}

const labels = {
  dark: 'Dark mode',
  light: 'Light mode',
  system: 'System theme',
}

const cycle: Record<ThemePreference, ThemePreference> = {
  dark: 'light',
  light: 'system',
  system: 'dark',
}

function getStoredTheme(): ThemePreference {
  if (typeof document === 'undefined') return 'dark'
  const match = document.cookie.match(/(?:^|; )theme=(dark|light|system)/)
  return (match?.[1] as ThemePreference) || 'dark'
}

function setThemeCookie(theme: ThemePreference) {
  document.cookie = `theme=${theme};path=/;max-age=${365 * 24 * 60 * 60};SameSite=Lax`
}

function resolveTheme(pref: ThemePreference): 'dark' | 'light' {
  if (pref === 'system') {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  }
  return pref
}

function applyTheme(pref: ThemePreference) {
  document.documentElement.dataset.theme = resolveTheme(pref)
}

export default function ThemeToggle() {
  const [pref, setPref] = useState<ThemePreference>('dark')

  useEffect(() => {
    setPref(getStoredTheme())
  }, [])

  // Listen for system theme changes when in system mode
  useEffect(() => {
    if (pref !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const handler = () => applyTheme('system')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [pref])

  const handleClick = () => {
    const next = cycle[pref]
    setPref(next)
    setThemeCookie(next)
    applyTheme(next)
  }

  const Icon = icons[pref]

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={labels[pref]}
      title={labels[pref]}
      className="fixed top-4 right-4 z-50 rounded-full p-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors shadow-lg"
    >
      <Icon className="size-5" />
    </button>
  )
}
