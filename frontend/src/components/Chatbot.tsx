'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { MessageCircle, X, Send, Mic } from 'lucide-react'
import { chatbotKnowledge } from '@/lib/chatbotknowledge'
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
      text: 'Hi! I am SOE Voice Assistant. You can type or speak your query.',
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
    const text = msg.toLowerCase()

    if (text.includes('ece')) {
      if (text.includes('event')) {
        return `${chatbotKnowledge.schools.ece.name}

Events:
${chatbotKnowledge.schools.ece.events.join('\n')}`
      }

      return `${chatbotKnowledge.schools.ece.name}

Student Achievements:
${chatbotKnowledge.schools.ece.studentAchievements.join('\n')}`
    }

    if (text.includes('law')) {
      if (text.includes('faculty')) {
        return `${chatbotKnowledge.schools.law.name}

Faculty Achievements:
${chatbotKnowledge.schools.law.facultyAchievements}`
      }

      return `${chatbotKnowledge.schools.law.name}

Student Achievements:
${chatbotKnowledge.schools.law.studentAchievements.join('\n')}`
    }

    if (text.includes('science')) {
      if (text.includes('course')) {
        return `${chatbotKnowledge.schools.sciences.name}

Courses:
${chatbotKnowledge.schools.sciences.valueAddedCourses.join('\n')}`
      }

      if (text.includes('event')) {
        return `${chatbotKnowledge.schools.sciences.name}

Events:
${chatbotKnowledge.schools.sciences.upcomingEvents.join('\n')}`
      }

      return chatbotKnowledge.schools.sciences.highlights
    }

    if (text.includes('event')) {
      router.push('/events')

      return `Opening Events page.

On this page, you can explore upcoming and completed events organized at MRU, including event title, date, location and detailed descriptions.`
    }

    if (text.includes('department') || text.includes('program')) {
      router.push('/departments')

      const totalDepartments = schools.reduce(
        (total, school) => total + school.departments.length,
        0
      )

      return `Opening Departments page.

This page lists all departments and schools. You can search programs, departments and school-wise courses.

There are ${totalDepartments} departments altogether.`
    }

    if (text.includes('hostel')) {
      router.push('/fresher/hostel')
      return 'Opening Hostel page.'
    }

    if (text.includes('icass')) {
      router.push('/icass-2026')
      return 'Opening ICASS page.'
    }

    if (
      text.includes('manav rachna') ||
      text.includes('mru') ||
      text.includes('university')
    ) {
      return `Manav Rachna University (MRU), located in Faridabad, Haryana, is a leading private state university established in 2014 (formerly MRCE).

It is known for programs in engineering, law, management and research, with a 127-acre campus and strong research clusters.

In global rankings, MRU is placed in the 1501+ bracket in the Times Higher Education World University Rankings 2026.`
    }

    return 'Try asking about ECE, Law, Science, Events, Departments, Hostel, ICASS or Manav Rachna University.'
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