'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function SplashPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)

  useEffect(() => {
    // Step 1: Logo splash (2 seconds)
    const timer1 = setTimeout(() => {
      setStep(2)
    }, 2000)

    // Step 2: QS-like splash (2 seconds)
    const timer2 = setTimeout(() => {
      setStep(3)
    }, 4000)

    // Step 3: Welcome loading (2 seconds)
    const timer3 = setTimeout(() => {
      setStep(4)
    }, 6000)

    // Step 4: Poster screen (3 seconds)
    const timer4 = setTimeout(() => {
      router.push('/home')
    }, 9000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [router])

  return (
    <div className="fixed inset-0 bg-white z-50">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-primary"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h1 className="text-6xl font-bold text-primary mb-2">ICASS</h1>
                <p className="text-xl text-gray-600">2026</p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="qs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #F59E0B 0%, #EA580C 50%, #3B82F6 100%)'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-white rounded-3xl p-12 shadow-2xl">
                <h1 className="text-7xl font-bold text-accent-yellow mb-4">ICASS</h1>
                <p className="text-2xl font-semibold text-gray-700">MRU</p>
                <p className="text-2xl font-semibold text-gray-700">2026</p>
              </div>
              {/* Decorative dots */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                      width: Math.random() * 20 + 10,
                      height: Math.random() * 20 + 10,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: Math.random() * 2 + 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

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

        {step === 4 && (
          <motion.div
            key="poster"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-white p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              {/* Conference Poster */}
              <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-8 shadow-2xl">
                {/* Header */}
                <div className="bg-white rounded-2xl p-4 mb-6 flex items-center justify-between">
                  <div className="bg-accent-yellow rounded-xl p-3">
                    <h3 className="text-2xl font-bold text-white">ICASS</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600">Under the patronage of</p>
                    <p className="text-xs font-semibold text-gray-800">Ministry of Education</p>
                    <p className="text-xs text-gray-600">Government of India</p>
                  </div>
                </div>

                {/* Main Content */}
                <div className="text-white space-y-4">
                  <h1 className="text-5xl font-bold leading-tight">
                    INDIA<br />SUMMIT<br />2026
                  </h1>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 space-y-2">
                    <p className="text-sm">1-3 February | Taj Cidade de Goa Horizon, Goa, India</p>
                    <p className="text-sm font-semibold">
                      India@2047: Building Skills, Achieving Scale,<br />Driving Innovation
                    </p>
                  </div>

                  {/* Organizers */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="text-xs">
                      <p className="font-bold">DPU</p>
                      <p className="text-[10px]">Dr. D. Y. Patil<br />Vidyapeeth<br />PIMPRI, PUNE</p>
                    </div>
                    <div className="text-xs text-center">
                      <p className="font-bold">SRM</p>
                      <p className="text-[10px]">INSTITUTE OF SCIENCE & TECHNOLOGY</p>
                    </div>
                  </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-400 rounded-full -mr-24 -mb-24 opacity-50" />
                <div className="absolute top-1/2 left-0 w-32 h-32 bg-orange-400 rounded-full -ml-16 opacity-50" />
              </div>

              <p className="text-center text-gray-500 mt-4 text-sm">
                Loading your conference experience...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
