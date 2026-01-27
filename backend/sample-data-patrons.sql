-- ============================================================================
-- ICASS 2026 - Sample Patrons Data
-- ============================================================================
-- This file contains sample data for the patrons table
-- Run this SQL in your Supabase SQL Editor after creating the schema
-- ============================================================================

-- Insert Sample Patrons
INSERT INTO patrons (name, title, organization, category, image_url, order_index) VALUES

-- Chief Patrons
(
  'Dr. Prashant Bhalla',
  'President',
  'Manav Rachna Educational Institutions',
  'Chief Patron',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=prashant',
  1
),
(
  'Dr. Amit Bhalla',
  'Vice President',
  'Manav Rachna Educational Institutions',
  'Chief Patron',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=amit',
  2
),

-- Patrons
(
  'Dr. N.C. Wadhwa',
  'Vice Chancellor',
  'Manav Rachna International Institute of Research and Studies',
  'Patron',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=ncwadhwa',
  3
),
(
  'Dr. Sanjay Srivastava',
  'Vice Chancellor',
  'Manav Rachna University',
  'Patron',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=sanjay',
  4
),

-- General Chair
(
  'Dr. Deepak Garg',
  'Director, Bennett University',
  'Bennett University',
  'General Chair',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=deepak',
  5
),
(
  'Prof. Vijay Kumar',
  'Dean, School of Engineering',
  'IIT Delhi',
  'General Chair',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=vijay',
  6
),

-- Conference Chair
(
  'Dr. Ritu Sibal',
  'Dean, Faculty of Engineering & Technology',
  'Manav Rachna University',
  'Conference Chair',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=ritu',
  7
),
(
  'Dr. Anand Nayyar',
  'Professor & Head, CSE Department',
  'Manav Rachna University',
  'Conference Chair',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=anand',
  8
),

-- Technical Program Chair
(
  'Dr. Mukesh Kumar',
  'Professor, Computer Science',
  'IIT Roorkee',
  'Technical Program Chair',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=mukesh',
  9
),
(
  'Dr. Preeti Nagrath',
  'Associate Professor, CSE',
  'Bharati Vidyapeeth University',
  'Technical Program Chair',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=preeti',
  10
);

-- Verify the insert
SELECT COUNT(*) as total_patrons FROM patrons;
SELECT category, COUNT(*) as patrons_per_category FROM patrons GROUP BY category ORDER BY category;

-- ============================================================================
-- End of Sample Patrons Data
-- ============================================================================
