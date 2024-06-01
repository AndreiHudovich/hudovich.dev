import { cn } from '@/utils/css.ts'
import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  isFluid?: boolean
}

function Container({ children, className, isFluid }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-5 w-full md:px-8',
        !isFluid && 'max-w-[45rem] md:max-w-[46.5rem]',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
