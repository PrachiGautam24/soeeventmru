'use client'

import type { ReactNode } from 'react'

export default function MobileOnly({ children }: { children: ReactNode }) {
  return <>{children}</>
}
