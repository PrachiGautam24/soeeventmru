'use client'

import { ReactNode } from 'react'

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen relative overflow-hidden max-w-md mx-auto"
      style={{ background: 'linear-gradient(160deg, #c0392b 0%, #e74c3c 55%, #c0392b 100%)' }}>

      {/* Glow blobs */}
      <div className="absolute top-1/3 right-8 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,180,100,0.2) 0%, transparent 70%)' }} />
      <div className="absolute top-1/4 left-4 w-40 h-40 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,120,120,0.15) 0%, transparent 70%)' }} />

      {/* Bottom waves */}
      <svg className="absolute bottom-0 left-0 w-full pointer-events-none z-0" viewBox="0 0 390 120" fill="none" preserveAspectRatio="none">
        <path d="M0,60 Q100,100 195,60 Q290,20 390,60 L390,120 L0,120 Z" fill="rgba(0,0,0,0.08)" />
        <path d="M0,80 Q100,50 195,80 Q290,110 390,80 L390,120 L0,120 Z" fill="rgba(0,0,0,0.06)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 pb-24">
        {children}
      </div>
    </div>
  )
}
