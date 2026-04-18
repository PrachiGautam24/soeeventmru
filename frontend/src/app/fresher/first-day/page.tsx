'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  ChevronLeft, CheckCircle2, Clock, MapPin, FileText,
  Users, Smartphone, AlertCircle, Phone, Shield
} from 'lucide-react'

const arrivalChecklist = [
  'Carry your admission letter / offer letter',
  'Bring all original documents + 2 sets of photocopies',
  'Passport-size photographs (at least 10)',
  'Government-issued photo ID (Aadhaar / Passport)',
  'Class 10 & 12 mark sheets and certificates',
  'Migration certificate from previous institution',
  'Medical fitness certificate',
  'Demand Draft for hostel fee (if applicable)',
]

const daySchedule = [
  { time: '8:00 AM', task: 'Report to the Registration Desk at the Main Gate' },
  { time: '9:00 AM', task: 'Document verification at the Admission Office' },
  { time: '10:30 AM', task: 'Collect your Student ID card form' },
  { time: '11:00 AM', task: 'Orientation session in the Main Auditorium' },
  { time: '1:00 PM', task: 'Lunch break at the University Cafeteria' },
  { time: '2:00 PM', task: 'Department-wise induction & campus tour' },
  { time: '4:00 PM', task: 'Hostel allotment (if applicable)' },
  { time: '5:00 PM', task: 'Wrap-up & queries session' },
]

const importantLocations = [
  { place: 'Main Gate', desc: 'Entry point – report here first' },
  { place: 'Admission Office', desc: 'Block A, Ground Floor' },
  { place: 'Main Auditorium', desc: 'Central campus building' },
  { place: 'Library', desc: 'Block C, 2nd Floor' },
  { place: 'Cafeteria', desc: 'Near the central lawn' },
  { place: 'Medical Centre', desc: 'Near Boys Hostel' },
]

const dosDonts = {
  dos: [
    'Arrive at least 30 minutes early',
    'Keep all documents in a folder',
    'Wear your college ID once issued',
    'Be respectful to seniors and faculty',
    'Save emergency numbers on your phone',
    'Explore the campus with a buddy',
  ],
  donts: [
    'Do not leave original documents unattended',
    'Do not engage with unauthorized agents',
    'Do not share personal details with strangers',
    'Avoid ragging – report immediately if faced',
    'Do not miss the orientation session',
  ],
}

const emergencyContacts = [
  { label: 'University Helpline', number: '0129-4259000' },
  { label: 'Anti-Ragging Helpline', number: '1800-180-5522' },
  { label: 'Campus Security', number: '0129-4259001' },
  { label: 'Medical Centre', number: '0129-4259002' },
  { label: 'Student Welfare', number: '0129-4259005' },
]

const appSetup = [
  'Download the MRU Student App from Play Store / App Store',
  'Register using your enrollment number and date of birth',
  'Set up your university email (provided during registration)',
  'Join your department WhatsApp group (shared during orientation)',
  'Bookmark the MRU portal: manavrachna.edu.in/mru',
]

export default function FirstDayPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl flex flex-col">

        {/* Header */}
        <div className="bg-red-600 px-4 pt-12 pb-6">
          <button onClick={() => router.back()} className="flex items-center gap-1.5 text-white/80 text-sm mb-4">
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="text-white text-xl font-bold">First Day Instructions</h1>
          <p className="text-white/70 text-xs mt-1">Everything you need to know for Day 1</p>
        </div>

        <div className="flex-1 overflow-y-auto pb-24">

          {/* Welcome Banner */}
          <div className="mx-4 mt-5 bg-red-50 border border-red-100 rounded-2xl px-4 py-4">
            <p className="text-sm font-bold text-red-700">Welcome to Manav Rachna University!</p>
            <p className="text-xs text-red-500 mt-1 leading-relaxed">
              Your first day sets the tone. Follow this guide to make it smooth and stress-free.
            </p>
          </div>

          {/* Arrival Checklist */}
          <div className="px-5 py-5 border-b border-neutral-100">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-red-600" />
              <p className="text-xs font-semibold text-red-600 uppercase tracking-widest">Arrival Checklist</p>
            </div>
            <div className="space-y-2">
              {arrivalChecklist.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2.5 bg-neutral-50 rounded-xl px-3 py-2.5 border border-neutral-100">
                  <div className="w-5 h-5 rounded-full border-2 border-red-300 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Day Schedule */}
          <div className="px-5 py-5 border-b border-neutral-100">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-red-600" />
              <p className="text-xs font-semibold text-red-600 uppercase tracking-widest">Day Schedule</p>
            </div>
            <div className="relative pl-4">
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-red-100" />
              <div className="space-y-4">
                {daySchedule.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 pl-4">
                    <div className="absolute left-3 w-3 h-3 rounded-full bg-red-500 border-2 border-white shadow-sm mt-0.5" style={{ marginLeft: '-1px' }} />
                    <div className="flex-1">
                      <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">{item.time}</span>
                      <p className="text-xs text-gray-700 mt-1 leading-relaxed">{item.task}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Locations */}
          <div className="px-5 py-5 border-b border-neutral-100">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-red-600" />
              <p className="text-xs font-semibold text-red-600 uppercase tracking-widest">Key Locations</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {importantLocations.map((loc) => (
                <div key={loc.place} className="bg-neutral-50 rounded-xl px-3 py-2.5 border border-neutral-100">
                  <p className="text-xs font-semibold text-gray-800">{loc.place}</p>
                  <p className="text-[10px] text-neutral-400 mt-0.5">{loc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dos & Don'ts */}
          <div className="px-5 py-5 border-b border-neutral-100">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-red-600" />
              <p className="text-xs font-semibold text-red-600 uppercase tracking-widest">Dos & Don'ts</p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-green-700 mb-2">✅ Do</p>
                <div className="space-y-1.5">
                  {dosDonts.dos.map((d, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5" />
                      <p className="text-xs text-gray-600">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-red-600 mb-2">❌ Don't</p>
                <div className="space-y-1.5">
                  {dosDonts.donts.map((d, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                      <p className="text-xs text-gray-600">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* App & Digital Setup */}
          <div className="px-5 py-5 border-b border-neutral-100">
            <div className="flex items-center gap-2 mb-3">
              <Smartphone className="w-4 h-4 text-red-600" />
              <p className="text-xs font-semibold text-red-600 uppercase tracking-widest">Digital Setup</p>
            </div>
            <div className="space-y-2">
              {appSetup.map((step, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-red-600">{i + 1}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="px-5 py-5">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <p className="text-xs font-semibold text-red-600 uppercase tracking-widest">Emergency Contacts</p>
            </div>
            <div className="space-y-2">
              {emergencyContacts.map((c) => (
                <a key={c.label} href={`tel:${c.number}`}
                  className="flex items-center justify-between bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-red-600" />
                    <p className="text-xs font-semibold text-gray-800">{c.label}</p>
                  </div>
                  <p className="text-xs text-red-600 font-semibold">{c.number}</p>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
