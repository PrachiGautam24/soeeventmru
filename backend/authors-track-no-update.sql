-- ============================================================================
-- AUTHORS TRACK NUMBER UPDATE
-- ============================================================================
-- This file adds a track_no column to the authors table and populates it
-- with the numeric track identifier, while ensuring the track column 
-- stores the full track name.
--
-- Handles BOTH cases:
--   A) track column stores numbers (e.g., '1', '9') → copies to track_no, 
--      then updates track to the full name from the tracks table
--   B) track column already stores names → derives track_no from tracks table
-- ============================================================================

BEGIN;

-- ============================================================================
-- STEP 1: Add track_no column
-- ============================================================================
ALTER TABLE public.authors ADD COLUMN IF NOT EXISTS track_no TEXT;

COMMENT ON COLUMN public.authors.track_no IS 'Numeric track identifier (e.g., 1, 2, 9)';

-- ============================================================================
-- STEP 2A: If track stores numbers, copy to track_no first
-- ============================================================================
UPDATE public.authors 
SET track_no = track 
WHERE track ~ '^[0-9]+$' 
  AND track_no IS NULL;

-- ============================================================================
-- STEP 2B: Then update track from number → full name using tracks table
-- ============================================================================
UPDATE public.authors a
SET track = t.name
FROM public.tracks t
WHERE a.track ~ '^[0-9]+$' 
  AND (
    t.code = 'T' || a.track
    OR t.code = 'Track-' || a.track
  );

-- ============================================================================
-- STEP 3: If track already stores names, populate track_no from tracks table
-- ============================================================================
UPDATE public.authors a
SET track_no = regexp_replace(t.code, '[^0-9]', '', 'g')
FROM public.tracks t
WHERE a.track = t.name
  AND a.track_no IS NULL;

-- ============================================================================
-- VERIFICATION
-- ============================================================================
SELECT 
    paper_id,
    name,
    track_no,
    track
FROM public.authors
WHERE paper_id IS NOT NULL
ORDER BY CASE WHEN track_no ~ '^[0-9]+$' THEN CAST(track_no AS INTEGER) ELSE 999 END NULLS LAST, paper_id
LIMIT 30;

COMMIT;
