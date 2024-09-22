import '@/styles/globals.css'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'
import { Outfit } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '@/components/layout/Footer.tsx'
import Header from '@/components/layout/Header.tsx'
import { cn } from '@/utils/css.ts'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  description: 'The personal website of Andrei Hudovich, a freelance full stack engineer.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Andrei Hudovich',
    title: 'The personal website of Andrei Hudovich',
    description: 'A freelance full stack engineer.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AndreiHudovich',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn(outfit.variable, 'h-full')} suppressHydrationWarning={true}>
      <head>
        {/* customDomain={process.env.NEXT_PUBLIC_PLAUSIBLE_CUSTOM_DOMAIN} */}
        <PlausibleProvider
          domain="hudovich.dev"
          selfHosted={true}
          trackOutboundLinks={true}
          trackFileDownloads={true}
        />
      </head>

      <body className="h-full min-h-full bg-white font-[350] text-dark-blue-950 antialiased dark:bg-blue-950 dark:text-slate-300">
        <ThemeProvider disableTransitionOnChange={true}>
          <Header />
          <main className="pt-8 pb-16 md:pt-16 md:pb-24">{children}</main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
