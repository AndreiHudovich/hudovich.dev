import IconFlagUK from '@/assets/flags/flag-uk.svg'
import IconFlagUSA from '@/assets/flags/flag-usa.svg'
import IconFlagWorldwide from '@/assets/flags/flag-worldwide.svg'
import IconSolidFilePdf from '@/assets/icons/icon-solid-file-pdf.svg'
import Container from '@/components/layout/Container.tsx'
import PageIntro from '@/components/layout/PageIntro.tsx'
import BaseIcon from '@/components/ui/BaseIcon.tsx'
import BaseSeparator from '@/components/ui/BaseSeparator.tsx'
import BaseTextLink from '@/components/ui/BaseTextLink.tsx'
import { cn } from '@/utils/css.ts'
import { getCurrentDirName } from '@/utils/url.ts'
import type { Metadata } from 'next'

const skillsData = [
  {
    label: 'Next.js',
    Logo: (await import('@/assets/logos/logo-nextjs.svg')).default,
  },
  {
    label: 'React',
    Logo: (await import('@/assets/logos/logo-react.svg')).default,
  },
  {
    label: 'Typescript',
    Logo: (await import('@/assets/logos/logo-typescript.svg')).default,
  },
  {
    label: 'Javascript',
    Logo: (await import('@/assets/logos/logo-javascript.svg')).default,
  },
  {
    label: 'Zustand',
    image: {
      '1x': (await import('@/assets/logos/logo-zustand.png')).default,
      '2x': (await import('@/assets/logos/logo-zustand@2x.png')).default,
    },
  },
  {
    label: 'Redux',
    Logo: (await import('@/assets/logos/logo-redux.svg')).default,
  },
  {
    label: 'Tailwind',
    Logo: (await import('@/assets/logos/logo-tailwind.svg')).default,
  },
  {
    label: 'shadcn/ui',
    Logo: (await import('@/assets/logos/logo-shadcn-ui.svg')).default,
  },
  {
    label: 'Radix',
    Logo: (await import('@/assets/logos/logo-radix.svg')).default,
  },
  {
    label: 'Vue',
    Logo: (await import('@/assets/logos/logo-vue.svg')).default,
  },
  {
    label: 'Nuxt',
    Logo: (await import('@/assets/logos/logo-nuxt.svg')).default,
  },
  {
    label: 'Astro',
    logoClassName: 'translate-y-0.5',
    Logo: (await import('@/assets/logos/logo-astro.svg')).default,
  },
  {
    label: 'Node',
    Logo: (await import('@/assets/logos/logo-nodejs.svg')).default,
  },
  {
    label: 'Bun',
    Logo: (await import('@/assets/logos/logo-bun.svg')).default,
  },
  {
    label: 'Workers',
    Logo: (await import('@/assets/logos/logo-workers.svg')).default,
  },
  {
    label: 'Hono',
    className: 'md:order-2',
    image: {
      '1x': (await import('@/assets/logos/logo-hono.png')).default,
      '2x': (await import('@/assets/logos/logo-hono@2x.png')).default,
    },
  },
  {
    label: 'Fastify',
    className: 'md:order-1',
    Logo: (await import('@/assets/logos/logo-fastify.svg')).default,
  },
  {
    label: 'Postgres',
    Logo: (await import('@/assets/logos/logo-postgres.svg')).default,
  },
  {
    label: 'MongoDB',
    Logo: (await import('@/assets/logos/logo-mongodb.svg')).default,
  },
  {
    label: 'Redis',
    Logo: (await import('@/assets/logos/logo-redis.svg')).default,
  },
  {
    label: 'Supabase',
    Logo: (await import('@/assets/logos/logo-supabase.svg')).default,
  },
  {
    label: 'Vite',
    className: 'md:order-2',
    Logo: (await import('@/assets/logos/logo-vite.svg')).default,
  },
  {
    label: 'Turborepo',
    className: 'md:order-2',
    Logo: (await import('@/assets/logos/logo-turborepo.svg')).default,
  },
  {
    label: 'Docker',
    className: 'md:order-2',
    Logo: (await import('@/assets/logos/logo-docker.svg')).default,
  },
  {
    label: 'Git',
    className: 'md:order-2',
    Logo: (await import('@/assets/logos/logo-git.svg')).default,
  },
  {
    label: 'GitHub',
    className: 'md:order-2',
    Logo: (await import('@/assets/logos/logo-github.svg')).default,
  },
  {
    label: 'ChatGPT',
    className: 'md:order-3',
    Logo: (await import('@/assets/logos/logo-chatgpt.svg')).default,
  },
  {
    label: 'Payload',
    className: 'md:order-2',
    Logo: (await import('@/assets/logos/logo-payload.svg')).default,
  },
  {
    label: 'Sanity',
    className: 'md:order-2',
    Logo: (await import('@/assets/logos/logo-sanity.svg')).default,
  },
  {
    label: 'AG Grid',
    className: 'md:order-3',
    Logo: (await import('@/assets/logos/logo-ag-grid.svg')).default,
  },
  {
    label: 'Mapbox',
    className: 'md:order-3',
    Logo: (await import('@/assets/logos/logo-mapbox.svg')).default,
  },
  {
    label: 'Figma',
    className: 'md:order-3',
    Logo: (await import('@/assets/logos/logo-figma.svg')).default,
  },
]

const workHistoryData = [
  {
    title: 'Lead Front-end Engineer',
    meta: {
      company: {
        name: 'Propbar',
        link: 'https://www.propbar.co.uk/',
      },
      country: {
        Icon: IconFlagUK,
        name: 'United Kingdom',
      },
      position: 'Full-Time',
    },
    date: 'Mar 2023 ‐ Present',
    content: [
      'Led the front-end work from the project inception.',
      'Maintained a browser extension, widget and web application as a monorepo.',
      'Architected a highly complex real-estate map service.',
      'Implemented a sophisticated data grid of property comparables.',
    ],
  },
  {
    title: 'Senior Front-end Engineer',
    meta: {
      company: {
        name: 'LolaDB',
      },
      country: {
        Icon: IconFlagUSA,
        name: 'United States',
      },
      position: 'Contract',
    },
    date: 'Jun 2022 ‐ Feb 2023',
    content: [
      'Was solving complex problems using the latest Web Standards.',
      "Architected the product's front-end structure.",
      'Accomplished the development of sophisticated UI components.',
      'Developed the open-source component library.',
      'Crafted responsive marketing landing pages.',
    ],
  },
  {
    title: 'Senior Front-end Engineer',
    meta: {
      company: {
        name: 'Casago',
        link: 'https://casago.com/',
      },
      country: {
        Icon: IconFlagUSA,
        name: 'United States',
      },
      position: 'Full-Time',
    },
    date: 'Oct 2021 ‐ Apr 2022',
    content: [
      "Joined the new company after Nokori's acquisition.",
      'Helped to adapt and embed the new assets into the franchise ecosystem.',
      'Developed the ground for the new property analytics project.',
    ],
  },
  {
    title: 'Middle Front-end Engineer',
    meta: {
      company: {
        name: 'Nokori',
      },
      country: {
        Icon: IconFlagUSA,
        name: 'United States',
      },
      position: 'Full-Time',
    },
    date: 'Jul 2020 ‐ Oct 2021',
    content: [
      'Acted as a primary and sole front-end developer of the team.',
      'Was responsible for the development of the single-page application.',
      'Worked on responsive static marketing pages.',
      'Managed the migration from Vue 2 codebase to Vue 3 and Composition API.',
    ],
  },
  {
    title: 'Front-end Developer',
    meta: {
      company: {
        name: 'Freelance Platforms',
      },
      country: {
        Icon: IconFlagWorldwide,
        name: 'Worldwide',
      },
    },
    date: 'Jan 2015 ‐ Jul 2020',
    content: [
      'Kick-started my developing career as a PSD-to-HTML developer.',
      'Helped dozens of clients around the world to build and deploy their websites.',
      'Worked hard to meet client deadlines.',
      'Matured as a self-taught front-end engineer.',
    ],
  },
]

export const metadata: Metadata = {
  title: 'Resume | Andrei Hudovich',
  alternates: {
    canonical: `${getCurrentDirName(import.meta.url)}`,
  },
}

export default function ResumePage() {
  return (
    <Container>
      <section className="mb-11 md:mb-14">
        <PageIntro
          heading="My Resume / CV"
          text="I'm a highly skilled full stack engineer with more than 8 years of experience in
          building web applications. On this page, you can learn more about my knowledge stack and
          my previous work experience."
        />
        <BaseSeparator />
      </section>

      <section className="mb-12 md:mb-16">
        <h2 className="mb-2 font-semibold text-heading-3">Skills</h2>
        <p className="mb-8 text-body-3 md:text-body-2">
          Here are the frameworks, libraries, services and runtimes I have experience with. This is
          not a complete list! I&apos;m constantly gaining new skills, and hence it can be a little
          bit outdated.
        </p>

        <ul className="flex flex-wrap gap-x-5 gap-y-4 font-normal text-caption md:gap-5">
          {skillsData.map((skill) => (
            <li key={skill.label} className={cn('flex items-center gap-2', skill.className)}>
              {skill.Logo ? (
                <skill.Logo
                  className={cn('shrink-0 size-5', skill.logoClassName)}
                  aria-hidden={true}
                  focusable={false}
                />
              ) : (
                <img
                  className={cn('shrink-0 size-5', skill.logoClassName)}
                  src={skill.image['1x'].src}
                  srcSet={`${skill.image['2x'].src} 2x`}
                  alt=""
                  aria-hidden={true}
                />
              )}
              {skill.label}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="mb-8">
          <h2 className="mb-2 font-semibold text-heading-3">Work History</h2>
          <p className="text-body-3 md:text-body-2">
            Below you will find a summary of my past employment experience. Additionally, if you
            require, you can{' '}
            <span className="inline-flex items-center gap-1.5">
              <BaseTextLink
                className="font-medium"
                href="/resume.pdf"
                download="Andrei_Hudovich_-_Lead_Full_Stack_Engineer_-_Resume.pdf"
              >
                download my resume
              </BaseTextLink>
              <BaseIcon as={IconSolidFilePdf} className="translate-y-px size-4" />
            </span>
          </p>
        </div>

        <div className="relative grid gap-8 pl-8 before:absolute before:left-[0.3125rem] before:top-3 before:bottom-0 before:w-0.5 before:bg-neutral-200 dark:before:bg-slate-800 md:pl-10 md:before:left-[0.8125rem]">
          {workHistoryData.map((item, index) => (
            <div key={item.meta.company.name} className="relative">
              <span
                className="absolute -left-8 top-2.5 block size-3 bg-orange-500 rounded-full"
                role="none"
              >
                {index === 0 && (
                  <span
                    className="absolute -left-px -top-px size-full bg-orange-500 rounded-full opacity-75 animate-ping md:size-3.5"
                    style={{ animationDuration: '1.25s' }}
                  />
                )}
              </span>

              <div className="mb-2 text-dark-blue-950 dark:text-slate-100">
                <h3 className="mb-0.5 font-medium text-heading-5">{item.title}</h3>

                <div className="flex items-center gap-2 font-[375] text-caption md:gap-2.5 md:text-body-3">
                  {item.meta.company.link ? (
                    <BaseTextLink
                      className="text-dark-blue-950 dark:text-slate-100 after:-bottom-0.5 md:after:bottom-0"
                      href={item.meta.company.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {item.meta.company.name}
                    </BaseTextLink>
                  ) : (
                    item.meta.company.name
                  )}

                  <span
                    className="size-1.5 rounded-full bg-neutral-300 dark:bg-slate-600"
                    role="none"
                  />

                  <span className="flex items-center gap-x-2">
                    <BaseIcon as={item.meta.country.Icon} className="w-4 h-3" />
                    {item.meta.country.name}
                  </span>

                  {item.meta.position && (
                    <span
                      className="size-1.5 rounded-full bg-neutral-300 dark:bg-slate-600"
                      role="none"
                    />
                  )}

                  {item.meta.position}
                </div>
              </div>

              <div className="mb-3 font-normal text-caption text-neutral-700 dark:text-slate-400">
                {item.date}
              </div>

              <ul className="pl-7 text-body-3">
                {item.content.map((listItem, index) => (
                  <li
                    key={index}
                    className="relative before:absolute before:top-3.5 before:-left-4 before:block before:size-1 before:bg-dark-blue-950 before:rounded-full before:dark:bg-slate-300"
                  >
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
