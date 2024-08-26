import Container from '@/components/layout/Container.tsx'
import PageIntro from '@/components/layout/PageIntro.tsx'
import BaseSeparator from '@/components/ui/BaseSeparator.tsx'
import BaseTextLink from '@/components/ui/BaseTextLink.tsx'
import { getCurrentDirName } from '@/utils/url.ts'
import type { Metadata } from 'next'

const data = [
  {
    heading: 'Design',
    list: [
      {
        label: 'App',
        value: 'Figma',
        link: 'https://figma.com',
      },
      {
        label: 'Font Family',
        value: 'Outfit',
        link: 'https://fonts.google.com/specimen/Outfit',
      },
      {
        label: 'Icons',
        value: 'Font Awesome',
        link: 'https://fontawesome.com',
      },
    ],
  },
  {
    heading: 'Development',
    list: [
      {
        label: 'Front-end',
        value: 'React',
        link: 'https://react.dev',
      },
      {
        label: 'Back-end',
        value: 'Next.js',
        link: 'https://nextjs.org',
      },
      {
        label: 'CSS',
        value: 'Tailwind',
        link: 'https://tailwindcss.com',
      },
    ],
  },
  {
    heading: 'Infrastructure',
    list: [
      {
        label: 'Domain Registrar',
        value: 'Cloudflare',
        link: 'https://cloudflare.com',
      },
      {
        label: 'DNS',
        value: 'Cloudflare',
        link: 'https://cloudflare.com',
      },
      {
        label: 'Cloud Provider',
        value: 'Vercel',
        link: 'https://vercel.com',
      },
      {
        label: 'Web Analytics',
        value: 'Plausible',
        link: 'https://plausible.io/',
      },
      {
        label: 'Sources',
        value: 'GitHub',
        link: 'https://github.com',
      },
    ],
  },
]

export const metadata: Metadata = {
  title: 'Tech Stack | Andrei Hudovich',
  alternates: {
    canonical: `${getCurrentDirName(import.meta.url)}`,
  },
}

export default function TechStackPage() {
  return (
    <Container>
      <section className="mb-8">
        <PageIntro heading="Tech Stack" text="The set of tools under the hood of this website." />
        <BaseSeparator />
      </section>

      <section className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {data.map(({ heading, list }) => (
          <section
            key={heading}
            className="px-6 pt-4 pb-6 bg-orange-500/15 rounded-xl dark:bg-dark-blue-950/50 sm:last:col-span-2"
          >
            <h2 className="mb-3 font-semibold text-heading-5 dark:text-slate-100 md:text-heading-4">
              {heading}
            </h2>

            <ul className="grid gap-y-3 md:gap-y-1.5">
              {list.map(({ label, link, value }) => (
                <li key={label} className="font-medium text-caption md:text-body-3">
                  <span className="dark:text-slate-100">{label}</span>
                  <span className="font-normal md:font-[350]"> - </span>
                  <BaseTextLink
                    className="font-[375] md:font-[350]"
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {value}
                  </BaseTextLink>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </Container>
  )
}
