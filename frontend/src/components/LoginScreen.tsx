'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LoginScreen() {
  const [email, setEmail] = useState('demo@mru.edu.in')
  const [password, setPassword] = useState('demo1234')
  const [error, setError] = useState('')

  const handleEmailLogin = async () => {
    setError('')

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/engage/learning',
    })

    if (res?.error) {
      setError('Invalid email or password')
      return
    }

    window.location.href = '/engage/learning'
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto min-h-screen bg-white shadow-xl flex flex-col">

        <div className="relative bg-white overflow-hidden">
          <div className="flex items-center justify-center gap-4 px-6 py-6">
            <Image
              src="/images/soe-events-logo.jpg"
              alt="School of Engineering"
              width={200}
              height={65}
              priority
              className="object-contain"
            />
            <Image
              src="https://manavrachna.edu.in/assets/images/mru-logo.png"
              alt="MRU Logo"
              width={80}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 py-10 gap-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome back</h1>
            <p className="text-sm text-gray-500 mt-1">Sign in to your SOE Events account</p>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500">EMAIL</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full border rounded-xl px-4 py-3 text-gray-800"
              placeholder="demo@mru.edu.in"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500">PASSWORD</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="mt-2 w-full border rounded-xl px-4 py-3 text-gray-800"
              placeholder="demo1234"
            />
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            onClick={handleEmailLogin}
            className="w-full bg-red-600 text-white rounded-xl py-3 font-bold shadow-md"
          >
            Sign In
          </button>

          <div className="flex items-center gap-3">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-xs text-gray-400">or continue with</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => signIn('google', { callbackUrl: '/home' })}
            className="w-full flex items-center justify-center gap-3 bg-white border border-neutral-200 rounded-2xl px-6 py-4 shadow-md"
          >
            <span className="text-sm font-semibold text-gray-700">Continue with Google</span>
          </motion.button>
        </div>
      </div>
    </div>
  )
}