import Link from 'next/link'
import IconSolidCodeBranch from '@/assets/icons/icon-solid-code-branch.svg'
import IconSolidHeart from '@/assets/icons/icon-solid-heart.svg'
import IconSolidPersonHiking from '@/assets/icons/icon-solid-person-hiking.svg'
import Container from '@/components/layout/Container.tsx'
import BaseIcon from '@/components/ui/BaseIcon.tsx'
import links from '@/data/links.json'
import type { FC, SVGProps } from 'react'
import type { Route } from 'next'

const textLinks: Array<{ href: Route; label: string }> = [
  {
    href: '/uses',
    label: 'Uses',
  },
  {
    href: '/tech-stack',
    label: 'Tech Stack',
  },
]

const iconLinks: Array<{
  href: Route | string
  label: string
  Icon: FC<SVGProps<SVGElement>>
  isExternal?: boolean
}> = [
  {
    href: '/hiking',
    label: 'Hiking diary',
    Icon: IconSolidPersonHiking,
  },
  {
    href: links.source,
    label: 'Source code',
    Icon: IconSolidCodeBranch,
    isExternal: true,
  },
]

function Footer() {
  return (
    <footer className="sticky top-[100svh] border-t border-t-neutral-200 dark:border-t-slate-800">
      <Container
        className="pt-5 pb-6 sm:flex sm:flex-row-reverse sm:justify-between sm:items-center sm:h-20"
        fluid={true}
      >
        <nav className="mb-4 sm:mb-0" aria-label="Secondary">
          <ul className="flex justify-center items-center gap-2 md:gap-4">
            {textLinks.map(({ href, label }) => (
              <li key={label}>
                <Link
                  className="block px-2 py-1 font-normal text-caption text-neutral-900 dark:text-slate-300"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}

            {iconLinks.map(({ href, label, Icon, isExternal }) => (
              <li key={label}>
                {isExternal ? (
                  <a className="block p-1.5" href={href} rel="noreferrer" target="_blank">
                    <BaseIcon
                      as={Icon}
                      className="size-4 text-neutral-900 dark:text-slate-300"
                      label={label}
                    />
                  </a>
                ) : (
                  <Link className="block p-1.5" href={href as Route}>
                    <BaseIcon
                      as={Icon}
                      className="size-4 text-neutral-900 dark:text-slate-300"
                      label={label}
                    />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <p className="flex justify-center items-center gap-1.5 font-[375] text-caption text-neutral-900 whitespace-nowrap dark:text-slate-300">
          &copy; {new Date().getFullYear()} Built with
          <BaseIcon
            as={IconSolidHeart}
            label="love"
            className="shrink-0 translate-y-px size-3.5 text-[#ef3939]"
          />
          by Andrei Hudovich
        </p>
      </Container>
    </footer>
  )
}

export default Footer
