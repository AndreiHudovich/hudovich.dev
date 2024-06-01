import NotFound from '@/assets/not-found.svg'
import Container from '@/components/layout/Container.tsx'
import PageIntro from '@/components/layout/PageIntro.tsx'
import BaseSeparator from '@/components/ui/BaseSeparator.tsx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 | Andrei Hudovich',
}

export default function NotFoundPage() {
  return (
    <Container>
      <section>
        <PageIntro
          heading="Page Not Found"
          text="Sorry, the page you are looking for doesn't exist :("
        />
        <BaseSeparator className="mb-10 md:mb-12" />
        <NotFound className="max-w-96" role="img" aria-label="404" />
      </section>
    </Container>
  )
}
