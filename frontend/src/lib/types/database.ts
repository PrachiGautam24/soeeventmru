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
          session_type: string | null
          participation_mode: string | null
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
          session_type?: string | null
          participation_mode?: string | null
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
          session_type?: string | null
          participation_mode?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      chief_guest: {
        Row: {
          id: string
          name: string
          title: string | null
          organization: string | null
          bio: string | null
          image_url: string | null
          session_type: string | null
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
          session_type?: string | null
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
          session_type?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      guest_of_honor: {
        Row: {
          id: string
          name: string
          title: string | null
          organization: string | null
          bio: string | null
          image_url: string | null
          session_type: string | null
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
          session_type?: string | null
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
          session_type?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
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
        Relationships: []
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
        Relationships: []
      }
      patrons: {
        Row: {
          id: string
          name: string
          designation: string | null
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
          designation?: string | null
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
          designation?: string | null
          organization?: string | null
          category?: string
          image_url?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      organisers: {
        Row: {
          id: string
          name: string
          role: string
          organization: string | null
          email: string | null
          phone: string | null
          image_url: string | null
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
          image_url?: string | null
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
          image_url?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      authors: {
        Row: {
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
          track_no?: string | null
          country?: string | null
          image_url?: string | null
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
          track_no?: string | null
          country?: string | null
          image_url?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      schedule_events: {
        Row: {
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
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          day: number
          date: string
          event_type: string
          title: string
          description?: string | null
          start_time: string
          end_time?: string | null
          venue?: string | null
          session_name?: string | null
          tracks?: string | null
          mode?: string | null
          session_chair?: string | null
          session_incharge?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          day?: number
          date?: string
          event_type?: string
          title?: string
          description?: string | null
          start_time?: string
          end_time?: string | null
          venue?: string | null
          session_name?: string | null
          tracks?: string | null
          mode?: string | null
          session_chair?: string | null
          session_incharge?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      session_papers: {
        Row: {
          id: string
          schedule_event_id: string
          paper_id: string
          paper_title: string
          author_name: string
          track_number: string | null
          online_offline: string | null
          timings: string | null
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          schedule_event_id: string
          paper_id: string
          paper_title: string
          author_name: string
          track_number?: string | null
          online_offline?: string | null
          timings?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          schedule_event_id?: string
          paper_id?: string
          paper_title?: string
          author_name?: string
          track_number?: string | null
          online_offline?: string | null
          timings?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      attendance: {
        Row: {
          id: string
          name: string
          timestamp: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          timestamp?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          timestamp?: string
          created_at?: string
        }
        Relationships: []
      }
      achievement_events: {
        Row: {
          id: string
          title: string
          category: 'ACADEMIC' | 'RESEARCH' | 'SPORTS' | 'CULTURAL' | 'INNOVATION'
          year: number
          icon: string
          bg_color: string
          student_count: number
          is_featured: boolean
          order_index: number
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          category: 'ACADEMIC' | 'RESEARCH' | 'SPORTS' | 'CULTURAL' | 'INNOVATION'
          year: number
          icon: string
          bg_color: string
          student_count: number
          is_featured?: boolean
          order_index?: number
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          category?: 'ACADEMIC' | 'RESEARCH' | 'SPORTS' | 'CULTURAL' | 'INNOVATION'
          year?: number
          icon?: string
          bg_color?: string
          student_count?: number
          is_featured?: boolean
          order_index?: number
          created_at?: string
        }
        Relationships: []
      }
      achievement_students: {
        Row: {
          id: string
          achievement_event_id: string
          name: string
          branch: string | null
          year_of_study: string | null
          description: string | null
          image_url: string | null
          order_index: number
          created_at: string
        }
        Insert: {
          id?: string
          achievement_event_id: string
          name: string
          branch?: string | null
          year_of_study?: string | null
          description?: string | null
          image_url?: string | null
          order_index?: number
          created_at?: string
        }
        Update: {
          id?: string
          achievement_event_id?: string
          name?: string
          branch?: string | null
          year_of_study?: string | null
          description?: string | null
          image_url?: string | null
          order_index?: number
          created_at?: string
        }
        Relationships: []
      }
      sponsors: {
        Row: {
          id: string
          name: string
          logo_url: string | null
          website: string | null
          description: string | null
          order_index: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          logo_url?: string | null
          website?: string | null
          description?: string | null
          order_index?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          logo_url?: string | null
          website?: string | null
          description?: string | null
          order_index?: number
          created_at?: string
        }
        Relationships: []
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
