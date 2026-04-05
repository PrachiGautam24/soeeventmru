import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { Database } from './types/database'

let supabase: SupabaseClient<Database> | null = null

if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}

export { supabase }
