'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ICASSLoadingPage() {
  const router = useRouter()

  useEffect(() => {
    // Show ICASS loading screen for 2 seconds then navigate to ICASS home
    const timer = setTimeout(() => {
      router.push('/icass-2026/home')
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [router])

  return (
    <div className="fixed inset-0 bg-white z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 flex items-center justify-center bg-white"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center px-8"
        >
          {/* ICASS Logo */}
          <div className="mb-8">
            <Image
              src="/images/logo.png"
              alt="ICASS 2026 Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          
          {/* Event Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
          >
            ICASS 2026
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-600 mb-8"
          >
            International Conference on Intelligent Computing
          </motion.p>

          {/* Loading spinner with gradient colors */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-8 border-4 border-transparent rounded-full mx-auto"
            style={{
              borderTopColor: '#1e4ba9',
              borderRightColor: '#9a3a3d',
              borderBottomColor: '#b12a2e'
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
