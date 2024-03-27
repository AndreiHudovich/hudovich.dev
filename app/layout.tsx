import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Outfit } from 'next/font/google'
import Footer from '@/components/layout/Footer.tsx'
import Header from '@/components/layout/Header.tsx'
import type { ReactNode } from 'react'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning={true}>
      <body className="antialiased text-dark-blue-950 dark:text-slate-300">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
