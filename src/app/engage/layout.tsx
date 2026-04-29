import { ReactNode } from 'react'
import { MeProvider } from '@/components/engage/MeProvider'
import { XpToastProvider } from '@/components/engage/XpToast'

export const metadata = {
  title: 'Engage — SOE MRU',
  description: 'Daily challenges, quizzes, polls, leaderboards and rewards for MRU students.',
}

export default function EngageLayout({ children }: { children: ReactNode }) {
  return (
    <XpToastProvider>
      <MeProvider>
        <div className="min-h-screen bg-neutral-50 pb-24">
          <div className="max-w-md mx-auto">{children}</div>
        </div>
      </MeProvider>
    </XpToastProvider>
  )
}
