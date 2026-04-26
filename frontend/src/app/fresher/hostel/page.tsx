'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft, Phone, AlertCircle } from 'lucide-react'

const roomCategories = [
  { title: 'Boys Hostel – Campus (Hostel 2)', rooms: [{ type: '2 Seated A/B – AC', total: '₹2,50,300' }, { type: '2 Seated A/B – Non-AC', total: '₹2,32,700' }, { type: '3 Seated A/B – AC', total: '₹2,33,000' }, { type: '3 Seated A/B – Non-AC', total: '₹2,15,800' }] },
  { title: 'Boys Hostel – Campus (Hostel 1)', rooms: [{ type: '2 Seated C/B – AC', total: '₹2,28,700' }, { type: '2 Seated C/B – Non-AC', total: '₹2,04,200' }, { type: '4 Seated C/B – Non-AC', total: '₹1,72,100' }, { type: '4 Seated C/B – AC', total: '₹2,04,800' }, { type: '6 Seated C/B – AC', total: '₹1,90,000' }] },
  { title: 'Girls Hostel – Campus', rooms: [{ type: '2 Seated A/B – AC (Studio)', total: '₹3,18,600' }, { type: '2 Seated A/B – AC', total: '₹2,72,500' }, { type: '4 Seated C/B – Non-AC', total: '₹1,72,100' }, { type: '4 Seated C/B – AC', total: '₹2,04,800' }, { type: '6 Seated C/B – Non-AC', total: '₹1,69,600' }, { type: '6 Seated C/B – AC', total: '₹1,90,000' }] },
  { title: 'Boys Hostel – Off Campus (Sec. 45)', rooms: [{ type: '2 Seated C/B – Non-AC', total: '₹1,56,200' }, { type: '2 Seated C/B – AC', total: '₹1,98,200' }, { type: '3 Seated C/B – Non-AC', total: '₹1,45,500' }, { type: '3 Seated C/B – AC', total: '₹1,87,500' }] },
  { title: 'Girls Hostel – Off Campus (720/21A)', rooms: [{ type: '2 Seated A/B – AC', total: '₹2,89,600' }, { type: '3 Seated A/B – AC', total: '₹2,27,200' }, { type: '3 Seated A/B – Non-AC', total: '₹1,99,100' }] },
  { title: 'Girls Hostel – Off Campus (721/21A)', rooms: [{ type: '1 Seated C/B – AC', total: '₹2,04,600' }, { type: '2 Seated C/B – AC', total: '₹2,28,700' }, { type: '2 Seated C/B – Non-AC', total: '₹1,75,500' }, { type: '3 Seated C/B – AC', total: '₹2,12,900' }, { type: '3 Seated C/B – Non-AC', total: '₹1,60,400' }] },
]

const facilities = ['Wi-Fi & high-speed internet throughout', 'Hygienic mess with nutritious meals daily', 'Furnished rooms — TV, PC, RO water, telephone', '24/7 campus security & CCTV', 'Medical care & insurance included in fee', 'Laundry facilities included']

const rules = ['Hostel registration opens April 1 each year – first come, first served.', 'Fee must be paid via Demand Draft after formal allotment.', 'Caution deposit is refundable at the time of vacating.', 'Medical care, insurance, and laundry charges are included.', 'Ragging is strictly prohibited and punishable under law.', 'Visitors allowed only in designated areas during permitted hours.', 'Students must maintain cleanliness and discipline.', 'Possession or consumption of alcohol/drugs is strictly prohibited.', 'Electrical appliances other than permitted are not allowed.', 'Students must inform the warden before leaving campus overnight.']

const emergencyContacts = [{ label: 'Hostel Helpline', number: '0129-4259000' }, { label: 'Campus Security', number: '0129-4259001' }, { label: 'Medical Centre', number: '0129-4259002' }, { label: 'Warden (Boys)', number: '0129-4259003' }, { label: 'Warden (Girls)', number: '0129-4259004' }]

export default function HostelPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="bg-secondary px-5 pt-10 pb-6 rounded-b-3xl shadow-lg">
          <button onClick={() => router.back()} className="flex items-center gap-1.5 text-white/80 text-sm mb-3"><ChevronLeft className="w-4 h-4" /> Back</button>
          <h1 className="text-white text-xl font-bold">Hostel Information</h1>
          <p className="text-white/70 text-xs mt-1">Rooms, facilities & rules for 2026–27</p>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">

          {/* Overview */}
          <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm">
            <p className="text-sm text-gray-600 leading-relaxed">MREI provides on-campus and off-campus hostel accommodation for boys and girls with single, double, and triple rooms.</p>
            <div className="mt-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              <p className="text-xs font-semibold text-red-700">Registration for 2026–27 starts April 1, 2026</p>
              <p className="text-[11px] text-red-500 mt-0.5">Allocation is purely on a first come, first served basis.</p>
            </div>
          </div>

          {/* Facilities */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">Facilities</p>
            <div className="divide-y divide-neutral-100">
              {facilities.map((f, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{f}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Room Fees */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-1">Room Categories & Fees</p>
            <p className="text-[11px] text-neutral-400 px-4 pb-3">AY 2026–27 (includes mess, laundry, medical & insurance)</p>
            {roomCategories.map((cat) => (
              <div key={cat.title} className="border-t border-neutral-100">
                <p className="text-xs font-semibold text-gray-700 px-4 py-2.5 bg-neutral-50">{cat.title}</p>
                <div className="divide-y divide-neutral-50">
                  {cat.rooms.map((room, i) => (
                    <div key={i} className="flex items-center justify-between px-4 py-2.5">
                      <p className="text-xs text-gray-600">{room.type}</p>
                      <p className="text-xs font-semibold text-secondary">{room.total}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Rules */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">Basic Rules</p>
            <div className="divide-y divide-neutral-100">
              {rules.map((rule, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3">
                  <span className="text-xs font-bold text-secondary shrink-0 w-5">{i + 1}.</span>
                  <p className="text-sm text-gray-700 leading-relaxed">{rule}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 pt-4 pb-2">
              <AlertCircle className="w-4 h-4 text-secondary" />
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Emergency Contacts</p>
            </div>
            <div className="divide-y divide-neutral-100">
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
