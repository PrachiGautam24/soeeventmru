import { createClient } from '@supabase/supabase-js'
import { Database } from './types/database'

// Commented out the strict non-null assertions for now so Supabase config is not required during local work.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
