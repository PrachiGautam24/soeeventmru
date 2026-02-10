-- ============================================================================
-- SCHEDULE UPDATE - ICASS 2026 (February 2026 revision)
-- ============================================================================
-- Run this against your Supabase database to apply all schedule changes.
-- Affects: schedule_events, session_papers, authors
-- ============================================================================

BEGIN;

-- ============================================================================
-- PART 1: SCHEDULE_EVENTS UPDATES
-- ============================================================================

-- 1. Session I LT10 (Day 1): Track changed from "Track-1/ Track-2" to "Track-1/ Track-2/ Track-7"
UPDATE public.schedule_events
SET
    title = 'Technical Session – I: Track-1/ Track-2/ Track-7 Offline',
    tracks = 'Track-1/ Track-2/ Track-7',
    updated_at = NOW()
WHERE id = 'a0000000-0001-4000-8000-000000000005';

-- 2. Session I LS09 (Day 1): Session chair name fix "Naresh Kumar" → "Naresh Sharma"
UPDATE public.schedule_events
SET
    session_chair = 'Prof Naresh Sharma, GD Goenka University, 9873669510, naresh.sharma2006@gmail.com, Dr Aradhna Dutt Johri, Galgotias University, 9711301327, aradhanadutt.jauhari@galgotiasuniversity.edu.in (offline)',
    updated_at = NOW()
WHERE id = 'a0000000-0001-4000-8000-000000000007';

-- 3. Session I LF09 (Day 1): Added second session chair (Prof Md Irfanul Hasan)
UPDATE public.schedule_events
SET
    session_chair = 'Dr Kaushal Kumar, Graphic Era University, Dehradun, +91-9997468929, kaushal1987@geu.ac.in, Prof Md Irfanul Hasan, Graphic Era University, +91 95575 09130, irfanhasan25@rediffmail.com (offline)',
    updated_at = NOW()
WHERE id = 'a0000000-0001-4000-8000-000000000010';

-- 4. Session II LF03 (Day 1): Track changed from "Track-4" to "Track-4/ Track-2"
UPDATE public.schedule_events
SET
    title = 'Technical Session – II: Track-4/ Track-2 Online',
    tracks = 'Track-4/ Track-2',
    updated_at = NOW()
WHERE id = 'a0000000-0001-4000-8000-000000000019';

-- 5. Session II LF10 (Day 1): Session chair completely changed
UPDATE public.schedule_events
SET
    session_chair = 'Dr Amrinder Kaur, Associate Professor, MRIIRS, amrinder.set@mriu.edu.in, 9990870253 (offline)',
    updated_at = NOW()
WHERE id = 'a0000000-0001-4000-8000-000000000021';

-- 6. Session II I Block Auditorium (Day 1): Session chair completely changed
UPDATE public.schedule_events
SET
    session_chair = 'Prof Mamta Dahiya, MRIIRS, 9996236339, mamtadahiya.set@mriu.edu.in (Offline)',
    updated_at = NOW()
WHERE id = 'a0000000-0001-4000-8000-000000000022';

-- 7. Session III LS03 (Day 2): Track changed from "Track-3" to "Track-3/ Track-1"
UPDATE public.schedule_events
SET
    title = 'Technical Session – III: Track-3/ Track-1 Offline',
    tracks = 'Track-3/ Track-1',
    updated_at = NOW()
WHERE id = 'a0000000-0002-4000-8000-000000000008';


-- ============================================================================
-- PART 2: SESSION_PAPERS UPDATES
-- ============================================================================

-- -------------------------------------------------------
-- 2A. Session I LT10 (id a0000000-0001-4000-8000-000000000005)
--     Remove paper 765, Add paper 1268 (track 7, offline)
-- -------------------------------------------------------

-- Remove paper 765 from Session I LT10
DELETE FROM public.session_papers
WHERE schedule_event_id = 'a0000000-0001-4000-8000-000000000005'
  AND paper_id = '765';

-- Add paper 1268 to Session I LT10
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index)
VALUES (
    'a0000000-0001-4000-8000-000000000005',
    '1268',
    'Lung Cancer Diagnosis- Visualizing Deep Learning Decision Pathway',
    'Osheen Sharma',
    '7',
    'offline',
    '01:10 PM - 01:30 PM',
    5
);

-- -------------------------------------------------------
-- 2B. Session I LS09 (id a0000000-0001-4000-8000-000000000007)
--     Added paper 259, removed paper 1268, timings shifted
-- -------------------------------------------------------

-- Delete all existing papers for this session (timings changed for most)
DELETE FROM public.session_papers
WHERE schedule_event_id = 'a0000000-0001-4000-8000-000000000007';

-- Re-insert with updated papers and timings
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000007', '65', 'Size and Strain Analysis of MgFe2O4 Obtained from Citric-acid Assisted Sol-gel route', 'Vinod Singh', '7', 'offline', '11:50 AM - 12:10 PM', 1),
('a0000000-0001-4000-8000-000000000007', '259', 'A STUDY ON MECHANICAL BEHAVIOUR OF TERNARY BLENDED GEOPOLYMER CONCRETE', 'Ayushi Gupta', '7', 'offline', '12:10 PM - 12:30 PM', 2),
('a0000000-0001-4000-8000-000000000007', '870', 'Synergistic Optimization of Piezoelectric Transducers', 'Pankaj Jha', '7', 'offline', '12:30 PM - 12:50 PM', 3),
('a0000000-0001-4000-8000-000000000007', '1099', 'Image Encryption and Decryption using AES and Pixel Shuffling Techniques', 'Dev Kumar Sharma', '7', 'offline', '12:50 PM - 01:10 PM', 4),
('a0000000-0001-4000-8000-000000000007', '1292', 'Synthesis of Ni-rich layered cathodes using Sol-gel Method', 'IFFAT KHAN', '7', 'offline', '01:10 PM - 01:30 PM', 5);

-- -------------------------------------------------------
-- 2C. Session II LF03 (id a0000000-0001-4000-8000-000000000019)
--     Add paper 765 (moved here from Session I LT10)
-- -------------------------------------------------------

INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index)
VALUES (
    'a0000000-0001-4000-8000-000000000019',
    '765',
    'Enhancing Hybrid Recommendation Systems with CUR-based Matrix Decomposition and Deep Neural Network Architectures for Consumer Behaviour Prediction',
    'Abhigyan',
    '2',
    'online',
    '04:40 PM - 05:00 PM',
    8
);

-- -------------------------------------------------------
-- 2D. Session III LS03 (id a0000000-0002-4000-8000-000000000008)
--     Add papers 1447, 1448 (Track-1, offline)
-- -------------------------------------------------------

INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0002-4000-8000-000000000008', '1447', 'Farmers'' Transition to Organic Farming: Assessing the Impact of Markets, Policies, and Environmental Awareness', 'Dixit Kalra', '1', 'offline', '12:55 PM - 01:15 PM', 6),
('a0000000-0002-4000-8000-000000000008', '1448', 'BUILDING A FINANCIALLY INCLUSIVE FUTURE: PATHWAYS TO LITERACY, RESILIENCE, AND SUSTAINABLE GROWTH', 'Dixit Kalra, Manisha Mittal', '1', 'offline', '01:15 PM - 01:35 PM', 7);


-- ============================================================================
-- PART 3: AUTHORS TABLE UPDATES
-- ============================================================================
-- Update session info for papers that moved or changed timings

-- 3A. Paper 765 moved from Session I LT10 → Session II LF03 (Track-2 Online)
UPDATE public.authors
SET
    timings = '04:40 PM - 05:00 PM',
    venue = 'LF03 (L Block)',
    session_name = 'Technical Session-II (02:20 PM - 05:10 PM)',
    session_chair = 'Prof Ashish Sachdeva, Maharishi Markandeshwar (Deemed to be University), Mullana',
    session_incharge = 'Dr Neetu Chauhan (9718238836), Dr Priyanka Bansal (9810907022)',
    updated_at = NOW()
WHERE paper_id = 765;

-- 3B. Paper 1268 moved from Session I LS09 → Session I LT10 (Track-7, Offline)
UPDATE public.authors
SET
    timings = '01:10 PM - 01:30 PM',
    venue = 'LT10 (L Block)',
    session_name = 'Technical Session-I (11:50 AM - 01:50 PM)',
    session_chair = 'Dr Vidhi Khanduja, Hansraj College, Delhi',
    session_incharge = 'Dr Deepti Thakral (9958200333), Dr Prinima Gupta (9971405007)',
    updated_at = NOW()
WHERE paper_id = 1268;

-- 3C. Paper 259 (NEW) - Session I LS09 Track-7 Offline
-- Only update if paper 259 already exists in authors table
UPDATE public.authors
SET
    timings = '12:10 PM - 12:30 PM',
    venue = 'LS09 (L Block)',
    session_name = 'Technical Session-I (11:50 AM - 01:50 PM)',
    session_chair = 'Prof Naresh Sharma, GD Goenka University, Dr Aradhna Dutt Johri, Galgotias University',
    session_incharge = 'Dr Jaiprakash Sorout (9711315173), Dr Vinayak Vandan (9870400874)',
    updated_at = NOW()
WHERE paper_id = 259;

-- 3D. Paper 870 timing changed in LS09 (12:10 PM → 12:30 PM)
UPDATE public.authors
SET
    timings = '12:30 PM - 12:50 PM',
    updated_at = NOW()
WHERE paper_id = 870;

-- 3E. Paper 1292 timing changed in LS09 (01:30 PM → 01:10 PM)
UPDATE public.authors
SET
    timings = '01:10 PM - 01:30 PM',
    updated_at = NOW()
WHERE paper_id = 1292;

-- 3F. Paper 1447 (NEW) - Session III LS03 Track-1 Offline
UPDATE public.authors
SET
    timings = '12:55 PM - 01:15 PM',
    venue = 'LS03 (L Block)',
    session_name = 'Technical Session-III (11:15 AM - 01:30 PM)',
    session_chair = 'Dr Rohit Tanwar, Shri Mata Vaishno Devi University',
    session_incharge = 'Dr Mamta Arora (9873599315), Dr Monika Garg (9650353336)',
    updated_at = NOW()
WHERE paper_id = 1447;

-- 3G. Paper 1448 (NEW) - Session III LS03 Track-1 Offline
UPDATE public.authors
SET
    timings = '01:15 PM - 01:35 PM',
    venue = 'LS03 (L Block)',
    session_name = 'Technical Session-III (11:15 AM - 01:30 PM)',
    session_chair = 'Dr Rohit Tanwar, Shri Mata Vaishno Devi University',
    session_incharge = 'Dr Mamta Arora (9873599315), Dr Monika Garg (9650353336)',
    updated_at = NOW()
WHERE paper_id = 1448;

-- 3H. Update session chairs in authors table for affected sessions

-- All papers in Session I LF09 (Track-5/Track-10): add second chair
UPDATE public.authors
SET
    session_chair = 'Dr Kaushal Kumar, Graphic Era University, Prof Md Irfanul Hasan, Graphic Era University',
    updated_at = NOW()
WHERE paper_id IN (610, 817, 1058, 1415, 1313);

-- All papers in Session II LF10 (Track-9/Track-12): chair changed
UPDATE public.authors
SET
    session_chair = 'Dr Amrinder Kaur, Associate Professor, MRIIRS',
    updated_at = NOW()
WHERE paper_id IN (279, 280, 583, 905, 1285, 1067);

-- All papers in Session II I Block Auditorium (Track-8): chair changed
UPDATE public.authors
SET
    session_chair = 'Prof Mamta Dahiya, MRIIRS',
    updated_at = NOW()
WHERE paper_id IN (76, 130, 163, 247, 307, 388, 424, 1089);

-- All papers in Session I LS09 (Track-7): chair name fix
UPDATE public.authors
SET
    session_chair = 'Prof Naresh Sharma, GD Goenka University, Dr Aradhna Dutt Johri, Galgotias University',
    updated_at = NOW()
WHERE paper_id IN (65, 259, 870, 1099, 1292);


-- ============================================================================
-- PART 4: SESSIONS TABLE UPDATES (used by Session Tracker page)
-- ============================================================================
-- Update the sessions table if it has corresponding entries

-- Update session chairs for affected sessions in the sessions table
UPDATE public.sessions
SET
    speaker_name = 'Prof Mamta Dahiya, MRIIRS',
    updated_at = NOW()
WHERE location = 'I Block Auditorium'
  AND date = '2026-02-12'
  AND session_type = 'Technical Session';

UPDATE public.sessions
SET
    speaker_name = 'Dr Amrinder Kaur, Associate Professor, MRIIRS',
    updated_at = NOW()
WHERE location LIKE '%LF10%'
  AND date = '2026-02-12'
  AND start_time >= '14:00:00';


COMMIT;

-- ============================================================================
-- VERIFICATION QUERIES (run these after to confirm changes)
-- ============================================================================

-- Verify schedule_events updates
SELECT id, title, tracks, session_chair
FROM public.schedule_events
WHERE id IN (
    'a0000000-0001-4000-8000-000000000005',
    'a0000000-0001-4000-8000-000000000007',
    'a0000000-0001-4000-8000-000000000010',
    'a0000000-0001-4000-8000-000000000019',
    'a0000000-0001-4000-8000-000000000021',
    'a0000000-0001-4000-8000-000000000022',
    'a0000000-0002-4000-8000-000000000008'
);

-- Verify Session I LS09 papers (should be 5 papers: 65, 259, 870, 1099, 1292)
SELECT paper_id, paper_title, author_name, timings, order_index
FROM public.session_papers
WHERE schedule_event_id = 'a0000000-0001-4000-8000-000000000007'
ORDER BY order_index;

-- Verify Session I LT10 papers (should have 1268, NOT 765)
SELECT paper_id, paper_title, author_name, timings
FROM public.session_papers
WHERE schedule_event_id = 'a0000000-0001-4000-8000-000000000005'
ORDER BY order_index;

-- Verify Session II LF03 papers (should have 765 at end)
SELECT paper_id, paper_title, author_name, timings
FROM public.session_papers
WHERE schedule_event_id = 'a0000000-0001-4000-8000-000000000019'
ORDER BY order_index;

-- Verify Session III LS03 papers (should have 1447, 1448 at end)
SELECT paper_id, paper_title, author_name, timings
FROM public.session_papers
WHERE schedule_event_id = 'a0000000-0002-4000-8000-000000000008'
ORDER BY order_index;

-- Verify moved papers in authors table
SELECT paper_id, name, timings, venue, session_name, session_chair
FROM public.authors
WHERE paper_id IN (765, 1268, 259, 870, 1292, 1447, 1448);
