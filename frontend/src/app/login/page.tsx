'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Eye, EyeOff, ArrowLeft, Mail, Lock } from 'lucide-react'

export default function LoginPage() {
const router = useRouter()
const [email, setEmail] = useState('[demo@mru.edu.in](mailto:demo@mru.edu.in)')
const [password, setPassword] = useState('demo1234')
const [showPassword, setShowPassword] = useState(false)
const [loading, setLoading] = useState(false)
const [error, setError] = useState('')

const handleEmailLogin = async (e: React.FormEvent) => {
e.preventDefault()
setError('')


if (!email || !password) {
  setError('Please fill in all fields.')
  return
}

setLoading(true)

const res = await signIn('credentials', {
  email,
  password,
  redirect: false,
})

setLoading(false)

if (res?.error) {
  setError('Invalid email or password')
  return
}

router.push('/engage')


}

const handleGoogleLogin = () => {
signIn('google', { callbackUrl: '/engage' })
}

return (
<div
className="min-h-screen flex items-center justify-center"
style={{
background:
'linear-gradient(160deg, #c0392b 0%, #e74c3c 50%, #c0392b 100%)',
}}
> <div className="max-w-md w-full mx-auto min-h-screen flex flex-col relative z-10">

```
    {/* Header */}
    <div className="relative px-4 py-5 flex justify-center">
      <div className="flex justify-center flex-1">
        <Image
          src="https://manavrachna.edu.in/assets/images/mru-logo.png"
          alt="Manav Rachna University"
          width={200}
          height={128}
          priority
          className="object-contain brightness-0 invert"
        />
      </div>

      <button
        onClick={() => router.back()}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"
      >
        <ArrowLeft className="w-4 h-4 text-white" />
      </button>
    </div>

    {/* Card */}
    <div className="flex-1 flex flex-col mx-4 mb-4 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
      <div className="flex-1 flex flex-col px-7 py-8 gap-6">

        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500">
            Sign in to your SOE Events account
          </p>
        </div>

        {/* ✅ Demo Login Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-800">
          <p className="font-semibold mb-1">Demo Login</p>
          <p>Email: demo@mru.edu.in</p>
          <p>Password: demo1234</p>
        </div>

        {/* Form */}
        <form onSubmit={handleEmailLogin} className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase">
              Email
            </label>
            <div className="relative mt-1">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 rounded-xl border bg-neutral-50 text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-xs font-semibold text-gray-600 uppercase">
              Password
            </label>
            <div className="relative mt-1">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-10 pr-11 py-3.5 rounded-xl border bg-neutral-50 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-xs text-red-500 bg-red-50 px-4 py-2 rounded-xl">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-3.5 rounded-xl"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        {/* Divider */}
        <div className="text-center text-xs text-neutral-400">
          or continue with
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="w-full border rounded-xl py-3.5"
        >
          Continue with Google
        </button>

      </div>
    </div>
  </div>
</div>
)
}
