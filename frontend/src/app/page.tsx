'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SplashPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home')
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
        className="absolute inset-0 flex items-center justify-center bg-white"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center px-8"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <Image
              src="/images/soe-events-logo.jpg"
              alt="School of Engineering - Manav Rachna University"
              width={200}
              height={200}
            />
            <Image
              src="/images/GPTW.jpg"
              alt="Great Place to Work"
              width={30}
              height={30}
            />
          </div>
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
