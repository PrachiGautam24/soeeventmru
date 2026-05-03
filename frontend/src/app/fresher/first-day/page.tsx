'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft, Phone } from 'lucide-react'

const checklist = ['Carry your admission letter / offer letter', 'Bring all original documents + 2 sets of photocopies', 'Passport-size photographs (at least 10)', 'Government-issued photo ID (Aadhaar / Passport)', 'Class 10 & 12 mark sheets and certificates', 'Migration certificate from previous institution', 'Medical fitness certificate', 'Demand Draft for hostel fee (if applicable)']

const schedule = [
  { time: '8:00 AM', task: 'Report to the Registration Desk at the Main Gate' },
  { time: '9:00 AM', task: 'Document verification at the Admission Office' },
  { time: '10:30 AM', task: 'Collect your Student ID card form' },
  { time: '11:00 AM', task: 'Orientation session in the Main Auditorium' },
  { time: '1:00 PM', task: 'Lunch break at the University Cafeteria' },
  { time: '2:00 PM', task: 'Department-wise induction & campus tour' },
  { time: '4:00 PM', task: 'Hostel allotment (if applicable)' },
  { time: '5:00 PM', task: 'Wrap-up & queries session' },
]

const locations = [{ place: 'Main Gate', desc: 'Entry point – report here first' }, { place: 'Admission Office', desc: 'Block A, Ground Floor' }, { place: 'Main Auditorium', desc: 'Central campus building' }, { place: 'Library', desc: 'Block C, 2nd Floor' }, { place: 'Cafeteria', desc: 'Near the central lawn' }, { place: 'Medical Centre', desc: 'Near Boys Hostel' }]

const dos = ['Arrive at least 30 minutes early', 'Keep all documents in a folder', 'Wear your college ID once issued', 'Be respectful to seniors and faculty', 'Save emergency numbers on your phone', 'Explore the campus with a buddy']

const donts = ['Do not leave original documents unattended', 'Do not engage with unauthorized agents', 'Do not share personal details with strangers', 'Avoid ragging – report immediately if faced', 'Do not miss the orientation session']

const appSetup = ['Download the MRU Student App from Play Store / App Store', 'Register using your enrollment number and date of birth', 'Set up your university email (provided during registration)', 'Join your department WhatsApp group (shared during orientation)', 'Bookmark the MRU portal: manavrachna.edu.in/mru']

const emergencyContacts = [{ label: 'University Helpline', number: '0129-4259000' }, { label: 'Anti-Ragging Helpline', number: '1800-180-5522' }, { label: 'Campus Security', number: '0129-4259001' }, { label: 'Medical Centre', number: '0129-4259002' }, { label: 'Student Welfare', number: '0129-4259005' }]

export default function FirstDayPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="bg-secondary px-5 pt-10 pb-6 rounded-b-3xl shadow-lg">
          <button onClick={() => router.back()} className="flex items-center gap-1.5 text-white/80 text-sm mb-3"><ChevronLeft className="w-4 h-4" /> Back</button>
          <h1 className="text-white text-xl font-bold">First Day Instructions</h1>
          <p className="text-white/70 text-xs mt-1">Everything you need to know for Day 1</p>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

          {/* Welcome */}
          <div className="bg-red-50 border border-red-100 rounded-2xl px-4 py-4">
            <p className="text-sm font-bold text-red-700">Welcome to Manav Rachna University!</p>
            <p className="text-xs text-red-500 mt-1">Your first day sets the tone. Follow this guide to make it smooth and stress-free.</p>
          </div>

          {/* Checklist */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">Arrival Checklist</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">Day Schedule</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {schedule.map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3.5">
                  <span className="text-xs font-bold text-secondary shrink-0 w-16">{item.time}</span>
                  <p className="text-sm text-gray-700">{item.task}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Locations */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">Key Locations</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {locations.map((loc) => (
                <div key={loc.place} className="flex items-center justify-between px-4 py-3.5">
                  <p className="text-sm font-semibold text-gray-800">{loc.place}</p>
                  <p className="text-xs text-neutral-500">{loc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dos */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">✅ Do</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {dos.map((d, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Don'ts */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">❌ Don&apos;t</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {donts.map((d, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400 shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Setup */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">Digital Setup</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {appSetup.map((step, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3">
                  <span className="text-xs font-bold text-secondary shrink-0 w-5">{i + 1}.</span>
                  <p className="text-sm text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">Emergency Contacts</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {emergencyContacts.map((c) => (
                <a key={c.label} href={`tel:${c.number}`} className="flex items-center justify-between px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-secondary" />
                    <p className="text-sm font-semibold text-gray-800">{c.label}</p>
                  </div>
                  <p className="text-sm text-secondary font-semibold">{c.number}</p>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
