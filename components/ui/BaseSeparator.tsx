import Separator from '@/assets/separator.svg'
import { cn } from '@/utils/css.ts'
import type { ComponentPropsWithoutRef } from 'react'

function BaseSeparator({ className, ...props }: ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className={cn('py-1', className)} role="none">
      <Separator className="w-[8.625rem] h-3 fill-orange-500" {...props} />
    </div>
  )
}

export default BaseSeparator
