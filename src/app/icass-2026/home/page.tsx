'use client'

import AppLayout from '@/components/AppLayout'
import HeroSection from '@/components/home/HeroSection'
import QuickActions from '@/components/home/QuickActions'
import AboutSection from '@/components/home/AboutSection'

export default function HomePage() {
  return (
    <AppLayout>
      <div className="min-h-screen">
        {/* Hero Banner */}
        <HeroSection />

        {/* Quick Action Buttons */}
        <QuickActions />

        {/* About Conference */}
        <AboutSection />
      </div>
    </AppLayout>
  )
}
