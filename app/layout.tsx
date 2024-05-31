import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Outfit } from 'next/font/google'
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
  description: 'The personal website of Andrei Hudovich, a freelance full stack engineer.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn(outfit.variable, 'h-full')} suppressHydrationWarning={true}>
      <body className="h-full min-h-full bg-white font-[350] text-dark-blue-950 antialiased dark:bg-blue-950 dark:text-slate-300">
        <ThemeProvider>
          <Header />
          <main className="pt-8 pb-16 md:pt-16 md:pb-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
