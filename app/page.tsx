import IconBrandsGithub from '@/assets/icons/icon-brands-github.svg'
import IconBrandsLinkedIn from '@/assets/icons/icon-brands-linkedin.svg'
import IconBrandsReddit from '@/assets/icons/icon-brands-reddit.svg'
import IconBrandsUpwork from '@/assets/icons/icon-brands-upwork.svg'
import IconBrandsXTwitter from '@/assets/icons/icon-brands-x-twitter.svg'
import Container from '@/components/layout/Container.tsx'
import BaseIcon from '@/components/ui/BaseIcon.tsx'
import BaseSeparator from '@/components/ui/BaseSeparator.tsx'
import BaseTextLink from '@/components/ui/BaseTextLink.tsx'
import links from '@/data/links.json'
import type { FC, SVGProps } from 'react'
import type { Metadata } from 'next'

const linksList: Array<{ href: string; label: string; Icon: FC<SVGProps<SVGElement>> }> = [
  {
    href: links.social.twitter,
    label: 'Twitter',
    Icon: IconBrandsXTwitter,
  },
  {
    href: links.social.github,
    label: 'GitHub',
    Icon: IconBrandsGithub,
  },
  {
    href: links.social.reddit,
    label: 'Reddit',
    Icon: IconBrandsReddit,
  },
  {
    href: links.social.linkedin,
    label: 'LinkedIn',
    Icon: IconBrandsLinkedIn,
  },
  {
    href: links.social.upwork,
    label: 'Upwork',
    Icon: IconBrandsUpwork,
  },
]

export const metadata: Metadata = {
  title: 'Andrei Hudovich',
}

export default function HomePage() {
  return (
    <Container>
      <section className="mb-11 md:mb-14">
        <h1 className="mb-3 font-bold text-heading-2 md:text-heading-1">
          Hey, <br className="sm:hidden" />
          I’m <span className="text-orange-500">Andrei Hudovich</span>!
        </h1>

        {/* prettier-ignore */}
        <p className="mb-4 text-body-2 sm:max-w-xl md:mb-5 md:max-w-none md:text-body-1">
          A freelance full stack engineer based in Wroclaw, Poland. I&nbsp;specialize in developing
          applications using React ecosystem. Currently, I&apos;m&nbsp;leading the front-end team
          at&nbsp;Propbar.
        </p>

        <BaseSeparator />
      </section>

      <section className="mb-11">
        <h2 className="mb-3 font-medium text-heading-5">Find me on</h2>
        <ul className="flex flex-wrap gap-x-4 gap-y-2.5 md:gap-6">
          {linksList.map(({ Icon, href, label }) => (
            <li key={label} className="group">
              <a
                className="flex items-center gap-x-2 min-w-[6.25rem] text-body-3 transition-colors dark:group-hover:text-white md:min-w-0"
                href={href}
                rel="noreferrer"
                target="_blank"
              >
                <BaseIcon
                  as={Icon}
                  className="size-5 text-dark-blue-950 transition-colors dark:text-slate-300 dark:group-hover:text-white"
                />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-1 font-medium text-heading-5">Contact</h2>
        <p className="text-body-3 md:text-body-2">
          You can reach me out anytime at{' '}
          <BaseTextLink className="font-medium" href={`mailto:${links.contact.email}`}>
            {links.contact.email}
          </BaseTextLink>
        </p>
      </section>
    </Container>
  )
}
