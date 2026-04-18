'use client'

import { ReactNode } from 'react'
import BottomNav from './BottomNav'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <main className="pb-16 w-full min-h-screen bg-white">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
