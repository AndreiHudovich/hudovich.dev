import { useEffect, useState } from 'react'
import { lock, unlock } from 'tua-body-scroll-lock'
import type { RefObject } from 'react'

export default function useBodyScrollLock(targetRef: RefObject<HTMLElement | null>) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    isOpen ? lock(targetRef.current) : unlock(targetRef.current)
  }, [isOpen, targetRef])

  return {
    isOpen,
    setIsOpen,
  }
}
