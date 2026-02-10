-- ============================================================
-- KEYNOTE SPEAKERS DATA - ICASS 2026
-- ============================================================

-- First, add new columns to speakers table if they don't exist
ALTER TABLE public.speakers 
ADD COLUMN IF NOT EXISTS session_type TEXT,
ADD COLUMN IF NOT EXISTS participation_mode TEXT; -- 'Online' or 'Offline'

COMMENT ON COLUMN public.speakers.session_type IS 'Session type: Inaugural, Valedictory, etc.';
COMMENT ON COLUMN public.speakers.participation_mode IS 'Participation mode: Online or Offline';

-- Insert keynote speakers
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
);
