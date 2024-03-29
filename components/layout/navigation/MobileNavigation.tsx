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
import BaseIcon from '@/components/ui/BaseIcon.tsx'
import useBodyScrollLock from '@/hooks/useBodyScrollLock.ts'
import { cn, zIndexMobileNavigation } from '@/utils/css.ts'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

interface MobileNavigationProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

function MobileNavigation({ children, ...props }: MobileNavigationProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const { isOpen, setIsOpen } = useBodyScrollLock(contentRef)

  return (
    <div {...props}>
      <Dialog>
        <DialogTrigger asChild>
          <button className="p-0.5" type="button" onClick={() => setIsOpen(true)}>
            <BaseIcon
              as={IconLucideMenu}
              className="size-7 fill-dark-blue-950 dark:fill-slate-100"
              label="Open navigation"
            />
          </button>
        </DialogTrigger>

        <DialogPortal>
          <DialogContent
            ref={contentRef}
            className={cn(
              'fixed inset-0 invisible overflow-y-auto grid p-12 h-svh bg-orange-500 opacity-0 transition-all dark:bg-blue-950 md:hidden',
              isOpen && 'visible opacity-100'
            )}
            style={{
              zIndex: zIndexMobileNavigation,
            }}
            aria-labelledby={undefined}
            aria-describedby={undefined}
          >
            <div className="m-auto">{children}</div>

            <DialogClose asChild>
              <button
                className="absolute top-6 right-5 p-0.5"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                <BaseIcon
                  as={IconLucideX}
                  className="size-7 fill-dark-blue-950 dark:fill-slate-100"
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
