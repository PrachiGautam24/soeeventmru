-- ============================================================
-- FIX DATA ISSUES - ICASS 2026
-- Run this on the live Supabase database to fix 7 identified issues
-- ============================================================

BEGIN;

-- ============================================================
-- FIX 1: Paper 887 - Author name is an email address
-- Should be "SAMARTH DHIMAN" not "YUVRAJ.DESHMUKH23@ST.NIITUNIVERSITY.IN"
-- ============================================================
UPDATE public.authors 
SET name = 'SAMARTH DHIMAN'
WHERE paper_id = '887' AND name = 'YUVRAJ.DESHMUKH23@ST.NIITUNIVERSITY.IN';

-- ============================================================
-- FIX 2: Paper 1292 (IFFAT KHAN) - Timings missing date prefix
-- Should be "12 Feb | 01:10 PM - 01:30 PM"
-- ============================================================
UPDATE public.authors 
SET timings = '12 Feb | 01:10 PM - 01:30 PM'
WHERE paper_id = '1292' AND name = 'IFFAT KHAN';

-- ============================================================
-- FIX 3: SUNANDA - Wrong paper_id (1432 → 1417)
-- She is a co-author of SkillMitra (paper 1417), not paper 1432
-- ============================================================
UPDATE public.authors 
SET paper_id = '1417'
WHERE name = 'SUNANDA' AND paper_id = '1432' 
  AND paper_title LIKE 'SkillMitra%';

-- ============================================================
-- FIX 4: DR. SAKSHI ARORA - Wrong paper_id (1432 → 1417)
-- She is a co-author of SkillMitra (paper 1417), not paper 1432
-- ============================================================
UPDATE public.authors 
SET paper_id = '1417'
WHERE name = 'DR. SAKSHI ARORA' AND paper_id = '1432' 
  AND paper_title LIKE 'SkillMitra%';

-- ============================================================
-- FIX 5: Paper 421 (Dr. Aneesya Panicker) - Wrong mode in session_papers
-- Schedule says "online" but session_papers has "offline"
-- ============================================================
UPDATE public.session_papers 
SET online_offline = 'online'
WHERE paper_id = '421' AND author_name = 'Dr. Aneesya Panicker';

-- ============================================================
-- FIX 6: CADR Room Session I - Missing second session chair
-- Only had "Prof Aanjey Mani Tripathi" — adding "Dr Sonia Setia"
-- Papers: 79, 210, 262, 829, 103, 992
-- ============================================================
UPDATE public.authors 
SET session_chair = 'Prof Aanjey Mani Tripathi, Galgotias University, 919807978299, Dr Sonia Setia, Galgotias University, 8383007704'
WHERE paper_id IN ('79', '210', '262', '829', '103', '992');

-- ============================================================
-- FIX 7: LF09 Session II - Missing second session chair
-- Only had "Dr Kushagra Agrawal" — adding "Ms Shaveta Jain"
-- Papers: 150, 844, 845, 1020, 1203
-- ============================================================
UPDATE public.authors 
SET session_chair = 'Dr Kushagra Agrawal, MRIIRS, 91-9996185556, Ms Shaveta Jain, MRIIRS, 91-7018613431'
WHERE paper_id IN ('150', '844', '845', '1020', '1203');

COMMIT;

-- ============================================================
-- VERIFICATION: Check all fixes applied correctly
-- ============================================================
SELECT 'Fix 1 - Paper 887' AS fix, name, paper_id FROM public.authors WHERE paper_id = '887';
SELECT 'Fix 2 - Paper 1292' AS fix, name, timings FROM public.authors WHERE paper_id = '1292';
SELECT 'Fix 3 - SUNANDA' AS fix, name, paper_id, paper_title FROM public.authors WHERE name = 'SUNANDA';
SELECT 'Fix 4 - DR. SAKSHI ARORA' AS fix, name, paper_id, paper_title FROM public.authors WHERE name = 'DR. SAKSHI ARORA';
SELECT 'Fix 5 - Paper 421' AS fix, author_name, online_offline FROM public.session_papers WHERE paper_id = '421';
SELECT 'Fix 6 - CADR Room chairs' AS fix, paper_id, session_chair FROM public.authors WHERE paper_id IN ('79', '210', '262', '829', '103', '992');
SELECT 'Fix 7 - LF09 Session II chairs' AS fix, paper_id, session_chair FROM public.authors WHERE paper_id IN ('150', '844', '845', '1020', '1203');
