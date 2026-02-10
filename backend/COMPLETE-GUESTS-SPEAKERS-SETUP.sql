-- ============================================================
-- COMPLETE SETUP FOR CHIEF GUEST, GUEST OF HONOR, AND KEYNOTE SPEAKERS
-- SOE Events MRU - ICASS 2026
-- Execute this file in Supabase SQL Editor
-- ============================================================

-- ------------------------------------------------------------
-- STEP 1: Create Chief Guest Table
-- ------------------------------------------------------------
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

-- ------------------------------------------------------------
-- STEP 2: Create Guest of Honor Table
-- ------------------------------------------------------------
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

-- ------------------------------------------------------------
-- STEP 3: Update Speakers Table (Add new columns)
-- ------------------------------------------------------------
ALTER TABLE public.speakers 
ADD COLUMN IF NOT EXISTS session_type TEXT,
ADD COLUMN IF NOT EXISTS participation_mode TEXT; -- 'Online' or 'Offline'

COMMENT ON COLUMN public.speakers.session_type IS 'Session type: Inaugural, Valedictory, etc.';
COMMENT ON COLUMN public.speakers.participation_mode IS 'Participation mode: Online or Offline';

-- ------------------------------------------------------------
-- STEP 4: Insert Chief Guest Data
-- ------------------------------------------------------------
INSERT INTO public.chief_guest (name, title, organization, session_type, order_index)
VALUES 
(
    'Prof (Dr) Dinesh Kumar',
    'Vice Chancellor',
    'Shri Vishwakarma Skill University, Palwal, Haryana',
    'Inaugural',
    1
)
ON CONFLICT (id) DO NOTHING;

-- ------------------------------------------------------------
-- STEP 5: Insert Guest of Honor Data
-- ------------------------------------------------------------
INSERT INTO public.guest_of_honor (name, title, organization, session_type, order_index)
VALUES 
(
    'Dr. Anbuthambi B',
    'Director-SuccessVerse, Ex-Head, Strategy and Incubation',
    'L&T EduTech',
    'Inaugural',
    1
),
(
    'Prof. (Dr.) Prerna Gaur',
    'Director, NSUT (West Campus) and Chair',
    'IEEE India Council',
    'Valedictory',
    2
)
ON CONFLICT (id) DO NOTHING;

-- ------------------------------------------------------------
-- STEP 6: Insert Keynote Speakers Data
-- ------------------------------------------------------------
INSERT INTO public.speakers (name, title, organization, session_type, participation_mode, order_index)
VALUES 
(
    'Prof (Dr) Parag Kulkarni',
    'Professor (AI and Innovation)',
    'Tokyo International University, Japan',
    'Inaugural',
    'Online',
    1
),
(
    'Dr Ankit Agrawal',
    'Research Professor, Department of ECE',
    'Northwestern University, USA',
    'Inaugural',
    'Offline',
    2
)
ON CONFLICT (id) DO NOTHING;

-- ------------------------------------------------------------
-- VERIFICATION QUERIES
-- ------------------------------------------------------------
-- Verify Chief Guest
SELECT * FROM public.chief_guest ORDER BY order_index;

-- Verify Guest of Honor
SELECT * FROM public.guest_of_honor ORDER BY order_index;

-- Verify Keynote Speakers
SELECT * FROM public.speakers WHERE session_type IS NOT NULL ORDER BY order_index;

-- Count records
SELECT 
    (SELECT COUNT(*) FROM public.chief_guest) as chief_guest_count,
    (SELECT COUNT(*) FROM public.guest_of_honor) as guest_of_honor_count,
    (SELECT COUNT(*) FROM public.speakers WHERE session_type IS NOT NULL) as keynote_speakers_count;
