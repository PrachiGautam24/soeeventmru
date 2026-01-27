'use client'

import { ReactNode } from 'react'
import BottomNav from './BottomNav'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content with bottom padding for nav */}
      <main className="pb-16 max-w-md mx-auto min-h-screen bg-white shadow-xl">
        {children}
      </main>
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
