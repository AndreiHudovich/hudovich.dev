import { forwardRef } from 'react'
import { cn } from '@/utils/css.ts'
import type { ComponentPropsWithRef, FC, SVGProps } from 'react'

interface BaseIconProps extends ComponentPropsWithRef<'svg'> {
  as: FC<SVGProps<SVGElement>>
  label?: string
  className?: string
}

const BaseIcon = forwardRef<HTMLSpanElement, BaseIconProps>(
  ({ as, className, label, ...props }, forwardedRef) => {
    const Component = as

    return (
      <span ref={forwardedRef} className={cn('grid', className)}>
        {label && <span className="sr-only">{label}</span>}
        <Component
          className="size-full fill-current"
          aria-hidden={true}
          focusable={false}
          {...props}
        />
      </span>
    )
  }
)

BaseIcon.displayName = 'BaseIcon'

export default BaseIcon
