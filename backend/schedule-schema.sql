-- ============================================================
-- SCHEDULE TABLES SCHEMA
-- SOE Events MRU - ICASS 2026
-- Two new tables: schedule_events + session_papers
-- ============================================================

-- Drop existing tables if they exist (for clean setup)
DROP TABLE IF EXISTS public.session_papers CASCADE;
DROP TABLE IF EXISTS public.schedule_events CASCADE;

-- ------------------------------------------------------------
-- 1. SCHEDULE_EVENTS TABLE
-- Stores all schedule items: registration, ceremonies, breaks,
-- technical sessions, talks, cultural events, etc.
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.schedule_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    day INTEGER NOT NULL,                -- 1 or 2
    date DATE NOT NULL,
    event_type TEXT NOT NULL,            -- 'registration', 'ceremony', 'high_tea', 'technical_session', 'lunch', 'tea_break', 'plenary', 'valedictory', 'cultural', 'talk', 'certificate'
    title TEXT NOT NULL,
    description TEXT,                    -- For ceremonies: sub-events list; for others: additional info
    start_time TEXT NOT NULL,
    end_time TEXT,
    venue TEXT,
    session_name TEXT,                   -- e.g., 'Technical Session – I', 'Technical Session – II'
    tracks TEXT,                         -- e.g., 'Track-1', 'Track-1/ Track-2'
    mode TEXT,                           -- 'Online', 'Offline', 'Offline/Online'
    session_chair TEXT,
    session_incharge TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE public.schedule_events IS 'Complete conference schedule events';
COMMENT ON COLUMN public.schedule_events.day IS 'Conference day: 1 or 2';
COMMENT ON COLUMN public.schedule_events.event_type IS 'Type: registration, ceremony, high_tea, technical_session, lunch, tea_break, plenary, valedictory, cultural, talk, certificate';
COMMENT ON COLUMN public.schedule_events.session_name IS 'Parent session name for technical sessions';
COMMENT ON COLUMN public.schedule_events.tracks IS 'Track identifier(s) for technical sessions';
COMMENT ON COLUMN public.schedule_events.mode IS 'Online/Offline/Mixed for technical sessions';

-- ------------------------------------------------------------
-- 2. SESSION_PAPERS TABLE
-- Stores individual papers within technical sessions
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.session_papers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    schedule_event_id UUID NOT NULL REFERENCES public.schedule_events(id) ON DELETE CASCADE,
    paper_id TEXT NOT NULL,
    paper_title TEXT NOT NULL,
    author_name TEXT NOT NULL,
    track_number TEXT,
    online_offline TEXT,
    timings TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE public.session_papers IS 'Papers presented in technical sessions';
COMMENT ON COLUMN public.session_papers.schedule_event_id IS 'FK to the parent technical session event';
COMMENT ON COLUMN public.session_papers.paper_id IS 'Paper ID number';
COMMENT ON COLUMN public.session_papers.track_number IS 'Track number for this paper';
COMMENT ON COLUMN public.session_papers.online_offline IS 'Presentation mode: online or offline';
COMMENT ON COLUMN public.session_papers.timings IS 'Presentation time slot';

-- ------------------------------------------------------------
-- INDEXES
-- ------------------------------------------------------------
CREATE INDEX idx_schedule_events_day ON public.schedule_events(day);
CREATE INDEX idx_schedule_events_order ON public.schedule_events(order_index);
CREATE INDEX idx_session_papers_event ON public.session_papers(schedule_event_id);
CREATE INDEX idx_session_papers_order ON public.session_papers(order_index);

-- ------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS)
-- ------------------------------------------------------------
ALTER TABLE public.schedule_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.session_papers ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access on schedule_events"
    ON public.schedule_events FOR SELECT
    USING (true);

CREATE POLICY "Allow public read access on session_papers"
    ON public.session_papers FOR SELECT
    USING (true);

-- Allow authenticated insert/update/delete
CREATE POLICY "Allow authenticated insert on schedule_events"
    ON public.schedule_events FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated update on schedule_events"
    ON public.schedule_events FOR UPDATE
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated delete on schedule_events"
    ON public.schedule_events FOR DELETE
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated insert on session_papers"
    ON public.session_papers FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated update on session_papers"
    ON public.session_papers FOR UPDATE
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated delete on session_papers"
    ON public.session_papers FOR DELETE
    TO authenticated
    USING (true);
