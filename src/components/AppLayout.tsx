'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="pb-16 md:pb-0"
    >
      {children}
    </motion.div>
  )
}
