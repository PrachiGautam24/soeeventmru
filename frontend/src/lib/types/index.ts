import { Database } from './database'

export type Speaker = Database['public']['Tables']['speakers']['Row']
export type ChiefGuest = Database['public']['Tables']['chief_guest']['Row']
export type GuestOfHonor = Database['public']['Tables']['guest_of_honor']['Row']
export type Session = Database['public']['Tables']['sessions']['Row']
export type Track = Database['public']['Tables']['tracks']['Row']
export type Patron = Database['public']['Tables']['patrons']['Row']
export type Organiser = Database['public']['Tables']['organisers']['Row']
export type Workshop = Database['public']['Tables']['workshop']['Row']
export type Author = Database['public']['Tables']['authors']['Row']
export type Attendance = Database['public']['Tables']['attendance']['Row']
export type Sponsor = Database['public']['Tables']['sponsors']['Row']
export type ScheduleEvent = Database['public']['Tables']['schedule_events']['Row']
export type SessionPaper = Database['public']['Tables']['session_papers']['Row']

export interface SocialLinks {
  twitter?: string
  linkedin?: string
  website?: string
}
