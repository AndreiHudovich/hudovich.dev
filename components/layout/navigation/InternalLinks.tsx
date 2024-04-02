import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import type { Route } from 'next'

const links: Array<{ href: Route; label: string }> = [
  {
    href: '/resume',
    label: 'Resume',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
]

function InternalLinks(props: ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props} aria-label="Main">
      <ul className="flex flex-col gap-4 md:flex-row md:gap-6">
        {links.map(({ href, label }) => (
          <li
            key={label}
            className="font-semibold text-[1.25rem] leading-[1.75rem] tracking-[0.01em] uppercase text-center md:text-[0.9375rem] md:leading-[1.25rem]"
          >
            <Link
              className="block px-3 py-2 text-dark-blue-950 dark:text-slate-100 md:px-2 md:py-1"
              href={href}
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
