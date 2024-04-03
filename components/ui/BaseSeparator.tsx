import Separator from '@/assets/separator.svg'
import { cn } from '@/utils/css.ts'
import type { ComponentPropsWithoutRef } from 'react'

function BaseSeparator({ className, ...props }: ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="py-1" role="none">
      <Separator className={cn('w-[8.625rem] h-3 fill-orange-500', className)} {...props} />
    </div>
  )
}

export default BaseSeparator
