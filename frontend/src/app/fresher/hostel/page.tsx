'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ChevronLeft, Bed, Wifi, Utensils, Shield, Phone, AlertCircle } from 'lucide-react'
import PageTransition from '@/components/PageTransition'

const roomCategories = [
  {
    title: 'Boys Hostel – Campus (Hostel 2)',
    rooms: [
      { type: '2 Seated A/B – AC', total: '₹2,50,300' },
      { type: '2 Seated A/B – Non-AC', total: '₹2,32,700' },
      { type: '3 Seated A/B – AC', total: '₹2,33,000' },
      { type: '3 Seated A/B – Non-AC', total: '₹2,15,800' },
    ],
  },
  {
    title: 'Boys Hostel – Campus (Hostel 1)',
    rooms: [
      { type: '2 Seated C/B – AC', total: '₹2,28,700' },
      { type: '2 Seated C/B – Non-AC', total: '₹2,04,200' },
      { type: '4 Seated C/B – Non-AC', total: '₹1,72,100' },
      { type: '4 Seated C/B – AC', total: '₹2,04,800' },
      { type: '6 Seated C/B – AC', total: '₹1,90,000' },
    ],
  },
  {
    title: 'Girls Hostel – Campus',
    rooms: [
      { type: '2 Seated A/B – AC (Studio)', total: '₹3,18,600' },
      { type: '2 Seated A/B – AC', total: '₹2,72,500' },
      { type: '4 Seated C/B – Non-AC', total: '₹1,72,100' },
      { type: '4 Seated C/B – AC', total: '₹2,04,800' },
      { type: '6 Seated C/B – Non-AC', total: '₹1,69,600' },
      { type: '6 Seated C/B – AC', total: '₹1,90,000' },
    ],
  },
  {
    title: 'Boys Hostel – Off Campus (Sec. 45)',
    rooms: [
      { type: '2 Seated C/B – Non-AC', total: '₹1,56,200' },
      { type: '2 Seated C/B – AC', total: '₹1,98,200' },
      { type: '3 Seated C/B – Non-AC', total: '₹1,45,500' },
      { type: '3 Seated C/B – AC', total: '₹1,87,500' },
    ],
  },
  {
    title: 'Girls Hostel – Off Campus (720/21A)',
    rooms: [
      { type: '2 Seated A/B – AC', total: '₹2,89,600' },
      { type: '3 Seated A/B – AC', total: '₹2,27,200' },
      { type: '3 Seated A/B – Non-AC', total: '₹1,99,100' },
    ],
  },
  {
    title: 'Girls Hostel – Off Campus (721/21A)',
    rooms: [
      { type: '1 Seated C/B – AC', total: '₹2,04,600' },
      { type: '2 Seated C/B – AC', total: '₹2,28,700' },
      { type: '2 Seated C/B – Non-AC', total: '₹1,75,500' },
      { type: '3 Seated C/B – AC', total: '₹2,12,900' },
      { type: '3 Seated C/B – Non-AC', total: '₹1,60,400' },
    ],
  },
]

const facilities = [
  { icon: Wifi, label: 'Wi-Fi', desc: 'High-speed internet throughout' },
  { icon: Utensils, label: 'Mess', desc: 'Hygienic, nutritious meals daily' },
  { icon: Bed, label: 'Furnished Rooms', desc: 'TV, PC, RO water, telephone' },
  { icon: Shield, label: 'Security', desc: '24/7 campus security & CCTV' },
]

const rules = [
  'Hostel registration opens April 1 each year – first come, first served.',
  'Fee must be paid via Demand Draft after formal allotment by the competent authority.',
  'Caution deposit is refundable at the time of vacating the hostel.',
  'Medical care, insurance, and laundry charges are included in the fee.',
  'Ragging is strictly prohibited and punishable under law.',
  'Visitors are allowed only in designated areas during permitted hours.',
  'Students must maintain cleanliness and discipline in hostel premises.',
  'Possession or consumption of alcohol/drugs is strictly prohibited.',
  'Electrical appliances other than those permitted are not allowed.',
  'Students must inform the warden before leaving campus overnight.',
]

const emergencyContacts = [
  { label: 'Hostel Helpline', number: '0129-4259000' },
  { label: 'Campus Security', number: '0129-4259001' },
  { label: 'Medical Centre', number: '0129-4259002' },
  { label: 'Warden (Boys)', number: '0129-4259003' },
  { label: 'Warden (Girls)', number: '0129-4259004' },
]

export default function HostelPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl flex flex-col">

        {/* Header */}
        <div className="bg-red-600 px-4 pt-12 pb-6">
          <button onClick={() => router.back()} className="flex items-center gap-1.5 text-white/80 text-sm mb-4">
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="text-white text-xl font-bold">Hostel Information</h1>
          <p className="text-white/70 text-xs mt-1">Rooms, facilities & rules for 2026–27</p>
        </div>

        <div className="flex-1 overflow-y-auto pb-24">

          {/* Overview */}
          <div className="px-5 py-5 border-b border-neutral-100">
            <p className="text-sm text-gray-600 leading-relaxed">
              MREI provides both on-campus and off-campus hostel accommodation for boys and girls with single, double, and triple rooms. Rooms are well-furnished with modern amenities including TV, PCs, Wi-Fi, telephone, and RO drinking water.
            </p>
            <div className="mt-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              <p className="text-xs font-semibold text-red-700">Registration for 2026–27 starts April 1, 2026</p>
              <p className="text-[11px] text-red-500 mt-0.5">Allocation is purely on a first come, first served basis.</p>
            </div>
          </div>

          {/* Facilities */}
          <div className="px-5 py-5 border-b border-neutral-100">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-3">Facilities</p>
            <div className="grid grid-cols-2 gap-3">
              {facilities.map((f) => {
                const Icon = f.icon
                return (
                  <motion.div key={f.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    className="bg-neutral-50 rounded-xl p-3 border border-neutral-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{f.label}</p>
                      <p className="text-[10px] text-neutral-400 mt-0.5">{f.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Room Categories & Fees */}
          <div className="px-5 py-5 border-b border-neutral-100">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-1">Room Categories & Fees</p>
            <p className="text-[11px] text-neutral-400 mb-4">Academic Session 2026–27 (includes mess, laundry, medical & insurance)</p>
            <div className="space-y-4">
              {roomCategories.map((cat) => (
                <div key={cat.title}>
                  <p className="text-xs font-semibold text-gray-700 mb-2">{cat.title}</p>
                  <div className="rounded-xl overflow-hidden border border-neutral-100">
                    {cat.rooms.map((room, i) => (
                      <div key={room.type} className={`flex items-center justify-between px-3 py-2.5 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>
                        <p className="text-xs text-gray-600 flex-1">{room.type}</p>
                        <p className="text-xs font-semibold text-red-600 shrink-0">{room.total}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rules */}
          <div className="px-5 py-5 border-b border-neutral-100">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-3">Basic Rules</p>
            <div className="space-y-2">
              {rules.map((rule, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-red-600">{i + 1}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{rule}</p>
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
