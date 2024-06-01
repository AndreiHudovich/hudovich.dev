import Container from '@/components/layout/Container.tsx'
import PageIntro from '@/components/layout/PageIntro.tsx'
import BaseSeparator from '@/components/ui/BaseSeparator.tsx'
import BaseTextLink from '@/components/ui/BaseTextLink.tsx'
import links from '@/data/links.json'
import { getCurrentDirName } from '@/utils/url.ts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Andrei Hudovich',
  alternates: {
    canonical: `${getCurrentDirName(import.meta.url)}`,
  },
}

export default function ContactPage() {
  return (
    <Container>
      <section>
        <PageIntro
          heading="Get in touch"
          text={'Do you have an exciting project?<br class="xxs:hidden" /> Let&apos;s talk!'}
        />
        <BaseSeparator className="mb-9 md:mb-8" />

        <div className="text-body-3 md:text-body-2">
          <p className="mb-3 md:mb-0">
            You can reach me out anytime at{' '}
            <BaseTextLink
              className="font-medium dark:text-slate-100"
              href={`mailto:${links.contact.email}`}
            >
              {links.contact.email}
            </BaseTextLink>
          </p>

          <p className="mb-3">
            As a backup option, you can{' '}
            <BaseTextLink
              className="font-medium dark:text-slate-100"
              href={links.contact.dm}
              rel="noreferrer"
              target="_blank"
            >
              DM me on X
            </BaseTextLink>
          </p>

          <p>I usually respond right away on business days.</p>
        </div>
      </section>
    </Container>
  )
}
