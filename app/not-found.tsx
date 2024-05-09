import NotFound from '@/assets/not-found.svg'
import Container from '@/components/layout/Container.tsx'
import BaseSeparator from '@/components/ui/BaseSeparator.tsx'

export default function NotFoundPage() {
  return (
    <Container>
      <section>
        <h1 className="mb-1 font-bold text-heading-2 md:text-heading-1">Page Not Found</h1>
        <p className="mb-4 text-body-2 md:mb-5 md:text-body-1">
          Sorry, the page you are looking for doesn&apos;t exist :(
        </p>

        <BaseSeparator className="mb-10 md:mb-12" />
        <NotFound className="max-w-96" role="img" aria-label="404" />
      </section>
    </Container>
  )
}
