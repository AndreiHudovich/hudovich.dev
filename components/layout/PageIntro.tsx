interface PageIntroProps {
  heading: string
  text: string | TrustedHTML
}

export default function PageIntro({ heading, text }: PageIntroProps) {
  return (
    <>
      <h1 className="mb-1 font-bold text-heading-2 md:text-heading-1">{heading}</h1>
      <p
        className="mb-4 text-body-2 md:mb-5 md:text-body-1"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </>
  )
}
