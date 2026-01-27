-- ============================================================================
-- ICASS 2026 - COMPLETE DATABASE SETUP SCRIPT
-- ============================================================================
-- This is the master setup script that includes everything you need
-- Run this ONCE in your Supabase SQL Editor to set up the entire database
-- ============================================================================

-- STEP 1: Create all tables
-- ============================================================================

-- 1. Speakers Table
CREATE TABLE IF NOT EXISTS speakers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  title TEXT,
  organization TEXT,
  bio TEXT,
  image_url TEXT,
  twitter TEXT,
  linkedin TEXT,
  website TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Sessions Table
CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tracks Table
CREATE TABLE IF NOT EXISTS tracks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  description TEXT,
  topics TEXT[],
  color TEXT DEFAULT '#1E3A8A',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Patrons Table
CREATE TABLE IF NOT EXISTS patrons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  title TEXT,
  organization TEXT,
  category TEXT NOT NULL,
  image_url TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Organisers Table
CREATE TABLE IF NOT EXISTS organisers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  organization TEXT,
  email TEXT,
  phone TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Workshop Table
CREATE TABLE IF NOT EXISTS workshop (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  instructor_name TEXT,
  date DATE,
  start_time TIME,
  end_time TIME,
  duration_minutes INTEGER,
  location TEXT,
  max_participants INTEGER,
  topics TEXT[],
  prerequisites TEXT[],
  target_audience TEXT[],
  benefits TEXT[],
  registration_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Authors Table
CREATE TABLE IF NOT EXISTS authors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  affiliation TEXT,
  email TEXT,
  paper_title TEXT,
  track TEXT,
  country TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- STEP 2: Enable Row Level Security (RLS)
-- ============================================================================

ALTER TABLE speakers ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE patrons ENABLE ROW LEVEL SECURITY;
ALTER TABLE organisers ENABLE ROW LEVEL SECURITY;
ALTER TABLE workshop ENABLE ROW LEVEL SECURITY;
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;

-- STEP 3: Create RLS Policies (Public Read Access)
-- ============================================================================

-- Speakers policies
DROP POLICY IF EXISTS "Enable read access for all users" ON speakers;
CREATE POLICY "Enable read access for all users" ON speakers FOR SELECT USING (true);

-- Sessions policies
DROP POLICY IF EXISTS "Enable read access for all users" ON sessions;
CREATE POLICY "Enable read access for all users" ON sessions FOR SELECT USING (true);

-- Tracks policies
DROP POLICY IF EXISTS "Enable read access for all users" ON tracks;
CREATE POLICY "Enable read access for all users" ON tracks FOR SELECT USING (true);

-- Patrons policies
DROP POLICY IF EXISTS "Enable read access for all users" ON patrons;
CREATE POLICY "Enable read access for all users" ON patrons FOR SELECT USING (true);

-- Organisers policies
DROP POLICY IF EXISTS "Enable read access for all users" ON organisers;
CREATE POLICY "Enable read access for all users" ON organisers FOR SELECT USING (true);

-- Workshop policies
DROP POLICY IF EXISTS "Enable read access for all users" ON workshop;
CREATE POLICY "Enable read access for all users" ON workshop FOR SELECT USING (true);

-- Authors policies
DROP POLICY IF EXISTS "Enable read access for all users" ON authors;
CREATE POLICY "Enable read access for all users" ON authors FOR SELECT USING (true);

-- STEP 4: Create Indexes for Performance
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_speakers_order ON speakers(order_index);
CREATE INDEX IF NOT EXISTS idx_sessions_date ON sessions(date, start_time);
CREATE INDEX IF NOT EXISTS idx_tracks_code ON tracks(code);
CREATE INDEX IF NOT EXISTS idx_patrons_category ON patrons(category, order_index);
CREATE INDEX IF NOT EXISTS idx_organisers_role ON organisers(role, order_index);
CREATE INDEX IF NOT EXISTS idx_authors_track ON authors(track);
CREATE INDEX IF NOT EXISTS idx_authors_order ON authors(order_index);

-- ============================================================================
-- DATABASE SCHEMA CREATED SUCCESSFULLY!
-- ============================================================================
-- Now proceed to insert sample data using the individual SQL files:
-- 1. sample-data-tracks.sql
-- 2. sample-data-speakers.sql
-- 3. sample-data-sessions.sql
-- 4. sample-data-patrons.sql (included in supabase-schema.md)
-- 5. sample-data-organisers.sql
-- 6. sample-data-authors.sql
-- 7. sample-data-workshop.sql (included in supabase-schema.md)
-- ============================================================================
