'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/css.ts'
import type { ComponentPropsWithoutRef } from 'react'
import type { Route } from 'next'

const links: Array<{ href: Route; label: string }> = [
  {
    href: '/resume',
    label: 'Resume',
  },
  {
    href: '/uses',
    label: 'Uses',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
]

interface InternalLinksProps extends ComponentPropsWithoutRef<'nav'> {
  onClick?: () => void
}

function InternalLinks({ onClick, ...props }: InternalLinksProps) {
  const pathname = usePathname()

  return (
    <nav {...props} aria-label="Main">
      <ul className="flex flex-col gap-4 md:flex-row md:gap-6">
        {links.map(({ href, label }) => (
          <li
            key={label}
            className="font-semibold text-[1.25rem] leading-[1.75rem] tracking-[0.01em] uppercase text-center md:text-[0.9375rem] md:leading-[1.25rem]"
          >
            <Link
              className={cn(
                'relative block px-3 py-2 tracking-wide text-dark-blue-950 after:absolute after:inset-x-3 after:bottom-0 after:h-[0.1875rem] after:bg-orange-500 after:opacity-0 after:transition-opacity hover:after:opacity-100 dark:text-slate-100 md:px-2 md:py-1.5 md:after:inset-x-2',
                href === pathname && 'md:after:opacity-100'
              )}
              href={href}
              onClick={onClick}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default InternalLinks
