import Chatbot from '@/components/Chatbot'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MobileOnly from '@/components/MobileOnly'
import SessionProvider from '@/components/SessionProvider'
import BottomNav from '@/components/BottomNav'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'SOE EVENTS - Manav Rachna University',
  description: 'Official events platform for School of Engineering, Manav Rachna University. Discover upcoming conferences, workshops, and academic events.',
  keywords: ['SOE Events', 'Manav Rachna University', 'School of Engineering', 'Conferences', 'ICASS 2026', 'Academic Events'],
  authors: [{ name: 'Manav Rachna University' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1E3A8A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <SessionProvider>
          <MobileOnly>
            {children}
            <BottomNav />
            <Chatbot />
          </MobileOnly>
        </SessionProvider>
      </body>
    </html>
  )
}
