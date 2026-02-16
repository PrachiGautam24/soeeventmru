-- ============================================================
-- FINAL COMPLETE DATABASE SCHEMA
-- SOE Events MRU - ICASS 2026
-- ============================================================

-- ------------------------------------------------------------
-- 1. SPEAKERS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.speakers (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    title text,
    organization text,
    bio text,
    image_url text,
    twitter text,
    linkedin text,
    website text,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    session_type text,
    participation_mode text
);

COMMENT ON TABLE public.speakers IS 'Conference speakers and presenters';

-- ------------------------------------------------------------
-- 2. TRACKS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.tracks (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    code text NOT NULL UNIQUE,
    description text,
    topics ARRAY,
    color text DEFAULT '#1E3A8A'::text,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

COMMENT ON TABLE public.tracks IS 'Conference tracks and themes';

-- ------------------------------------------------------------
-- 3. SESSIONS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.sessions (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title text NOT NULL,
    description text,
    speaker_name text,
    date date NOT NULL,
    start_time time without time zone NOT NULL,
    end_time time without time zone NOT NULL,
    duration_minutes integer,
    location text,
    session_type text,
    track text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

COMMENT ON TABLE public.sessions IS 'Conference sessions and schedule';

-- ------------------------------------------------------------
-- 4. PATRONS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.patrons (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    designation text NOT NULL,
    category text NOT NULL,
    organization text NOT NULL,
    image_url text,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now())
);

COMMENT ON TABLE public.patrons IS 'Conference patrons and chairs';

-- ------------------------------------------------------------
-- 5. ORGANISERS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.organisers (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    role text NOT NULL,
    organization text,
    email text,
    phone text,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    image_url text
);

COMMENT ON TABLE public.organisers IS 'Conference organizing committee members';

-- ------------------------------------------------------------
-- 6. AUTHORS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.authors (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    affiliation text,
    email text,
    paper_title text,
    track text,
    country text,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    image_url text,
    paper_id integer,
    participation_mode text,
    timings text,
    session_chair text,
    session_incharge text,
    venue text,
    session_name text,
    track_no text
);

COMMENT ON TABLE public.authors IS 'Conference paper authors';

-- ------------------------------------------------------------
-- 7. SPONSORS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.sponsors (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    logo_url text,
    website text,
    description text,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now()
);

COMMENT ON TABLE public.sponsors IS 'Conference sponsors and partners';

-- ------------------------------------------------------------
-- 8. ATTENDANCE TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.attendance (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    timestamp timestamp with time zone NOT NULL DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);

COMMENT ON TABLE public.attendance IS 'Session attendance tracking';

-- ------------------------------------------------------------
-- 9. CHIEF GUEST TABLE (New)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.chief_guest (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    title text,
    organization text,
    bio text,
    image_url text,
    session_type text,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now())
);

COMMENT ON TABLE public.chief_guest IS 'Conference chief guests';

-- ------------------------------------------------------------
-- 10. GUEST OF HONOR TABLE (New)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.guest_of_honor (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    title text,
    organization text,
    bio text,
    image_url text,
    session_type text,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now())
);

COMMENT ON TABLE public.guest_of_honor IS 'Conference guests of honor';

-- ------------------------------------------------------------
-- 11. SCHEDULE EVENTS TABLE (New)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.schedule_events (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    day integer NOT NULL,
    date date NOT NULL,
    event_type text NOT NULL,
    title text NOT NULL,
    description text,
    start_time text NOT NULL,
    end_time text,
    venue text,
    session_name text,
    tracks text,
    mode text,
    session_chair text,
    session_incharge text,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now())
);

COMMENT ON TABLE public.schedule_events IS 'Detailed conference schedule events';

-- ------------------------------------------------------------
-- 12. SESSION PAPERS TABLE (New)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.session_papers (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    schedule_event_id uuid NOT NULL,
    paper_id text NOT NULL,
    paper_title text NOT NULL,
    author_name text NOT NULL,
    track_number text,
    online_offline text,
    timings text,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT session_papers_schedule_event_id_fkey FOREIGN KEY (schedule_event_id) REFERENCES public.schedule_events(id)
);

COMMENT ON TABLE public.session_papers IS 'Papers presented within schedule sessions';


-- ============================================================
-- PART 3: ENABLE ROW LEVEL SECURITY (RLS)
-- ============================================================

ALTER TABLE public.speakers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.patrons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organisers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chief_guest ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guest_of_honor ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.schedule_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.session_papers ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- PART 4: CREATE RLS POLICIES (Public Read Access)
-- ============================================================

-- Drop existing policies if they exist (to ensure clean slate for new tables too)
DROP POLICY IF EXISTS "Enable read access for all users" ON public.speakers;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.tracks;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.sessions;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.patrons;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.organisers;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.authors;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.sponsors;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.attendance;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.chief_guest;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.guest_of_honor;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.schedule_events;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.session_papers;

-- Create new public read policies
CREATE POLICY "Enable read access for all users" ON public.speakers FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.tracks FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.sessions FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.patrons FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.organisers FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.authors FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.sponsors FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.attendance FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.chief_guest FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.guest_of_honor FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.schedule_events FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.session_papers FOR SELECT USING (true);

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

-- Authors indexes
CREATE INDEX IF NOT EXISTS authors_name_idx ON public.authors(name);
CREATE INDEX IF NOT EXISTS authors_email_idx ON public.authors(email);
CREATE INDEX IF NOT EXISTS authors_order_idx ON public.authors(order_index);
CREATE INDEX IF NOT EXISTS authors_track_idx ON public.authors(track);
CREATE INDEX IF NOT EXISTS authors_paper_id_idx ON public.authors(paper_id);

-- Sponsors indexes
CREATE INDEX IF NOT EXISTS sponsors_order_idx ON public.sponsors(order_index);

-- Attendance indexes
CREATE INDEX IF NOT EXISTS attendance_timestamp_idx ON public.attendance(timestamp);
CREATE INDEX IF NOT EXISTS attendance_name_idx ON public.attendance(name);

-- Chief Guest indexes
CREATE INDEX IF NOT EXISTS chief_guest_order_idx ON public.chief_guest(order_index);

-- Guest of Honor indexes
CREATE INDEX IF NOT EXISTS guest_of_honor_order_idx ON public.guest_of_honor(order_index);

-- Schedule Events indexes
CREATE INDEX IF NOT EXISTS schedule_events_day_idx ON public.schedule_events(day);
CREATE INDEX IF NOT EXISTS schedule_events_date_idx ON public.schedule_events(date);
CREATE INDEX IF NOT EXISTS schedule_events_order_idx ON public.schedule_events(order_index);

-- Session Papers indexes
CREATE INDEX IF NOT EXISTS session_papers_schedule_id_idx ON public.session_papers(schedule_event_id);
CREATE INDEX IF NOT EXISTS session_papers_paper_id_idx ON public.session_papers(paper_id);
