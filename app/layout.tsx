import '@/styles/globals.css'
import { Outfit } from 'next/font/google'
import type { ReactNode } from 'react'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased text-dark-blue-950 dark:text-slate-300">{children}</body>
    </html>
  )
}
