import { createClient } from '@supabase/supabase-js'
import { Database } from './types/database'

let supabase: ReturnType<typeof createClient<Database>> | null = null

if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
} else {
  console.warn("Supabase not configured - frontend will work without database features")
}

export { supabase }
