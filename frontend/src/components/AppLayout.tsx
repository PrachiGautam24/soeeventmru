'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import BottomNav from './BottomNav'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="pb-16 max-w-md mx-auto min-h-screen bg-white shadow-xl"
      >
        {children}
      </motion.main>
      <BottomNav />
    </div>
  )
}
