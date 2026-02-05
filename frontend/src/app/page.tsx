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
            className="absolute inset-0 flex items-center justify-center bg-white"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center px-8"
            >
              {/* SOE Logo */}
              <div className="mb-8">
                <Image
                  src="/images/soe-events-logo.jpg"
                  alt="School of Engineering - Manav Rachna University"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
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
        )}
      </AnimatePresence>
    </div>
  )
}
