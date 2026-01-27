export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      speakers: {
        Row: {
          id: string
          name: string
          title: string | null
          organization: string | null
          bio: string | null
          image_url: string | null
          twitter: string | null
          linkedin: string | null
          website: string | null
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          title?: string | null
          organization?: string | null
          bio?: string | null
          image_url?: string | null
          twitter?: string | null
          linkedin?: string | null
          website?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          title?: string | null
          organization?: string | null
          bio?: string | null
          image_url?: string | null
          twitter?: string | null
          linkedin?: string | null
          website?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
      sessions: {
        Row: {
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
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          speaker_name?: string | null
          date: string
          start_time: string
          end_time: string
          duration_minutes?: number | null
          location?: string | null
          session_type?: string | null
          track?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          speaker_name?: string | null
          date?: string
          start_time?: string
          end_time?: string
          duration_minutes?: number | null
          location?: string | null
          session_type?: string | null
          track?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      tracks: {
        Row: {
          id: string
          name: string
          code: string
          description: string | null
          topics: string[] | null
          color: string | null
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          code: string
          description?: string | null
          topics?: string[] | null
          color?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          code?: string
          description?: string | null
          topics?: string[] | null
          color?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
      patrons: {
        Row: {
          id: string
          name: string
          title: string | null
          organization: string | null
          category: string
          image_url: string | null
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          title?: string | null
          organization?: string | null
          category: string
          image_url?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          title?: string | null
          organization?: string | null
          category?: string
          image_url?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
      organisers: {
        Row: {
          id: string
          name: string
          role: string
          organization: string | null
          email: string | null
          phone: string | null
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          role: string
          organization?: string | null
          email?: string | null
          phone?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: string
          organization?: string | null
          email?: string | null
          phone?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
      workshop: {
        Row: {
          id: string
          title: string
          description: string | null
          instructor_name: string | null
          date: string | null
          start_time: string | null
          end_time: string | null
          duration_minutes: number | null
          location: string | null
          max_participants: number | null
          topics: string[] | null
          prerequisites: string[] | null
          target_audience: string[] | null
          benefits: string[] | null
          registration_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          instructor_name?: string | null
          date?: string | null
          start_time?: string | null
          end_time?: string | null
          duration_minutes?: number | null
          location?: string | null
          max_participants?: number | null
          topics?: string[] | null
          prerequisites?: string[] | null
          target_audience?: string[] | null
          benefits?: string[] | null
          registration_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          instructor_name?: string | null
          date?: string | null
          start_time?: string | null
          end_time?: string | null
          duration_minutes?: number | null
          location?: string | null
          max_participants?: number | null
          topics?: string[] | null
          prerequisites?: string[] | null
          target_audience?: string[] | null
          benefits?: string[] | null
          registration_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      authors: {
        Row: {
          id: string
          name: string
          affiliation: string | null
          email: string | null
          paper_title: string | null
          track: string | null
          country: string | null
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          affiliation?: string | null
          email?: string | null
          paper_title?: string | null
          track?: string | null
          country?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          affiliation?: string | null
          email?: string | null
          paper_title?: string | null
          track?: string | null
          country?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
