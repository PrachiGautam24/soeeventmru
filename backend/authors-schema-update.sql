-- ============================================================================
-- AUTHORS TABLE SCHEMA UPDATE
-- ============================================================================
-- This file adds missing columns (paper_id, participation_mode) to the authors table
-- Run this BEFORE inserting authors data
-- ============================================================================

-- Add paper_id column to store the paper/submission ID
ALTER TABLE public.authors 
ADD COLUMN IF NOT EXISTS paper_id INTEGER;

-- Add participation_mode column to store 'online' or 'offline'
ALTER TABLE public.authors 
ADD COLUMN IF NOT EXISTS participation_mode TEXT;

-- Add comments for new columns
COMMENT ON COLUMN public.authors.paper_id IS 'Paper submission ID';
COMMENT ON COLUMN public.authors.participation_mode IS 'Participation mode: online or offline';

-- Create index on paper_id for faster lookups
CREATE INDEX IF NOT EXISTS authors_paper_id_idx ON public.authors(paper_id);

-- Create index on participation_mode for filtering
CREATE INDEX IF NOT EXISTS authors_participation_mode_idx ON public.authors(participation_mode);

-- Verification query
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_schema = 'public'
    AND table_name = 'authors'
ORDER BY ordinal_position;
