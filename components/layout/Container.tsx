import { cn } from '@/utils/css.ts'
import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  fluid?: boolean
}

function Container({ children, className, fluid }: ContainerProps) {
  return (
    <div className={cn('mx-auto px-5', fluid ? 'w-full' : 'max-w-[42.5rem]', className)}>
      {children}
    </div>
  )
}

export default Container
