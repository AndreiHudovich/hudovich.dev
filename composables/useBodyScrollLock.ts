import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

export default function useBodyScrollLock(ref: Ref) {
  onMounted(() => disableBodyScroll(ref.value))
  onUnmounted(() => {
    clearAllBodyScrollLocks()
  })
}
