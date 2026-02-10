-- ============================================================================
-- FIX DAY 2 TIMINGS - UPDATE "12 Feb" to "13 Feb" FOR SESSION III PAPERS
-- ============================================================================
-- DAY 1 (12 Feb): Technical Session I (11:50 AM - 01:50 PM) & Session II (02:20 PM - 05:10 PM)
-- DAY 2 (13 Feb): Technical Session III (11:15 AM - 01:30 PM)
--
-- All Technical Session III paper_ids currently show "12 Feb" in timings
-- but should show "13 Feb" since they are on Day 2 (Friday, 13 February 2026)
-- ============================================================================

-- Update all Day 2 (Technical Session III) papers: replace "12 Feb" with "13 Feb"
UPDATE public.authors
SET timings = REPLACE(timings, '12 Feb', '13 Feb')
WHERE paper_id IN (
    -- Technical Session III - Track-1/Track-5 Online - LT03 (L Block)
    1439,   -- Annette Nayana Nellyet
    1441,   -- Dr.R.Naveenkumar
    1443,   -- Diksha
    1450,   -- S.Prabu
    1453,   -- Saloni Manhas
    550,    -- Surbhi
    986,    -- Prasanth K

    -- Technical Session III - Track-1 Offline - LT10 (L Block)
    1209,   -- Yuvraj Rajni Sachin. Deshmukh
    1210,   -- Shlok Burmi / Sujal Kishore
    1309,   -- Priyanka Singh
    1471,   -- Ranveer Chauhan
    1472,   -- Anmol Bansal
    1474,   -- Jaspreeti Singh

    -- Technical Session III - Track-4/Track-2/Track-1 Online - LS10 (L Block)
    942,    -- Kirandeep Kaur
    990,    -- Neelam Deepthi Sree
    1035,   -- Manoj Mysore Veere Gowda
    1093,   -- Nandan Vaid
    1397,   -- Pallavi Semwal
    1299,   -- Shri Krishna Mishra
    1475,   -- Punit Kumar

    -- Technical Session III - Track-9 Offline - LS09 (L Block)
    216,    -- Rishav Raj et al.
    234,    -- Bhagrajyoti Behera
    864,    -- Tushar Verma
    934,    -- Nischay Rana
    1010,   -- Raj Singh

    -- Technical Session III - Track-3 Offline - LS03 (L Block)
    61,     -- Deepika Bansal
    1219,   -- Preeti Sethi
    1278,   -- Priyanshi Sharma
    1394,   -- Raghvendra Kumar Jha
    1449,   -- Neha Chaudhary

    -- Technical Session III - Track-1/Track-6 Online - LF03 (L Block)
    1456,   -- Dr.R.Naveenkumar
    1457,   -- Parul
    1459,   -- Richa
    1460,   -- Saumya Goyal
    787,    -- Kumar Abhinav
    1310,   -- Ashish

    -- Technical Session III - Track-11/Track-12 Online - LF10 (L Block)
    422,    -- Angulakshmi M
    595,    -- B.Umakanth
    789,    -- Shashank Gupta
    1406,   -- Sk Wasim Haidar
    761,    -- Prachur Gupta
    977,    -- Sai Geethika Kolanupaka
    1435,   -- Bhavik Uppal

    -- Technical Session III - Track-8/Track-3 Online - I Block Auditorium
    805,    -- Yuvi
    826,    -- Riya Karmakar
    1008,   -- Anuj Kumar Jain
    1009,   -- Anuj Kumar Jain
    1011,   -- Bhavneet Kaur
    1139,   -- Shivani Tufchi

    -- Technical Session III - Track-1/Track-7 Online - CADR Room G Block Basement
    176,    -- Vipasha Abrol
    1296,   -- Vaibhav Kansal
    1417,   -- Tanushka Verma
    1432,   -- Savita Sharma / Sunanda / Dr. Sakshi Arora
    1461,   -- Jyoti Rani
    890     -- Sachin Choudhary
);

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Check Day 2 papers now show "13 Feb"
SELECT paper_id, name, timings, session_name
FROM public.authors
WHERE paper_id IN (
    1439, 1441, 1443, 1450, 1453, 550, 986,
    1209, 1210, 1309, 1471, 1472, 1474,
    942, 990, 1035, 1093, 1397, 1299, 1475,
    216, 234, 864, 934, 1010,
    61, 1219, 1278, 1394, 1449,
    1456, 1457, 1459, 1460, 787, 1310,
    422, 595, 789, 1406, 761, 977, 1435,
    805, 826, 1008, 1009, 1011, 1139,
    176, 1296, 1417, 1432, 1461, 890
)
ORDER BY paper_id;

-- Summary: Count papers by date
SELECT 
    CASE 
        WHEN timings LIKE '12 Feb%' THEN 'Day 1 (12 Feb)'
        WHEN timings LIKE '13 Feb%' THEN 'Day 2 (13 Feb)'
        ELSE 'Unknown'
    END as conference_day,
    COUNT(*) as paper_count
FROM public.authors
WHERE timings IS NOT NULL
GROUP BY conference_day
ORDER BY conference_day;
