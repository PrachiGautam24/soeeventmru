-- ============================================================
-- CHIEF GUEST TABLE SCHEMA
-- ============================================================

CREATE TABLE IF NOT EXISTS public.chief_guest (
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

COMMENT ON TABLE public.chief_guest IS 'Chief Guests for conference sessions';
COMMENT ON COLUMN public.chief_guest.title IS 'Job title or designation';
COMMENT ON COLUMN public.chief_guest.session_type IS 'Session type: Inaugural or Valedictory';
COMMENT ON COLUMN public.chief_guest.order_index IS 'Display order (lower numbers first)';

-- Enable Row Level Security
ALTER TABLE public.chief_guest ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
DROP POLICY IF EXISTS "Enable read access for all users" ON public.chief_guest;
CREATE POLICY "Enable read access for all users" ON public.chief_guest 
    FOR SELECT 
    USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS chief_guest_session_type_idx ON public.chief_guest(session_type);
CREATE INDEX IF NOT EXISTS chief_guest_order_idx ON public.chief_guest(order_index);
