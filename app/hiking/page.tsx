import { Fragment } from 'react'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import IconSolidLocationDot from '@/assets/icons/icon-solid-location-dot.svg'
import Container from '@/components/layout/Container.tsx'
import PageIntro from '@/components/layout/PageIntro.tsx'
import BaseIcon from '@/components/ui/BaseIcon.tsx'
import BaseSeparator from '@/components/ui/BaseSeparator.tsx'
import type { Metadata } from 'next'

const data = [
  {
    date: '2024-05-25',
    title:
      'Mlynica (653 m / 2143 ft), Czerniawska Kopa (775 m / 2543 ft), Stog Izerski (1107 m / 3632 ft)',
    location: 'Jizera Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2024-05-25/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2024-05-25/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2024-05-25/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2024-05-25/photo-4.png')).default,
    ],
  },
  {
    date: '2024-05-12',
    title: 'Krzeszow / St. Anne Mountain (592 m / 1,943 ft)',
    location: 'Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2024-05-12/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2024-05-12/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2024-05-12/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2024-05-12/photo-4.png')).default,
    ],
  },
  {
    date: '2024-04-06',
    title: 'Szczawno-Zdroj / Chelmiec Mountain #3 (851 m / 2,790 ft)',
    location: 'Walbrzych Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2024-04-06/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2024-04-06/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2024-04-06/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2024-04-06/photo-4.png')).default,
    ],
  },
  {
    date: '2024-03-30',
    title: 'Bolczow Castle Ruins #2 (561 m / 1,840 ft)',
    location: 'Rudawy Janowickie Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2024-03-30/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2024-03-30/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2024-03-30/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2024-03-30/photo-4.png')).default,
    ],
  },
  {
    date: '2024-03-03',
    title: 'Szeroka Mountain (765 m / 2,509 ft)',
    location: 'Bardzkie Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2024-03-03/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2024-03-03/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2024-03-03/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2024-03-03/photo-4.png')).default,
    ],
  },
  {
    date: '2024-02-10',
    title: 'Klodzka Mountain (757 m / 2,483 ft)',
    location: 'Bardzkie Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2024-02-10/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2024-02-10/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2024-02-10/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2024-02-10/photo-4.png')).default,
    ],
  },
  {
    date: '2024-01-20',
    title: 'Wlodasz Mountain (811 m / 2,660 ft)',
    location: 'Owl Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2024-01-20/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2024-01-20/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2024-01-20/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2024-01-20/photo-4.png')).default,
    ],
  },
  {
    date: '2023-11-05',
    title: 'Kalenica Mountain #2 (964 m / 3,162 ft)',
    location: 'Owl Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2023-11-05/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2023-11-05/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2023-11-05/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2023-11-05/photo-4.png')).default,
    ],
  },
  {
    date: '2023-10-14',
    title: 'Great Owl Mountain (1,014 m / 3,330 ft)',
    location: 'Owl Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2023-10-14/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2023-10-14/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2023-10-14/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2023-10-14/photo-4.png')).default,
    ],
  },
  {
    date: '2023-09-24',
    title: 'Szczawno-Zdroj / Chelmiec Mountain #2 (851 m / 2,790 ft)',
    location: 'Walbrzych Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2023-09-24/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2023-09-24/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2023-09-24/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2023-09-24/photo-4.png')).default,
    ],
  },
  {
    date: '2023-09-10',
    title: 'Wielka Kopa Mountain (871 m / 2,857 ft)',
    location: 'Rudawy Janowickie Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2023-09-10/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2023-09-10/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2023-09-10/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2023-09-10/photo-4.png')).default,
    ],
  },
  {
    date: '2023-08-13',
    title: 'Sleza Mountain #2 (718 m / 2,350 ft)',
    location: 'Sleza Massif, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2023-08-13/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2023-08-13/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2023-08-13/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2023-08-13/photo-4.png')).default,
    ],
  },
  {
    date: '2023-05-28',
    title: 'Kalenica Mountain (964 m / 3,162 ft)',
    location: 'Owl Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2023-05-28/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2023-05-28/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2023-05-28/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2023-05-28/photo-4.png')).default,
    ],
  },
  {
    date: '2023-05-07',
    title: 'Dzikowiec Mountain (836 m / 2,742 ft)',
    location: 'Stone Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2023-05-07/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2023-05-07/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2023-05-07/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2023-05-07/photo-4.png')).default,
    ],
  },
  {
    date: '2023-04-23',
    title: 'Trojgarb Mountain (778 m / 2,552 ft)',
    location: 'Walbrzych Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2023-04-23/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2023-04-23/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2023-04-23/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2023-04-23/photo-4.png')).default,
    ],
  },
  {
    date: '2023-04-22',
    title: 'Adrspach',
    location: 'Hradec Kralove, Czech Republic',
    photos: [
      (await import('@/assets/photos/hiking/2023-04-22/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2023-04-22/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2023-04-22/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2023-04-22/photo-4.png')).default,
    ],
  },
  {
    date: '2023-03-19',
    title: 'Bolczow Castle Ruins (561 m / 1,840 ft)',
    location: 'Rudawy Janowickie Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2023-03-19/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2023-03-19/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2023-03-19/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2023-03-19/photo-4.png')).default,
    ],
  },
  {
    date: '2023-01-15',
    title: 'Wlodzicka Mountain (757 m / 2,483 ft)',
    location: 'Wlodzickie Hills, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2023-01-15/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2023-01-15/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2023-01-15/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2023-01-15/photo-4.png')).default,
    ],
  },
  {
    date: '2022-11-13',
    title: 'Chelmiec Mountain (851 m / 2,790 ft)',
    location: 'Walbrzych Mountains, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2022-11-13/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2022-11-13/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2022-11-13/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2022-11-13/photo-4.png')).default,
    ],
  },
  {
    date: '2022-10-23',
    title: 'Chojnik Castle (627 m / 2,057 ft)',
    location: 'Karkonosze National Park, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2022-10-23/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2022-10-23/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2022-10-23/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2022-10-23/photo-4.png')).default,
    ],
  },
  {
    date: '2022-10-09',
    title: 'Sleza Mountain (718 m / 2,350 ft)',
    location: 'Sleza Massif, Lower Silesian Voivodeship, Poland',
    photos: [
      (await import('@/assets/photos/hiking/2022-10-09/photo-1.png')).default,
      (await import('@/assets/photos/hiking/2022-10-09/photo-2.png')).default,
      (await import('@/assets/photos/hiking/2022-10-09/photo-3.png')).default,
      (await import('@/assets/photos/hiking/2022-10-09/photo-4.png')).default,
    ],
  },
]

export const metadata: Metadata = {
  title: 'Hiking Diary | Andrei Hudovich',
}

export default function HikingPage() {
  return (
    <>
      <section className="mb-10">
        <Container>
          <PageIntro
            heading="Hiking Diary"
            text="I love exploring mountain trails. Every hike offers new challenges and breathtaking
            scenery, making it the ideal way to spend a weekend."
          />
          <BaseSeparator />
        </Container>
      </section>

      <div className="grid gap-8 md:gap-11">
        {data.map((item, index) => (
          <Fragment key={item.date}>
            <section>
              <Container className="grid grid-rows-3 grid-cols-2 gap-2.5 mb-2 pb-2 sm:gap-5">
                <div className="row-span-2">
                  <Image
                    className="size-full rounded-lg object-cover"
                    src={item.photos[0]}
                    sizes="50vw"
                    placeholder="blur"
                    alt=""
                  />
                </div>

                <div className="row-span-1 col-start-1">
                  <Image
                    className="size-full rounded-lg object-cover"
                    src={item.photos[1]}
                    sizes="50vw"
                    placeholder="blur"
                    alt=""
                  />
                </div>

                <div className="row-start-1 col-start-2">
                  <Image
                    className="size-full rounded-lg object-cover"
                    src={item.photos[2]}
                    sizes="50vw"
                    placeholder="blur"
                    alt=""
                  />
                </div>

                <div className="row-span-2 row-start-2 col-start-2">
                  <Image
                    className="size-full rounded-lg object-cover"
                    src={item.photos[3]}
                    sizes="50vw"
                    placeholder="blur"
                    alt=""
                  />
                </div>
              </Container>

              <Container>
                <time
                  className="block font-[375] text-menu text-neutral-700 dark:text-slate-400 md:mb-0.5 md:text-caption"
                  dateTime={item.date}
                >
                  {format(parseISO(item.date), 'MMM dd, yyyy')}
                </time>

                <h2 className="mb-1 font-medium text-heading-5 text-dark-blue-950 dark:text-slate-100">
                  {item.title}
                </h2>

                <div className="flex gap-x-1.5 font-[375]">
                  <BaseIcon
                    as={IconSolidLocationDot}
                    className="shrink-0 mt-1 size-4 text-neutral-900 dark:text-slate-300"
                  />
                  {item.location}
                </div>
              </Container>
            </section>

            {index !== data.length - 1 && (
              <Container>
                <BaseSeparator />
              </Container>
            )}
          </Fragment>
        ))}
      </div>
    </>
  )
}
