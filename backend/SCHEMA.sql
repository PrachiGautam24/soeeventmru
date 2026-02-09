-- ============================================================
-- FINAL COMPLETE DATABASE SCHEMA
-- SOE Events MRU - ICASS 2026
-- ============================================================

-- ------------------------------------------------------------
-- 1. SPEAKERS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.speakers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    title TEXT,
    organization TEXT,
    bio TEXT,
    image_url TEXT,
    twitter TEXT,
    linkedin TEXT,
    website TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE public.speakers IS 'Conference speakers and presenters';
COMMENT ON COLUMN public.speakers.title IS 'Job title or designation';
COMMENT ON COLUMN public.speakers.order_index IS 'Display order (lower numbers first)';

-- ------------------------------------------------------------
-- 2. TRACKS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.tracks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    code TEXT NOT NULL,
    description TEXT,
    topics TEXT[] DEFAULT '{}',
    color TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE public.tracks IS 'Conference tracks and themes';
COMMENT ON COLUMN public.tracks.code IS 'Short code identifier (e.g., T1, T2)';
COMMENT ON COLUMN public.tracks.topics IS 'Array of topics covered in this track';
COMMENT ON COLUMN public.tracks.color IS 'Hex color code for UI display';

-- ------------------------------------------------------------
-- 3. SESSIONS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    speaker_name TEXT,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    duration_minutes INTEGER,
    location TEXT,
    session_type TEXT,
    track TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE public.sessions IS 'Conference sessions and schedule';
COMMENT ON COLUMN public.sessions.speaker_name IS 'Session chair or speaker name (stored as text)';
COMMENT ON COLUMN public.sessions.session_type IS 'Type: Technical Session, Plenary, Keynote, Workshop, etc.';
COMMENT ON COLUMN public.sessions.track IS 'Track identifier (can be multiple: "Track 1, 2")';

-- ------------------------------------------------------------
-- 4. PATRONS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.patrons (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    title TEXT,
    organization TEXT,
    category TEXT NOT NULL,
    image_url TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE public.patrons IS 'Conference patrons and chairs';
COMMENT ON COLUMN public.patrons.title IS 'Job title or designation';
COMMENT ON COLUMN public.patrons.category IS 'Patron category: Chief Patron(s), Patron(s), General Chair, etc.';

-- ------------------------------------------------------------
-- 5. ORGANISERS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.organisers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    organization TEXT,
    email TEXT,
    phone TEXT,
    image_url TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE public.organisers IS 'Conference organizing committee members';
COMMENT ON COLUMN public.organisers.role IS 'Committee role: Registration Committee, Finance Committee, etc.';

-- ------------------------------------------------------------
-- 6. WORKSHOP TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.workshop (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    instructor_name TEXT,
    date DATE,
    start_time TIME,
    end_time TIME,
    duration_minutes INTEGER,
    location TEXT,
    max_participants INTEGER,
    topics TEXT[] DEFAULT '{}',
    prerequisites TEXT[] DEFAULT '{}',
    target_audience TEXT[] DEFAULT '{}',
    benefits TEXT[] DEFAULT '{}',
    registration_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE public.workshop IS 'Pre-conference workshops';
COMMENT ON COLUMN public.workshop.topics IS 'Array of topics covered in workshop';
COMMENT ON COLUMN public.workshop.prerequisites IS 'Array of prerequisite requirements';
COMMENT ON COLUMN public.workshop.target_audience IS 'Array of target audience types';
COMMENT ON COLUMN public.workshop.benefits IS 'Array of participant benefits';

-- ------------------------------------------------------------
-- 7. AUTHORS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.authors (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    affiliation TEXT,
    email TEXT,
    paper_title TEXT,
    track TEXT,
    country TEXT,
    image_url TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE public.authors IS 'Conference paper authors';
COMMENT ON COLUMN public.authors.track IS 'Paper track identifier';

-- ------------------------------------------------------------
-- 8. SPONSORS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.sponsors (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    logo_url TEXT,
    website TEXT,
    description TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE public.sponsors IS 'Conference sponsors and partners';
COMMENT ON COLUMN public.sponsors.order_index IS 'Display order for sponsor tiers';

-- ------------------------------------------------------------
-- 9. ATTENDANCE TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.attendance (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE public.attendance IS 'Session attendance tracking';

-- ============================================================
-- PART 3: ENABLE ROW LEVEL SECURITY (RLS)
-- ============================================================

ALTER TABLE public.speakers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.patrons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organisers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workshop ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendance ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- PART 4: CREATE RLS POLICIES (Public Read Access)
-- ============================================================

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable read access for all users" ON public.speakers;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.tracks;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.sessions;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.patrons;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.organisers;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.workshop;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.authors;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.sponsors;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.attendance;

-- Create new public read policies
CREATE POLICY "Enable read access for all users" ON public.speakers 
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON public.tracks 
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON public.sessions 
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON public.patrons 
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON public.organisers 
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON public.workshop 
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON public.authors 
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON public.sponsors 
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON public.attendance 
    FOR SELECT USING (true);

-- ============================================================
-- PART 5: CREATE PERFORMANCE INDEXES
-- ============================================================

-- Speakers indexes
CREATE INDEX IF NOT EXISTS speakers_order_idx ON public.speakers(order_index);
CREATE INDEX IF NOT EXISTS speakers_name_idx ON public.speakers(name);

-- Tracks indexes
CREATE INDEX IF NOT EXISTS tracks_order_idx ON public.tracks(order_index);
CREATE INDEX IF NOT EXISTS tracks_code_idx ON public.tracks(code);

-- Sessions indexes
CREATE INDEX IF NOT EXISTS sessions_date_idx ON public.sessions(date, start_time);
CREATE INDEX IF NOT EXISTS sessions_type_idx ON public.sessions(session_type);
CREATE INDEX IF NOT EXISTS sessions_track_idx ON public.sessions(track);

-- Patrons indexes
CREATE INDEX IF NOT EXISTS patrons_category_idx ON public.patrons(category);
CREATE INDEX IF NOT EXISTS patrons_order_idx ON public.patrons(order_index);

-- Organisers indexes
CREATE INDEX IF NOT EXISTS organisers_role_idx ON public.organisers(role);
CREATE INDEX IF NOT EXISTS organisers_order_idx ON public.organisers(order_index);

-- Workshop indexes
CREATE INDEX IF NOT EXISTS workshop_date_idx ON public.workshop(date);

-- Authors indexes
CREATE INDEX IF NOT EXISTS authors_name_idx ON public.authors(name);
CREATE INDEX IF NOT EXISTS authors_email_idx ON public.authors(email);
CREATE INDEX IF NOT EXISTS authors_order_idx ON public.authors(order_index);
CREATE INDEX IF NOT EXISTS authors_track_idx ON public.authors(track);

-- Sponsors indexes
CREATE INDEX IF NOT EXISTS sponsors_order_idx ON public.sponsors(order_index);

-- Attendance indexes
CREATE INDEX IF NOT EXISTS attendance_timestamp_idx ON public.attendance(timestamp);
CREATE INDEX IF NOT EXISTS attendance_name_idx ON public.attendance(name);

-- ============================================================
-- PART 6: VERIFICATION QUERIES (Optional)
-- ============================================================

-- Check all tables exist
SELECT 
    schemaname,
    tablename,
    tableowner
FROM pg_tables 
WHERE schemaname = 'public'
    AND tablename IN ('speakers', 'tracks', 'sessions', 'patrons', 'organisers', 'workshop', 'authors', 'sponsors', 'attendance')
ORDER BY tablename;

-- Check all indexes exist
SELECT 
    schemaname,
    tablename,
    indexname
FROM pg_indexes 
WHERE schemaname = 'public'
    AND tablename IN ('speakers', 'tracks', 'sessions', 'patrons', 'organisers', 'workshop', 'authors', 'sponsors', 'attendance')
ORDER BY tablename, indexname;

-- Check all RLS policies exist
SELECT 
    schemaname,
    tablename,
    policyname,
    cmd,
    qual
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename;
