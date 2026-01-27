import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'ICASS 2026 - International Conference on Intelligent Computing',
  description: 'The 1st International Conference on Intelligent Computing and Automation for Sustainable Solutions at Manav Rachna University, February 12-13, 2026',
  keywords: ['ICASS 2026', 'Manav Rachna University', 'Conference', 'AI', 'Machine Learning', 'Sustainable Solutions'],
  authors: [{ name: 'Manav Rachna University' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#1E3A8A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}
