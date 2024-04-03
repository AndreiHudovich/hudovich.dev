import { cn } from '@/utils/css.ts'
import type { ComponentPropsWithoutRef } from 'react'

function BaseTextLink({ children, className, href, ...props }: ComponentPropsWithoutRef<'a'>) {
  return (
    <a
      className={cn(
        'relative inline-block text-dark-blue-950 dark:text-slate-300 transition-colors hover:dark:text-slate-100 after:inline-block after:absolute after:bottom-0 after:inset-x-0 after:h-px after:bg-orange-500 after:transition-[height] hover:after:h-[0.1875rem]',
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </a>
  )
}

export default BaseTextLink
