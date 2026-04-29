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
        <div className="min-h-screen bg-neutral-50 pb-24 md:pb-10">
          <div className="mx-auto w-full max-w-md px-0 md:max-w-6xl md:px-6 lg:px-8">{children}</div>
        </div>
      </MeProvider>
    </XpToastProvider>
  )
}
