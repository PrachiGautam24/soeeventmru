-- ============================================================
-- GUEST OF HONOR TABLE SCHEMA
-- ============================================================

CREATE TABLE IF NOT EXISTS public.guest_of_honor (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    title TEXT,
    organization TEXT,
    bio TEXT,
    image_url TEXT,
    session_type TEXT, -- 'Inaugural' or 'Valedictory'
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE public.guest_of_honor IS 'Guests of Honor for conference sessions';
COMMENT ON COLUMN public.guest_of_honor.title IS 'Job title or designation';
COMMENT ON COLUMN public.guest_of_honor.session_type IS 'Session type: Inaugural or Valedictory';
COMMENT ON COLUMN public.guest_of_honor.order_index IS 'Display order (lower numbers first)';

-- Enable Row Level Security
ALTER TABLE public.guest_of_honor ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
DROP POLICY IF EXISTS "Enable read access for all users" ON public.guest_of_honor;
CREATE POLICY "Enable read access for all users" ON public.guest_of_honor 
    FOR SELECT 
    USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS guest_of_honor_session_type_idx ON public.guest_of_honor(session_type);
CREATE INDEX IF NOT EXISTS guest_of_honor_order_idx ON public.guest_of_honor(order_index);
