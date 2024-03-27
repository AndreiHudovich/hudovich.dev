import { cn } from '@/utils/css.ts'
import type { FC, SVGProps } from 'react'

interface BaseIconProps {
  as: FC<SVGProps<SVGElement>>
  label?: string
  className?: string
}

function BaseIcon({ as, className, label }: BaseIconProps) {
  const Component = as

  return (
    <>
      {label && <span className="sr-only">{label}</span>}
      <Component className={cn(className)} aria-hidden={true} focusable={false} />
    </>
  )
}

export default BaseIcon
