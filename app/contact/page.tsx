import Container from '@/components/layout/Container.tsx'
import BaseSeparator from '@/components/ui/BaseSeparator.tsx'
import BaseTextLink from '@/components/ui/BaseTextLink.tsx'
import links from '@/data/links.json'

export default function ContactPage() {
  return (
    <Container>
      <section>
        <h1 className="mb-1 font-bold text-heading-2 md:text-heading-1">Get in touch</h1>
        <p className="mb-4 text-body-2 md:mb-5 md:text-body-1">
          Do you have an exciting project?
          <br className="xxs:hidden" /> Let’s talk!
        </p>

        <BaseSeparator className="mb-9 md:mb-8" />

        <div className="text-body-3 md:text-body-2">
          <p className="mb-3 md:mb-0">
            You can reach me out anytime at{' '}
            <BaseTextLink className="font-medium" href={`mailto:${links.contact.email}`}>
              {links.contact.email}
            </BaseTextLink>
          </p>

          <p className="mb-3">
            As a backup option, you can{' '}
            <BaseTextLink
              className="font-medium"
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
