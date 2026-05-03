'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ChevronLeft, Filter } from 'lucide-react'
import { motion } from 'framer-motion'
import { schools } from '@/lib/schools'

// ─── CSE specific achievements ────────────────────────────────────────────────
const cseAchievements = [
  { name: 'Bhargavi Devapatla, Manas Jha, Manikanta Kancharla & Sankit Singhal', badge: '🥇', category: 'Hackathon', title: '1st Place — Code Sangam, SGT University (Feb 2024)', desc: '36-hour hackathon with 3 rounds. Won ₹15,000 prize.' },
  { name: 'Bhargavi Devapatla', badge: '🥉', category: 'Competition', title: '3rd Prize — Altair Data Science Contest, E-Summit\'25 (IIITDM Kancheepuram)', desc: 'Under guidance of Dr. Mamta Arora. Showcased exceptional skills in data science and analytics.' },
  { name: 'Bhargavi Devapatla & Manikanta Kancharla', badge: '🏆', category: 'Hackathon', title: 'Top 6 — SOLVE-A-THON', desc: 'Reached Top 6 teams. Demonstrated creativity, problem-solving, and collaboration skills.' },
  { name: 'Narapureddy Durga Prasad Reddy, Manikanta Kancharla, Dogga Pavan Sekhar & Kodati Sai Teja', badge: '🤖', category: 'Hackathon', title: 'Hackaccino 2024 — Bennett University', desc: 'Developed an ML-based chatbot for health management providing tailored wellness insights.' },
  { name: 'Bhargavi Devapatla', badge: '🧠', category: 'Research', title: 'Health Tech Innovations Fest — TinyLife: Fetal Segmentation', desc: 'Presented deep learning research on fetal brain tumor detection using CNN-based U-Net & SegNet architectures for early prenatal diagnosis.' },
  { name: 'Rishav, Harsh & Avdhesh (Team Bring Hope) — AIML 6th Sem', badge: '🥉', category: 'Competition', title: '3rd Place — Sociothon, IIT Roorkee (Feb 2024)', desc: 'Secured 3rd among ~500 participants at National Social Summit\'24. Guided by Dr. Parneeta, Dr. Yogita, Mr. Vijay Gill & Dr. J.P. Sharma.' },
  { name: 'Charu Goyal & Drishti Kemni', badge: '📄', category: 'Best Paper', title: 'Best Paper Award — ICICC24 (Feb 2024)', desc: '"Evaluation of ML Techniques for Personality Classification using Myers-Briggs Assessment" — 7th International Conference on Innovative Computing & Communication. Guided by Dr. Mrinal Pandey.' },
  { name: 'Team Shinchan — Harsh Bhardwaj, Swayam Arora, Chhaya Sharma & Khushboo Mehta', badge: '🥉', category: 'Hackathon', title: '3rd Prize — HackItUp 1.0, MRSDC MRI (Feb 2024)', desc: '12-hour hackathon. Team led by Harsh Bhardwaj (CSE4A).' },
  { name: 'Narapureddy Durga Prasad Reddy', badge: '🤝', category: 'Social', title: 'Volunteer — Faridabad Wheelchair Cricket Tournament (Mar 2024)', desc: 'Volunteered at Premier League 2.0 supported by Dr. O.P. Bhalla Foundation & Radio Manav Rachna.' },
  { name: 'Durga Prasad', badge: '🏅', category: 'Academic', title: 'Exceptional Performance Award — MR IMPACT Phase 1', desc: 'B.Tech CSE AIML 5th Semester. Facilitated for exceptional academic performance.' },
  { name: 'Jayram', badge: '🏐', category: 'Sports', title: '1st Position — Volleyball, 1st MREI Hostel Sports Tournament', desc: 'Achieved first position in Volleyball at the inaugural MREI Hostel Sports Tournament.' },
  { name: 'Kanan Arora & Poonam Biswas', badge: '🔬', category: 'Research', title: 'Becon 2024 — IIT Delhi (Research Quest & Inkshpire)', desc: 'Presented "Automated Plant Disease Detection using AI" at Research Quest. Poonam also participated in Inkshpire doodle-making competition.' },
  { name: 'Poonam Biswas, Kanan Arora & Mansi Gusian', badge: '🏏', category: 'Sports', title: 'Winners — Cricket, 10th MREI Girls Sports Meet (Feb 2024)', desc: 'Emerged victorious in cricket match at the 10th MREI Girls Sports Meet.' },
  { name: 'Shivani Sharma', badge: '🥇', category: 'Competition', title: '1st Place — Health Innovation Fest (40+ teams)', desc: '"Indoor Navigation for Visually Impaired Using Real-Time Object Detection" — leveraging AI for safer, accessible navigation.' },
]

// ─── ME specific student achievements ────────────────────────────────────────
const meAchievements = [
  { name: 'Vinay Kumar & Team', badge: '🥇', category: 'Competition', title: '1st Prize — E-Yantra, IIT Bombay', desc: '3rd year ME student won first prize with team at E-Yantra robotics competition, IIT Bombay.' },
  { name: 'Gurpreet Singh, Fateh Singh, Tushar Gupta & Tushar Sehgal', badge: '💰', category: 'Grant', title: 'CSR Funding ₹10,544 — E-Vehicle Startup', desc: 'Received CSR grant for E-vehicle startup under mentorship of Dr. J.P. Sharma.' },
  { name: 'Karan Khanjuja', badge: '⛳', category: 'Sports', title: 'FIA JCB Tournament Winner · PGTI Pro-AM Runner-Up', desc: 'Group winner at FIA JCB Tournament, Aravali Golf Club. Runner-up at PGTI Pro-AM Delhi NCR Golf Tournament.' },
  { name: 'Vikram Sharma & Yash Choudhary', badge: '🏋️', category: 'Sports', title: 'Bronze (93KG+) & Gold (74KG) — BOSM 2019, BITS', desc: 'Vikram won Bronze in Free Weight 93KG+; Yash won Gold under 74KG at BITS Open Sports Meet 2019.' },
  { name: 'Shivam Kumar', badge: '💃', category: 'Cultural', title: 'National Level Dance Competitions', desc: 'B.Tech ME student performed in multiple national level dance competitions.' },
  { name: 'Prateek Sachdeva & Rajendra Tiruwa', badge: '📄', category: 'Publication', title: 'Scopus Paper — "Jet Engine Mounting Bracket", MRU Feb 2022', desc: 'Published in Scopus-indexed conference organized by MRU.' },
  { name: 'Anshul Tripathi & Pritam', badge: '📄', category: 'Publication', title: 'Paper — "Carbon Fiber Composites", MRU Feb 2022', desc: 'Published at MRU conference, February 2022.' },
  { name: 'Sahil Thakur & Tushar Aggarwal', badge: '📄', category: 'Publication', title: 'Paper — "Structural Analysis of Iron Bridge", MRU Feb 2022', desc: 'Published at MRU conference, February 2022.' },
  { name: 'Mukesh Das', badge: '📄', category: 'Publication', title: 'Paper — Occupational Health Hazards in Sheet Metal Industry (REBA & RULA)', desc: 'Published at MRU conference, February 2022.' },
  { name: 'Dheeraj Malik, Mohd. Tariq Saifi & Ankit Sharma', badge: '🥉', category: 'Competition', title: '3rd Prize — Anveshan 2019–20 North Zone · Selected for Nationals', desc: 'Won 3rd prize in Engineering & Technology category at North Zone Anveshan 2019–20.' },
  { name: 'Himanshu Garg', badge: '📄', category: 'Publication', title: '2 International Conference Papers + Lecture Notes in ME, Springer (2019 batch)', desc: 'Published 2 papers in international conferences and 1 in Lecture Notes in Mechanical Engineering, Springer. Received Outstanding Achievement Award in Research.' },
  { name: 'Somesh S', badge: '📄', category: 'Publication', title: '2 Papers in International Peer-Reviewed Journals (2020 batch)', desc: 'Published 2 papers including at NHTSEE2017, YMCA Faridabad (Mar 9–10, 2017).' },
  { name: 'ME Team', badge: '🥉', category: 'Competition', title: '3rd Prize — Anveshan 19–20 North Zone (Geothermal Energy Project)', desc: '"Use of Geothermal Energy for Cooling & Heat Transfer" — 3rd prize at Student Research Convention, North Zone.' },
  { name: 'Karan Sehgal', badge: '💰', category: 'Grant', title: 'AICTE New Gen IEDC Grant ₹2.5 Lakhs — Electric Tractor', desc: '2019 batch ME student. Electric Tractor project sanctioned by AICTE-sponsored New Gen IEDC with ₹2.5 lakh grant.' },
]

// ─── R&A specific achievements ────────────────────────────────────────────────
const raAchievements = [
  { name: 'Dev Dixit', badge: '🥇', category: 'NPTEL', title: 'Elite + Gold — Top 2% · IPR & Competition Law', desc: 'Scored 91% in 8-week SWAYAM-NPTEL course, ranking in top 2% of all scorers.' },
  { name: 'Ujjawal Arora', badge: '🥈', category: 'NPTEL', title: 'Elite + Silver — IPR & Competition Law', desc: 'Scored 76% in 8-week SWAYAM-NPTEL course, earning Elite + Silver Certification.' },
  { name: 'Ujjawal Arora & Nitin Kumar (Team Sankat Mochan)', badge: '🏆', category: 'Competition', title: '1st Position — Tech Showcase 2.0, MRU (Mar 2025)', desc: 'Won first place in Tech Showcase 2.0 organized by ECE Dept, MRU on 24 March 2025. Awarded Certificate of Achievement and winner\'s trophy.' },
  { name: 'Nitin Kumar', badge: '📄', category: 'Publication', title: 'Paper at IEEE SCEECS 2025, MANIT Bhopal', desc: '"Dynamic Equilibrium in Robotics: Techniques and Applications for Self-Balancing Robots" — IEEE International Conference, Jan 18–19, 2025.' },
  { name: 'Satvik Asthana', badge: '📄', category: 'Publication', title: 'Paper at COM-IT-CON-2025 (Taylor & Francis)', desc: '"A Roadside Garbage Detection System using Image Processing" — International Conference, Oct 24–25, 2024. Published with Taylor & Francis.' },
  { name: 'Harshil Aron', badge: '🎓', category: 'Academic', title: 'Dean\'s List — B.Tech R&AI, 6th Semester', desc: 'Recognized for exceptional academic excellence and consistent dedication to learning.' },
  { name: 'Parth Dua, Shivam Gupta, Riya Bansal & Neha Mendiratta', badge: '💼', category: 'Internship', title: 'Paid Internship — DAC Aviation', desc: 'Final year batch (2022–26) securing paid internships at DAC Aviation.' },
  { name: 'Shashank Singh & Gaurvi Khatri', badge: '💼', category: 'Internship', title: 'Paid Internship — Dr. Herald Innovations, Bhiwadi', desc: 'Final year batch (2022–26) undertaking paid internships at Dr. Herald Innovations.' },
  { name: 'Lakshay Bhadana & Jai Tewatia', badge: '💼', category: 'Internship', title: 'Internship — Urban Dienst', desc: 'Final year batch (2022–26) pursuing internship at Urban Dienst.' },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Competition': { bg: '#fde8e8', text: '#b12a2e' },
  'Award':       { bg: '#fef3e2', text: '#b45309' },
  'Publication': { bg: '#f3eeff', text: '#7c3aed' },
  'Internship':  { bg: '#e8edf8', text: '#1e4ba9' },
  'NPTEL':       { bg: '#e8f5ee', text: '#16a34a' },
  'Academic':    { bg: '#fef3e2', text: '#b45309' },
  'Hackathon':   { bg: '#fde8e8', text: '#b12a2e' },
  'Research':    { bg: '#f3eeff', text: '#7c3aed' },
  'Best Paper':  { bg: '#e8f5ee', text: '#16a34a' },
  'Social':      { bg: '#e8edf8', text: '#1e4ba9' },
  'Sports':      { bg: '#e8f5ee', text: '#16a34a' },
  'Cultural':    { bg: '#f3eeff', text: '#7c3aed' },
  'Grant':       { bg: '#e8edf8', text: '#1e4ba9' },
  'MUN':         { bg: '#f3eeff', text: '#7c3aed' },
}

export default function StudentAchievementsPage() {
  const router = useRouter()
  const { id, dept } = useParams<{ id: string; dept: string }>()
  const [activeFilter, setActiveFilter] = useState('All')

  const school = schools.find(s => s.id === id)
  const department = school?.departments.find(d => d.id === dept)

  // Use dept-specific hardcoded data for CSE/ME/RA, otherwise fall back to schools.ts data (e.g. ECE)
  const achievements = dept === 'ra' ? raAchievements : dept === 'cse' ? cseAchievements : dept === 'me' ? meAchievements : (department?.studentAchievements ?? [])

  // Build filter list from available categories
  const categories = ['All', ...Array.from(new Set(achievements.map(a => a.category)))]
  const filtered = activeFilter === 'All' ? achievements : achievements.filter(a => a.category === activeFilter)

  if (!school || !department) return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <p className="text-neutral-400">Department not found.</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative bg-secondary overflow-hidden">
          <button onClick={() => router.back()}
            className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <div className="text-3xl mb-1">🏅</div>
            <h1 className="font-bold text-white text-xl leading-tight">Student Achievements</h1>
            <p className="text-white/70 text-xs mt-1">{department.name} · {school.name}</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 px-4 py-5 space-y-3">
          {achievements.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-4xl mb-3">🏆</p>
              <p className="text-neutral-400 text-sm">Achievements coming soon</p>
            </div>
          ) : (
            <>
              {/* Filter chips */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <Filter className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                {categories.map(cat => (
                  <button key={cat} onClick={() => setActiveFilter(cat)}
                    className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeFilter === cat ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-500'
                    }`}>
                    {cat}
                  </button>
                ))}
              </div>

              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                {filtered.length} {activeFilter === 'All' ? 'Total' : activeFilter}
              </p>
              {filtered.map((a, i) => {
                const color = categoryColors[a.category] ?? { bg: '#f3f4f6', text: '#6b7280' }
                const photo = (a as { photo?: string }).photo
                const program = (a as { program?: string }).program
                return (
                  <motion.div key={i}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, type: 'spring', stiffness: 260, damping: 22 }}
                    className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden flex">
                    {photo && (
                      <div className="shrink-0 w-28 bg-neutral-100 flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={photo} alt={a.name} className="w-full h-auto object-contain" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0 px-3 py-3.5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                          style={{ backgroundColor: color.bg }}>
                          {a.badge}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="text-sm font-bold text-gray-800">{a.name}</p>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: color.bg, color: color.text }}>
                              {a.category}
                            </span>
                          </div>
                          {program && <p className="text-[11px] text-neutral-400 mt-0.5">{program}</p>}
                          <p className="text-xs font-semibold text-gray-700 mt-1.5 leading-snug">{a.title}</p>
                          <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{a.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
