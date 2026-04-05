'use client'

import { useState } from 'react'
import AppLayout from '@/components/AppLayout'
// import { supabase } from '@/lib/supabase'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function AttendancePage() {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      setError('Please enter your full name')
      return
    }

    // Simulate attendance marking without database
    setLoading(true)
    setError('')

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      setSuccess(true)
      setName('')

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    } catch (err) {
      console.error('Error marking attendance:', err)
      setError('Failed to mark attendance. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/icass-2026/home">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Mark Attendance</h1>
        </div>
      </div>

      {/* Content */}
      <div className="bg-neutral-50 min-h-screen px-4 py-6 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-md max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-xl font-bold text-neutral-800 mb-2">
              Welcome to ICASS 2026
            </h2>
            <p className="text-sm text-neutral-600">
              Please mark your presence for the conference
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-semibold text-neutral-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-neutral-800"
                disabled={loading}
              />
            </div>

            {error && (
              <div className="bg-secondary/10 border border-secondary text-secondary-dark px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-500 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">
                  Thanks for Joining us !!
                </span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading || !name.trim()}
              className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  <span>Marking...</span>
                </div>
              ) : (
                'Mark My Presence'
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-neutral-200">
            <p className="text-xs text-neutral-500 text-center">
              Your attendance will be recorded with a timestamp
            </p>
          </div>
        </motion.div>
      </div>
    </AppLayout>
  )
}
