'use client'

import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItemIndicator,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import IconLucideSun from '@/assets/icons/icon-lucide-sun.svg'
import IconSolidCheck from '@/assets/icons/icon-solid-check.svg'
import IconSolidCircleHalfStroke from '@/assets/icons/icon-solid-circle-half-stroke.svg'
import IconSolidDisplay from '@/assets/icons/icon-solid-display.svg'
import IconSolidMoon from '@/assets/icons/icon-solid-moon.svg'
import BaseIcon from '@/components/ui/BaseIcon.tsx'
import useMounted from '@/hooks/useMounted.ts'
import type { FC, SVGProps } from 'react'

const dropdownItems: Array<{ value: string; Icon: FC<SVGProps<SVGElement>> }> = [
  {
    value: 'system',
    Icon: IconSolidDisplay,
  },
  {
    value: 'light',
    Icon: IconLucideSun,
  },
  {
    value: 'dark',
    Icon: IconSolidMoon,
  },
]

function ThemeSwitcherDesktop() {
  const { theme, setTheme } = useTheme()
  const { isMounted } = useMounted()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="inline-block p-1.5 size-8" type="button">
          <BaseIcon
            as={IconSolidCircleHalfStroke}
            className="size-5 text-dark-blue-950 dark:text-slate-100"
            label="Switch theme"
          />
        </button>
      </DropdownMenuTrigger>

      {isMounted && (
        <DropdownMenuPortal>
          <DropdownMenuContent align="end" loop={true}>
            <DropdownMenuRadioGroup
              className="grid gap-y-1 p-1.5 w-36 bg-white border border-neutral-100 rounded-md shadow-md dark:bg-dark-blue-950 dark:border-dark-blue-950"
              value={theme}
              onValueChange={setTheme}
            >
              {dropdownItems.map(({ Icon, value }) => (
                <DropdownMenuRadioItem
                  key={value}
                  className="flex items-center gap-2 p-2 w-full rounded outline-none transition-colors cursor-pointer hover:bg-neutral-100 focus:bg-neutral-100 hover:dark:bg-blue-900 focus:dark:bg-blue-900"
                  value={value}
                >
                  <BaseIcon
                    as={Icon}
                    className="shrink-0 size-4 text-dark-blue-950 dark:text-slate-100"
                  />
                  <span className="font-[375] text-menu text-dark-blue-950 capitalize dark:text-slate-100">
                    {value}
                  </span>

                  {theme === value && (
                    <DropdownMenuItemIndicator asChild>
                      <BaseIcon
                        as={IconSolidCheck}
                        className="shrink-0 ml-auto size-4 text-orange-500"
                      />
                    </DropdownMenuItemIndicator>
                  )}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      )}
    </DropdownMenu>
  )
}

export default ThemeSwitcherDesktop
