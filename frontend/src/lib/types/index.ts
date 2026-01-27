import { Database } from './database'

export type Speaker = Database['public']['Tables']['speakers']['Row']
export type Session = Database['public']['Tables']['sessions']['Row']
export type Track = Database['public']['Tables']['tracks']['Row']
export type Patron = Database['public']['Tables']['patrons']['Row']
export type Organiser = Database['public']['Tables']['organisers']['Row']
export type Workshop = Database['public']['Tables']['workshop']['Row']
export type Author = Database['public']['Tables']['authors']['Row']

export interface SocialLinks {
  twitter?: string
  linkedin?: string
  website?: string
}
