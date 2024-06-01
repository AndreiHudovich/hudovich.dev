declare module '*.svg' {
  import { FC, SVGProps } from 'react'
  const Component: FC<SVGProps<SVGElement>>
  export default Component
}

declare module '*.svg?url' {
  const Component: any
  export default Component
}

namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string
  }
}
