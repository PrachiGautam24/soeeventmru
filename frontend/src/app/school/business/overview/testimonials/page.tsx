'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Neetu Singh',
    program: 'MBA, Business Analytics | 2023–2025',
    role: 'Center Manager',
    company: 'T.I.M.E.',
    photo: '/images/business/testimonials/neetu-singh.jpg',
    quote: 'The MBA in Business Analytics has been a truly transformative experience. The program\'s innovative teaching approach, strong emphasis on practical learning, and hands-on exposure to industry-relevant tools made complex concepts easy to understand and apply. The engaging classroom environment, combined with continuous guidance and mentorship from the faculty, has significantly strengthened my analytical capabilities and prepared me to confidently tackle real-world business challenges.',
  },
  {
    name: 'Isha Mavi',
    program: 'MBA, Business Analytics | 2021–2023',
    role: 'HR Executive',
    company: 'Coforge',
    photo: '/images/business/testimonials/isha-mavi.jpg',
    quote: 'The MBA in Business Analytics offered a dynamic and enriching learning experience that went beyond traditional classroom teaching. The strong emphasis on hands-on learning and exposure to industry-relevant tools helped me develop a practical understanding of analytics. Opportunities such as industry visits, expert lectures, and various in-house events provided valuable real-world insights and enhanced my overall learning experience.',
  },
  {
    name: 'Ritish Kumar',
    program: 'MBA, Business Analytics | 2023–2025',
    role: 'Business Analyst',
    company: 'YBI Foundation',
    photo: '/images/business/testimonials/ritish-kumar.jpg',
    quote: 'MBA in Business Analytics has been a highly rewarding journey that equipped me with the ability to translate data into meaningful business insights. The program is thoughtfully designed to bridge the gap between analytical concepts and their real-world application, with a strong focus on tools, data interpretation, and decision-making.',
  },
  {
    name: 'Anshul Bhalla',
    program: 'MBA, Business Analytics | 2022–2024',
    role: 'Program Manager',
    company: 'PW (PhysicsWallah)',
    photo: '/images/business/testimonials/anshul-bhalla.jpg',
    quote: 'The MBA journey was highly enriching, with innovative teaching methods, interactive classrooms, and real-world case studies. The faculty\'s guidance and expertise made learning enjoyable and meaningful, helping me enhance my analytical, leadership, and decision-making skills.',
  },
  {
    name: 'Dr. Khushboo',
    program: 'PhD',
    role: 'Assistant Professor',
    company: 'Sheela Devi Institute of Management and Technology',
    photo: '/images/business/testimonials/dr-khushboo.jpg',
    quote: 'As a Ph.D. scholar of Manav Rachna University, my academic journey has been both enriching and transformative. The research-driven environment, combined with continuous guidance from highly experienced faculty, has significantly enhanced my analytical and critical thinking abilities.',
  },
  {
    name: 'Dr. Srilekh S.',
    program: 'PhD',
    role: 'Associate Consultant',
    company: 'Tata Consultancy Services',
    photo: '/images/business/testimonials/dr-srilekh.jpg',
    quote: 'The doctoral journey was both rigorous and rewarding. The research guidance, innovative methodologies, and interactive academic environment allowed me to explore new dimensions of knowledge. My PhD journey was one of perseverance, learning, and personal growth, made meaningful by the unwavering support of my guide.',
  },
  {
    name: 'Dr. Sonia Minocha',
    program: 'PhD',
    role: 'Assistant Professor',
    company: 'Government College for Women, Faridabad',
    photo: '/images/business/testimonials/dr-sonia-minocha.jpg',
    quote: 'Reflecting on my PhD journey, I am overwhelmed with gratitude for the transformative experience I had. While it was a challenging journey because of my 100% vision disability and family obligations, it was also a period of immense intellectual and personal growth. I owe a huge debt of gratitude to my supervisor, Prof. Dr. Animesh Singh, whose mentorship was the cornerstone of my success.',
  },
  {
    name: 'Dr. Preeti Goyal',
    program: 'PhD',
    role: 'Assistant Professor',
    company: 'Maharaja Agrasen Institute of Management Studies (MAIMS Delhi)',
    photo: '/images/business/testimonials/dr-preeti-goyal.jpg',
    quote: 'My PhD journey at Manav Rachna University has been a deeply enriching academic experience. The university provided excellent research infrastructure and a supportive academic environment that encouraged critical thinking and ethical research. The continuous guidance of my research supervisor led to two publications in Scopus-indexed journals and one in a UGC-CARE listed journal.',
  },
]

export default function TestimonialsPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Voices of Excellence</h1>
            <p className="text-white/70 text-xs mt-1">School of Business · Testimonials</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-4">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
              {/* Photo */}
              <div className="relative w-full h-48 bg-neutral-100">
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  className="object-cover"
                  onError={() => {}}
                />
                {/* Fallback initials if photo missing */}
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/10">
                  <span className="text-4xl font-bold text-secondary/30">{t.name[0]}</span>
                </div>
              </div>
              {/* Content */}
              <div className="px-4 py-4">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-secondary font-semibold mt-0.5">{t.role} · {t.company}</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">{t.program}</p>
                  </div>
                  <span className="text-3xl shrink-0">💬</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
