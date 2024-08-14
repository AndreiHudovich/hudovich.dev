import Container from '@/components/layout/Container.tsx'
import PageIntro from '@/components/layout/PageIntro.tsx'
import BaseSeparator from '@/components/ui/BaseSeparator.tsx'
import BaseTextLink from '@/components/ui/BaseTextLink.tsx'
import profileLinks from '@/data/profile-links.json'
import { getCurrentDirName } from '@/utils/url.ts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profiles | Andrei Hudovich',
  alternates: {
    canonical: `${getCurrentDirName(import.meta.url)}`,
  },
}

export default function ContactPage() {
  return (
    <Container>
      <section>
        <PageIntro heading="Profiles" text="My other profiles on various platforms." />
        <BaseSeparator className="mb-9 md:mb-8" />
        <ul className="grid gap-1.5 text-body-3 md:text-body-2">
          {profileLinks.map(({ href, label }) => (
            <li key={label}>
              <BaseTextLink className="font-medium dark:text-slate-100" href={href}>
                {label}
              </BaseTextLink>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}
