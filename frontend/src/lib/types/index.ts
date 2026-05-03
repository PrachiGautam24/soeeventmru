export interface Speaker {
  id: string
  name: string
  title: string | null
  organization: string | null
  bio: string | null
  image_url: string | null
  twitter: string | null
  linkedin: string | null
  website: string | null
  session_type: string | null
  participation_mode: string | null
  order_index: number
}

export interface ChiefGuest {
  id: string
  name: string
  title: string | null
  organization: string | null
  bio: string | null
  image_url: string | null
  session_type: string | null
  order_index: number
}

export interface GuestOfHonor {
  id: string
  name: string
  title: string | null
  organization: string | null
  bio: string | null
  image_url: string | null
  session_type: string | null
  order_index: number
}

export interface Session {
  id: string
  title: string
  description: string | null
  speaker_name: string | null
  date: string
  start_time: string
  end_time: string
  duration_minutes: number | null
  location: string | null
  session_type: string | null
  track: string | null
}

export interface Track {
  id: string
  name: string
  code: string
  description: string | null
  topics: string[] | null
  color: string | null
  order_index: number
}

export interface Patron {
  id: string
  name: string
  designation: string | null
  organization: string | null
  category: string
  image_url: string | null
  order_index: number
}

export interface Organiser {
  id: string
  name: string
  role: string
  organization: string | null
  email: string | null
  phone: string | null
  image_url: string | null
  order_index: number
}

export interface Author {
  id: string
  name: string
  affiliation: string | null
  email: string | null
  paper_title: string | null
  track: string | null
  track_no: string | null
  country: string | null
  image_url: string | null
  order_index: number
}

export interface ScheduleEvent {
  id: string
  day: number
  date: string
  event_type: string
  title: string
  description: string | null
  start_time: string
  end_time: string | null
  venue: string | null
  session_name: string | null
  tracks: string | null
  mode: string | null
  session_chair: string | null
  session_incharge: string | null
  order_index: number
}

export interface SessionPaper {
  id: string
  schedule_event_id: string
  paper_id: string
  paper_title: string
  author_name: string
  track_number: string | null
  online_offline: string | null
  timings: string | null
  order_index: number
}

export interface Attendance {
  id: string
  name: string
  timestamp: string
}

export type AchievementCategory = 'ACADEMIC' | 'RESEARCH' | 'SPORTS' | 'CULTURAL' | 'INNOVATION'

export interface AchievementEvent {
  id: string
  title: string
  category: AchievementCategory
  year: number
  icon: string
  bg_color: string
  student_count: number
  is_featured: boolean
  order_index: number
}

export interface AchievementStudent {
  id: string
  achievement_event_id: string
  name: string
  branch: string | null
  year_of_study: string | null
  description: string | null
  image_url: string | null
  order_index: number
}

export interface Sponsor {
  id: string
  name: string
  logo_url: string | null
  website: string | null
  description: string | null
  order_index: number
}

export interface SocialLinks {
  twitter?: string
  linkedin?: string
  website?: string
}
