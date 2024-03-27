'use client'

import { useTheme } from 'next-themes'
import IconLucideSun from '@/assets/icons/icon-lucide-sun.svg'
import IconSolidChevronDown from '@/assets/icons/icon-solid-chevron-down.svg'
import IconSolidDisplay from '@/assets/icons/icon-solid-display.svg'
import IconSolidMoon from '@/assets/icons/icon-solid-moon.svg'
import BaseIcon from '@/components/ui/BaseIcon.tsx'
import useMounted from '@/hooks/useMounted.ts'

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const { isMounted } = useMounted()

  const Icon =
    theme === 'light' ? IconLucideSun : theme === 'dark' ? IconSolidMoon : IconSolidDisplay

  if (!isMounted) {
    return null
  }

  return (
    <>
      <label className="relative flex items-center gap-3 px-3.5 min-w-36 h-[2.8rem] bg-orange-400 rounded-md dark:bg-dark-blue-950">
        <BaseIcon as={Icon} className="shrink-0 size-5 fill-dark-blue-950 dark:fill-slate-100" />

        <span className="text-body-3 capitalize">{theme}</span>

        <BaseIcon
          as={IconSolidChevronDown}
          className="ml-auto shrink-0 size-3.5 fill-dark-blue-950 dark:fill-slate-100"
        />

        <select
          className="appearance-none absolute inset-0 size-full opacity-0"
          value={theme}
          onChange={(event) => setTheme(event.target.value)}
          aria-label="Switch theme"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </>
  )
}

export default ThemeSwitcher
