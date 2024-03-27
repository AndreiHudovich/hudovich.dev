import Link from 'next/link'
import IconBrandsGithub from '@/assets/icons/icon-brands-github.svg'
import IconBrandsXTwitter from '@/assets/icons/icon-brands-x-twitter.svg'
import Logo from '@/assets/logo.svg'
import Container from '@/components/layout/Container.tsx'
import MobileNavigation from '@/components/layout/mobile/MobileNavigation.tsx'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher.tsx'
import BaseIcon from '@/components/ui/BaseIcon.tsx'
import { social } from '@/data/links.json'
import type { FC, SVGProps } from 'react'
import type { Route } from 'next'

const navLinks: Array<{ href: Route; label: string }> = [
  {
    href: '/resume',
    label: 'Resume',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
]

const socialLinks: Array<{ href: string; label: string; Icon: FC<SVGProps<SVGElement>> }> = [
  {
    href: social.twitter,
    label: 'X / Twitter',
    Icon: IconBrandsXTwitter,
  },
  {
    href: social.github,
    label: 'Github',
    Icon: IconBrandsGithub,
  },
]

function Header() {
  return (
    <header className="bg-white dark:bg-blue-950">
      <Container className="flex justify-between items-center h-20">
        <Link href="/">
          <BaseIcon as={Logo} className="w-[4.125rem] h-6" label="Home" />
        </Link>

        <MobileNavigation>
          <ul className="flex flex-col gap-4 mb-6">
            {navLinks.map(({ href, label }) => (
              <li
                key={label}
                className="grid font-semibold text-[1.25rem] leading-[1.75rem] tracking-[0.01em] uppercase text-center"
              >
                <Link className="px-3 py-2 text-dark-blue-950 dark:text-slate-100" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10">
            {socialLinks.map(({ Icon, href, label }) => (
              <div
                key={href}
                className="grid size-12 [&:nth-child(1)]:justify-self-end [&:nth-child(2)]:justify-self-start"
              >
                <a className="p-2" href={href} rel="noreferrer" target="_blank">
                  <BaseIcon
                    as={Icon}
                    className="size-8 fill-dark-blue-950 dark:fill-slate-100"
                    label={label}
                  />
                </a>
              </div>
            ))}

            <div className="col-span-2">
              <ThemeSwitcher />
            </div>
          </div>
        </MobileNavigation>
      </Container>
    </header>
  )
}

export default Header
