'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Eye, EyeOff, ArrowLeft, Mail, Lock } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Placeholder — wire up to your backend when ready
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }
    setLoading(true)
    // TODO: replace with real credentials sign-in
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setError('Email/password login is not yet configured.')
  }

  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: '/home' })
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto min-h-screen bg-white shadow-xl flex flex-col">

        {/* Header */}
        <div className="relative bg-white overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <button
              onClick={() => router.back()}
              className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center"
              aria-label="Go back"
            >
              <ArrowLeft className="w-4 h-4 text-gray-700" />
            </button>
            <Image
              src="/images/soe-events-logo.jpg"
              alt="SOE Events"
              width={140}
              height={45}
              priority
              className="object-contain"
            />
            <div className="w-9" />
          </div>
          <div className="h-5">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,30 Q720,100 1440,30 L1440,120 L0,120 Z" fill="#b12a2e" />
            </svg>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col px-7 py-8 gap-6">

          {/* Title */}
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-gray-800">Welcome back</h1>
            <p className="text-sm text-gray-500">Sign in to your SOE Events account</p>
          </div>

          {/* Email / Password form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-neutral-200 bg-neutral-50 text-sm text-gray-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full pl-10 pr-11 py-3.5 rounded-xl border border-neutral-200 bg-neutral-50 text-sm text-gray-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="flex justify-end">
              <button type="button" className="text-xs text-red-600 font-medium">
                Forgot password?
              </button>
            </div>

            {/* Error */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5"
              >
                {error}
              </motion.p>
            )}

            {/* Submit */}
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full bg-red-600 text-white font-semibold text-sm py-3.5 rounded-xl shadow-md disabled:opacity-60 transition-opacity"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in…
                </span>
              ) : (
                'Sign In'
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-neutral-200" />
            <span className="text-xs text-neutral-400 font-medium">or continue with</span>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          {/* Google button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.01 }}
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white border border-neutral-200 rounded-xl px-6 py-3.5 shadow-sm hover:shadow-md transition-shadow"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-semibold text-gray-700">Continue with Google</span>
          </motion.button>

          {/* Sign up nudge */}
          <p className="text-center text-xs text-neutral-400">
            Don&apos;t have an account?{' '}
            <button className="text-red-600 font-semibold">Sign up</button>
          </p>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-neutral-100 text-center">
          <p className="text-[10px] text-neutral-400">
            © {new Date().getFullYear()} Manav Rachna University · School of Engineering
          </p>
        </div>
      </div>
    </div>
  )
}
