'use client'

import AppLayout from '@/components/AppLayout'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const supporters = [
  {
    id: 1,
    name: 'STPI',
    logo: '/supporters/stpi.png',
  },
  {
    id: 2,
    name: 'Grandeur',
    logo: '/supporters/grandeur.jpg',
  },
  {
    id: 3,
    name: 'OM Printers',
    logo: '/supporters/om-printers.png',
  },
  {
    id: 4,
    name: 'Sonepar',
    logo: '/supporters/sonepar.jpg',
  }
]

export default function SponsorsPage() {
  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/icass-2026/home">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Our Supporters</h1>
        </div>
        <p className="text-sm text-white/80">
          Thank you to our valued supporters
        </p>
      </div>

      {/* Supporters Grid */}
      <div className="bg-neutral-50 min-h-screen px-4 py-6 pt-32 flex justify-center items-center">
        <div className="w-full max-w-md">
          <div className="grid grid-cols-2 gap-4 mb-8">
            {supporters.map((supporter, index) => (
              <motion.div
                key={supporter.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="relative w-full h-40 bg-white flex items-center justify-center p-4">
                  <Image
                    src={supporter.logo}
                    alt={supporter.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4 bg-neutral-50">
                  <h3 className="text-center text-sm font-semibold text-neutral-800">
                    {supporter.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
