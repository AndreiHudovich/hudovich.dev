'use client'

import { useRef } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from '@radix-ui/react-dialog'
import IconLucideMenu from '@/assets/icons/icon-lucide-menu.svg'
import IconLucideX from '@/assets/icons/icon-lucide-x.svg'
import InternalLinks from '@/components/layout/navigation/InternalLinks.tsx'
import BaseIcon from '@/components/ui/BaseIcon.tsx'
import useBodyScrollLock from '@/hooks/useBodyScrollLock.ts'
import { cn, zIndexMobileNavigation } from '@/utils/css.ts'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

interface MobileNavigationProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

function MobileNavigation({ children, className, ...props }: MobileNavigationProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const { isOpen, setIsOpen } = useBodyScrollLock(contentRef)

  return (
    <div className={className} {...props}>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild={true}>
          <button className="p-0.5" type="button" onClick={() => setIsOpen(true)}>
            <BaseIcon
              as={IconLucideMenu}
              className="size-7 text-dark-blue-950 dark:text-slate-100"
              label="Open navigation"
            />
          </button>
        </DialogTrigger>

        <DialogPortal>
          <DialogContent
            ref={contentRef}
            className={cn(
              'fixed inset-0 overflow-y-auto grid p-12 h-svh bg-orange-500 dark:bg-blue-950 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out',
              className
            )}
            style={{
              zIndex: zIndexMobileNavigation,
            }}
            // Auto focus automatically opens theme switcher on mobile
            onOpenAutoFocus={(event) => event.preventDefault()}
            aria-labelledby={undefined}
            aria-describedby={undefined}
          >
            <div className="m-auto">
              <InternalLinks className="mb-6" onClick={() => setIsOpen(false)} />
              {children}
            </div>

            <DialogClose asChild={true}>
              <button
                className="absolute top-[1.375rem] right-5 p-0.5"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                <BaseIcon
                  as={IconLucideX}
                  className="size-7 text-dark-blue-950 dark:text-slate-100"
                  label="Close"
                />
              </button>
            </DialogClose>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  )
}

export default MobileNavigation
