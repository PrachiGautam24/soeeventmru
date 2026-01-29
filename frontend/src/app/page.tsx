'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function SplashPage() {
  const router = useRouter()
  const [step, setStep] = useState(3) // Start from loading screen

  useEffect(() => {
    // Welcome loading screen (2 seconds) then navigate to home
    const timer = setTimeout(() => {
      router.push('/home')
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [router])

  return (
    <div className="fixed inset-0 bg-white z-50">
      <AnimatePresence mode="wait">
        {step === 3 && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-mixed"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center px-8"
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                Welcome to ICASS 2026
              </h2>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
