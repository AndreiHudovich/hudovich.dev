import { cn } from '@/utils/css.ts'
import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

function Container({ children, className }: ContainerProps) {
  return <div className={cn('mx-auto px-5 w-full', className)}>{children}</div>
}

export default Container
