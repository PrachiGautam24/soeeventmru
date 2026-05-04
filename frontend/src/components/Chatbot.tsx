'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { MessageCircle, X, Send, Mic } from 'lucide-react'
import { schools } from '@/lib/schools'

type Message = {
  role: 'user' | 'bot'
  text: string
}

type SpeechRecognitionResultEvent = {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string
      }
    }
  }
}

type SpeechRecognitionInstance = {
  lang: string
  continuous: boolean
  interimResults: boolean
  start: () => void
  onresult: ((event: SpeechRecognitionResultEvent) => void) | null
  onerror: (() => void) | null
  onend: (() => void) | null
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance

type WindowWithSpeechRecognition = Window & {
  SpeechRecognition?: SpeechRecognitionConstructor
  webkitSpeechRecognition?: SpeechRecognitionConstructor
}

export default function Chatbot() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isListening, setIsListening] = useState(false)

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text:
        'Hi! I am SOE Voice Assistant. Ask me to open departments, learning pathways, leaderboard, events, campus life, hostel, ICASS, placements, awards, or any school/department.',
    },
  ])

  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (!open && typeof window !== 'undefined') {
      window.speechSynthesis.cancel()
    }
  }, [open])

  const handleClose = () => {
    setOpen(false)

    if (typeof window !== 'undefined') {
      window.speechSynthesis.cancel()
    }
  }

  const speak = (text: string) => {
    if (typeof window === 'undefined') return

    window.speechSynthesis.cancel()

    const speech = new SpeechSynthesisUtterance(text)
    speech.lang = 'en-IN'
    speech.rate = 0.95

    window.speechSynthesis.speak(speech)
  }

  const handleVoiceInput = () => {
    if (typeof window === 'undefined') return

    const speechWindow = window as WindowWithSpeechRecognition

    const SpeechRecognition =
      speechWindow.SpeechRecognition || speechWindow.webkitSpeechRecognition

    if (!SpeechRecognition) {
      alert('Use Chrome or Edge browser for voice support')
      return
    }

    const recognition = new SpeechRecognition()

    recognition.lang = 'en-IN'
    recognition.continuous = false
    recognition.interimResults = false

    setIsListening(true)
    recognition.start()

    recognition.onresult = (event: SpeechRecognitionResultEvent) => {
      const transcript = event.results[0][0].transcript

      setMessages(prev => [...prev, { role: 'user', text: transcript }])

      const reply = getBotReply(transcript)

      setMessages(prev => [...prev, { role: 'bot', text: reply }])

      speak(reply)
      setIsListening(false)
    }

    recognition.onerror = () => {
      setIsListening(false)
      alert('Voice recognition failed. Try again.')
    }

    recognition.onend = () => {
      setIsListening(false)
    }
  }

  const getBotReply = (msg: string) => {
    const text = msg.toLowerCase().trim()

    const go = (path: string, reply: string) => {
      router.push(path)
      return reply
    }

    // Main navigation
    if (text.includes('home') || text.includes('main page')) {
      return go('/home', 'Opening Home page.')
    }

    if (text.includes('event') || text.includes('events')) {
      return go('/events', 'Opening Events page.')
    }

    if (
      text.includes('department') ||
      text.includes('departments') ||
      text.includes('program') ||
      text.includes('programs')
    ) {
      return go('/departments', 'Opening Departments page.')
    }

    if (text.includes('profile') || text.includes('my account') || text.includes('account')) {
      return go('/profile', 'Opening Profile page.')
    }

    if (text.includes('quick')) {
      return go('/quick-links', 'Opening Quick Links page.')
    }

    if (text.includes('login')) {
      return go('/login', 'Opening Login page.')
    }

    // SOE Engage
    if (
      text.includes('learning pathway') ||
      text.includes('learning pathways') ||
      text.includes('linkedin') ||
      text.includes('course') ||
      text.includes('courses') ||
      text.includes('badge') ||
      text.includes('badges')
    ) {
      return go('/engage/learning', 'Opening Learning Pathways.')
    }

    if (text.includes('e-learning') || text.includes('elearning')) {
      return go('/engage', 'Opening SOE Engage platform.')
    }

    if (text.includes('leaderboard') || text.includes('rank') || text.includes('ranking')) {
      return go('/engage/leaderboard', 'Opening Leaderboard.')
    }

    if (text.includes('challenge') || text.includes('challenges') || text.includes('quest')) {
      return go('/engage/challenges', 'Opening Quests and Challenges.')
    }

    if (text.includes('quiz')) {
      return go('/engage/polls', 'Opening Quiz section.')
    }

    if (text.includes('poll')) {
      return go('/engage/polls', 'Opening Polls section.')
    }

    if (text.includes('feed') || text.includes('post') || text.includes('social')) {
      return go('/engage/feed', 'Opening Feed page.')
    }

    // Fresher / campus life
    if (text.includes('campus life')) {
      return go('/fresher', 'Opening Campus Life section.')
    }

    if (text.includes('hostel')) {
      return go('/fresher/hostel', 'Opening Hostel Information.')
    }

    if (text.includes('clan')) {
      return go('/fresher/clans', 'Opening Clans page.')
    }

    if (text.includes('academic calendar')) {
      return go('/fresher/academic-calendar', 'Opening Academic Calendar.')
    }

    if (text.includes('first day')) {
      return go('/fresher/first-day', 'Opening First Day guide.')
    }

    // ICASS
    if (text.includes('speaker')) {
      return go('/icass-2026/speakers', 'Opening ICASS Speakers.')
    }

    if (text.includes('schedule')) {
      return go('/icass-2026/schedule', 'Opening ICASS Schedule.')
    }

    if (text.includes('poster')) {
      return go('/icass-2026/poster-presentation', 'Opening Poster Presentation.')
    }

    if (text.includes('organiser') || text.includes('organizer')) {
      return go('/icass-2026/organisers', 'Opening ICASS Organisers.')
    }

    if (text.includes('patron')) {
      return go('/icass-2026/patrons', 'Opening ICASS Patrons.')
    }

    if (text.includes('location')) {
      return go('/icass-2026/location', 'Opening ICASS Location.')
    }

    if (text.includes('workshop')) {
      return go('/icass-2026/workshop', 'Opening ICASS Workshop.')
    }

    if (text.includes('icass')) {
      return go('/icass-2026', 'Opening ICASS 2026 page.')
    }

    // Home tabs / sections
    if (text.includes('functionary') || text.includes('functionaries') || text.includes('leadership')) {
      return go('/functionaries', 'Opening Functionaries page.')
    }

    if (text.includes('award') || text.includes('awards')) {
      return go('/home?tab=awards', 'Opening Awards section.')
    }

    if (text.includes('placement') || text.includes('placements')) {
      return go('/home?tab=placements', 'Opening Placements section.')
    }

    // Schools
    if (text.includes('school of engineering') || text.includes('soe')) {
      return go('/school/soe', 'Opening School of Engineering.')
    }

    if (text.includes('school of law') || text.includes('law')) {
      return go('/school/law', 'Opening School of Law.')
    }

    if (text.includes('school of education') || text.includes('education')) {
      return go('/school/education', 'Opening School of Education.')
    }

    if (text.includes('school of business') || text.includes('business')) {
      return go('/school/business', 'Opening School of Business.')
    }

    if (text.includes('school of science') || text.includes('science')) {
      return go('/school/science', 'Opening School of Science.')
    }

    // Dynamic school match from schools.ts
    const matchedSchool = schools.find(
      school =>
        text.includes(school.name.toLowerCase()) ||
        text.includes(school.id.toLowerCase())
    )

    if (matchedSchool) {
      return go(`/school/${matchedSchool.id}`, `Opening ${matchedSchool.name}.`)
    }

    // Dynamic department match from schools.ts
    for (const school of schools) {
      const matchedDept = school.departments.find(
        dept =>
          text.includes(dept.name.toLowerCase()) ||
          text.includes(dept.code.toLowerCase()) ||
          text.includes(dept.id.toLowerCase())
      )

      if (matchedDept) {
        return go(
          `/school/${school.id}/${matchedDept.id}`,
          `Opening ${matchedDept.name} department.`
        )
      }
    }

    // Info only
    if (text.includes('xp') || text.includes('points')) {
      return 'XP means experience points. Students can earn XP through courses, challenges, quizzes, polls, events and feed activities.'
    }

    if (
      text.includes('manav rachna') ||
      text.includes('mru') ||
      text.includes('university')
    ) {
      return 'Manav Rachna University is a leading private university in Faridabad. You can ask me to open departments, events, learning pathways, placements, awards, campus life or ICASS.'
    }

    return `I can help you navigate the app.

Try:
• Open departments
• Open learning pathways
• Open leaderboard
• Open placements
• Open awards
• Open campus life
• Open hostel
• Open ICASS
• Open CSE department
• Open School of Law`
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg = input.trim()
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setInput('')

    setTimeout(() => {
      const reply = getBotReply(userMsg)

      setMessages(prev => [...prev, { role: 'bot', text: reply }])

      speak(reply)
    }, 300)
  }

  return (
    <>
      <button
        onClick={() => setOpen(prev => !prev)}
        className="fixed bottom-20 right-4 z-50 bg-blue-700 text-white p-4 rounded-full shadow-lg"
        aria-label="Open chatbot"
      >
        <MessageCircle size={24} />
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 z-50 w-[320px] h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col">
          <div className="bg-blue-700 text-white p-3 flex justify-between items-center">
            <h3>SOE Assistant</h3>
            <button onClick={handleClose} aria-label="Close chatbot">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[85%] whitespace-pre-line ${
                  msg.role === 'user'
                    ? 'bg-blue-100 ml-auto text-gray-900'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {msg.text}
              </div>
            ))}

            <div ref={bottomRef} />
          </div>

          <div className="p-2 flex gap-2 border-t">
            <button
              onClick={handleVoiceInput}
              className={isListening ? 'text-red-600' : 'text-gray-700'}
              aria-label="Voice input"
            >
              <Mic />
            </button>

            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              className="flex-1 border px-2 text-gray-800"
              placeholder={isListening ? 'Listening...' : 'Ask...'}
            />

            <button onClick={handleSend} aria-label="Send message">
              <Send />
            </button>
          </div>
        </div>
      )}
    </>
  )
}