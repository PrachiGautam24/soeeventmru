'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, X, User } from 'lucide-react'

// --- Types (mirrors Supabase schema, swap with real fetch later) ---
type AchievementCategory = 'ACADEMIC' | 'RESEARCH' | 'SPORTS' | 'CULTURAL' | 'INNOVATION'

interface AchievementStudent {
  id: string
  name: string
  branch: string | null
  year_of_study: string | null
  description: string | null
  image_url: string | null
}

interface AchievementEvent {
  id: string
  title: string
  category: AchievementCategory
  year: number
  icon: string
  bg_color: string
  student_count: number
  is_featured: boolean
  students: AchievementStudent[]
}

// --- Fake data (replace with Supabase fetch when ready) ---
const achievementEvents: AchievementEvent[] = [
  {
    id: '1',
    title: 'NAAC A++ Accreditation',
    category: 'ACADEMIC',
    year: 2024,
    icon: '🎓',
    bg_color: 'bg-purple-100',
    student_count: 1,
    is_featured: true,
    students: [
      { id: 's1', name: 'Aryan Sharma', branch: 'CSE', year_of_study: '4th Year', description: 'Represented the department during NAAC peer team visit and showcased research projects.', image_url: null },
    ],
  },
  {
    id: '2',
    title: '₹4.5 Cr Research Grant',
    category: 'RESEARCH',
    year: 2024,
    icon: '🔬',
    bg_color: 'bg-teal-100',
    student_count: 2,
    is_featured: false,
    students: [
      { id: 's2', name: 'Priya Mehta', branch: 'ECE', year_of_study: 'M.Tech', description: 'Co-investigator on DST-funded project on IoT-based smart grid systems.', image_url: null },
      { id: 's3', name: 'Rohan Verma', branch: 'ME', year_of_study: 'M.Tech', description: 'Research on sustainable manufacturing processes under the funded grant.', image_url: null },
    ],
  },
  {
    id: '3',
    title: 'University Gold Medalists',
    category: 'ACADEMIC',
    year: 2023,
    icon: '🏅',
    bg_color: 'bg-purple-100',
    student_count: 4,
    is_featured: false,
    students: [
      { id: 's4', name: 'Sneha Gupta', branch: 'CSE', year_of_study: 'Graduated 2023', description: 'Gold medal for highest CGPA in B.Tech CSE batch 2023.', image_url: null },
      { id: 's5', name: 'Amit Yadav', branch: 'ECE', year_of_study: 'Graduated 2023', description: 'Gold medal for highest CGPA in B.Tech ECE batch 2023.', image_url: null },
      { id: 's6', name: 'Kavya Nair', branch: 'ME', year_of_study: 'Graduated 2023', description: 'Gold medal for highest CGPA in B.Tech ME batch 2023.', image_url: null },
      { id: 's7', name: 'Dev Patel', branch: 'IE', year_of_study: 'Graduated 2023', description: 'Gold medal for highest CGPA in B.Tech IE batch 2023.', image_url: null },
    ],
  },
  {
    id: '4',
    title: 'Inter-University Football Champions',
    category: 'SPORTS',
    year: 2024,
    icon: '⚽',
    bg_color: 'bg-yellow-100',
    student_count: 5,
    is_featured: false,
    students: [
      { id: 's8', name: 'Rahul Singh', branch: 'CSE', year_of_study: '3rd Year', description: 'Team captain, led the squad to the inter-university championship title.', image_url: null },
      { id: 's9', name: 'Nikhil Joshi', branch: 'ME', year_of_study: '2nd Year', description: 'Top scorer of the tournament with 7 goals.', image_url: null },
      { id: 's10', name: 'Aakash Tomar', branch: 'ECE', year_of_study: '3rd Year', description: 'Best goalkeeper award winner.', image_url: null },
      { id: 's11', name: 'Siddharth Rao', branch: 'CSE', year_of_study: '4th Year', description: 'Midfielder, key player in the semi-final match.', image_url: null },
      { id: 's12', name: 'Manish Kumar', branch: 'IE', year_of_study: '2nd Year', description: 'Defender, maintained a clean sheet in 3 matches.', image_url: null },
    ],
  },
  {
    id: '5',
    title: 'Smart India Hackathon Winners',
    category: 'INNOVATION',
    year: 2024,
    icon: '💡',
    bg_color: 'bg-orange-100',
    student_count: 3,
    is_featured: true,
    students: [
      { id: 's13', name: 'Tanvi Agarwal', branch: 'CSE', year_of_study: '3rd Year', description: 'Team lead, built an AI-based crop disease detection system.', image_url: null },
      { id: 's14', name: 'Harsh Mishra', branch: 'CSE', year_of_study: '3rd Year', description: 'Backend developer for the winning SIH project.', image_url: null },
      { id: 's15', name: 'Pooja Sharma', branch: 'ECE', year_of_study: '3rd Year', description: 'Hardware integration specialist for the IoT component.', image_url: null },
    ],
  },
  {
    id: '6',
    title: 'National Cultural Fest Champions',
    category: 'CULTURAL',
    year: 2023,
    icon: '🎭',
    bg_color: 'bg-pink-100',
    student_count: 2,
    is_featured: false,
    students: [
      { id: 's16', name: 'Ishaan Kapoor', branch: 'ME', year_of_study: '2nd Year', description: 'Won first place in solo dance at Mood Indigo, IIT Bombay.', image_url: null },
      { id: 's17', name: 'Riya Bhatia', branch: 'CSE', year_of_study: '3rd Year', description: 'Best actress award at Rendezvous, IIT Delhi.', image_url: null },
    ],
  },
]

const categoryColors: Record<AchievementCategory, string> = {
  ACADEMIC: 'text-purple-600 bg-purple-100',
  RESEARCH: 'text-teal-600 bg-teal-100',
  SPORTS: 'text-yellow-600 bg-yellow-100',
  CULTURAL: 'text-pink-600 bg-pink-100',
  INNOVATION: 'text-orange-600 bg-orange-100',
}

// --- Student detail modal ---
function StudentModal({ event, onClose }: { event: AchievementEvent; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 px-0"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="w-full max-w-md bg-white rounded-t-3xl max-h-[80vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-neutral-300" />
        </div>

        {/* Header */}
        <div className="px-5 pt-3 pb-4 border-b border-neutral-100">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl ${event.bg_color} flex items-center justify-center text-2xl shrink-0`}>
                {event.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[event.category]}`}>{event.category}</span>
                  <span className="text-xs text-neutral-400">{event.year}</span>
                </div>
                <h2 className="font-bold text-gray-900 text-base leading-tight">{event.title}</h2>
              </div>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-full bg-neutral-100 shrink-0">
              <X className="w-4 h-4 text-neutral-500" />
            </button>
          </div>
        </div>

        {/* Students list */}
        <div className="px-5 py-4 space-y-3">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">{event.student_count} Student{event.student_count > 1 ? 's' : ''} Recognized</p>
          {event.students.map((student, i) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 bg-neutral-50 rounded-2xl p-4 border border-neutral-100"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center shrink-0">
                {student.image_url
                  ? <img src={student.image_url} alt={student.name} className="w-10 h-10 rounded-full object-cover" />
                  : <User className="w-5 h-5 text-neutral-400" />
                }
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 text-sm">{student.name}</p>
                {(student.branch || student.year_of_study) && (
                  <p className="text-xs text-neutral-500 mt-0.5">{[student.branch, student.year_of_study].filter(Boolean).join(' · ')}</p>
                )}
                {student.description && (
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">{student.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="h-6" />
      </motion.div>
    </motion.div>
  )
}

// --- Main component ---
export default function AchievementsSection() {
  const [selected, setSelected] = useState<AchievementEvent | null>(null)

  return (
    <div className="px-4 py-5 bg-white">
      <div className="space-y-3">
        {achievementEvents.map((event, i) => (
          <motion.button
            key={event.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setSelected(event)}
            className="w-full text-left bg-white rounded-2xl border border-neutral-200 p-4 flex items-center gap-4 active:scale-[0.98] transition-transform"
          >
            {/* Icon */}
            <div className={`w-14 h-14 rounded-2xl ${event.bg_color} flex items-center justify-center text-2xl shrink-0`}>
              {event.icon}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[event.category]}`}>{event.category}</span>
                <span className="text-xs text-neutral-400">{event.year}</span>
                {event.is_featured && (
                  <span className="flex items-center gap-1 text-xs font-medium text-pink-500 bg-pink-50 px-2 py-0.5 rounded-full">
                    <Star className="w-3 h-3 fill-pink-400 text-pink-400" /> Featured
                  </span>
                )}
              </div>
              <p className="font-bold text-gray-900 text-sm leading-snug">{event.title}</p>
              <p className="text-xs text-neutral-500 mt-0.5">{event.student_count} Student{event.student_count > 1 ? 's' : ''} Recognized</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && <StudentModal event={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  )
}
