-- ============================================================================
-- ICASS 2026 - Sample Organisers Data
-- ============================================================================
-- This file contains sample data for the organisers table
-- Run this SQL in your Supabase SQL Editor after creating the schema
-- ============================================================================

-- Insert Sample Organisers
INSERT INTO organisers (name, role, organization, email, phone, order_index) VALUES

-- Core Organizing Committee
(
  'Dr. Shalini Sharma',
  'Convener',
  'Department of CSE, Manav Rachna University',
  'shalini@mru.edu.in',
  '+91-129-4198000',
  1
),
(
  'Dr. Rajesh Verma',
  'Co-Convener',
  'Department of CSE, Manav Rachna University',
  'rajesh.verma@mru.edu.in',
  '+91-129-4198001',
  2
),
(
  'Prof. Meera Gupta',
  'Organizing Secretary',
  'Department of CSE, Manav Rachna University',
  'meera.gupta@mru.edu.in',
  '+91-129-4198002',
  3
),

-- Technical Committee
(
  'Dr. Amit Kumar',
  'Technical Program Chair',
  'Department of CSE, Manav Rachna University',
  'amit.kumar@mru.edu.in',
  '+91-129-4198010',
  4
),
(
  'Dr. Pooja Singh',
  'Publications Chair',
  'Department of CSE, Manav Rachna University',
  'pooja.singh@mru.edu.in',
  '+91-129-4198011',
  5
),
(
  'Dr. Nikhil Rao',
  'Workshop Coordinator',
  'Department of CSE, Manav Rachna University',
  'nikhil.rao@mru.edu.in',
  '+91-129-4198012',
  6
),

-- Registration & Hospitality
(
  'Ms. Priya Malhotra',
  'Registration Chair',
  'Department of CSE, Manav Rachna University',
  'priya.malhotra@mru.edu.in',
  '+91-129-4198020',
  7
),
(
  'Mr. Rahul Khanna',
  'Hospitality Chair',
  'Department of CSE, Manav Rachna University',
  'rahul.khanna@mru.edu.in',
  '+91-129-4198021',
  8
),
(
  'Ms. Ananya Reddy',
  'Travel & Accommodation',
  'Department of CSE, Manav Rachna University',
  'ananya.reddy@mru.edu.in',
  '+91-129-4198022',
  9
),

-- Publicity & Communications
(
  'Dr. Vikram Singh',
  'Publicity Chair',
  'Department of CSE, Manav Rachna University',
  'vikram.singh@mru.edu.in',
  '+91-129-4198030',
  10
),
(
  'Ms. Sneha Kapoor',
  'Social Media Coordinator',
  'Department of CSE, Manav Rachna University',
  'sneha.kapoor@mru.edu.in',
  '+91-129-4198031',
  11
),
(
  'Mr. Karthik Iyer',
  'Website Manager',
  'Department of CSE, Manav Rachna University',
  'karthik.iyer@mru.edu.in',
  '+91-129-4198032',
  12
),

-- Sponsorship & Finance
(
  'Prof. Arvind Sharma',
  'Sponsorship Chair',
  'Manav Rachna University',
  'arvind.sharma@mru.edu.in',
  '+91-129-4198040',
  13
),
(
  'Dr. Sunita Desai',
  'Finance Coordinator',
  'Manav Rachna University',
  'sunita.desai@mru.edu.in',
  '+91-129-4198041',
  14
),

-- Student Volunteers
(
  'Mr. Aditya Verma',
  'Student Volunteer Head',
  'B.Tech CSE, Manav Rachna University',
  'aditya.verma@students.mru.edu.in',
  '+91-98765-43210',
  15
),
(
  'Ms. Riya Sharma',
  'Student Volunteer',
  'B.Tech CSE, Manav Rachna University',
  'riya.sharma@students.mru.edu.in',
  '+91-98765-43211',
  16
),
(
  'Mr. Aryan Gupta',
  'Student Volunteer',
  'B.Tech CSE, Manav Rachna University',
  'aryan.gupta@students.mru.edu.in',
  '+91-98765-43212',
  17
);

-- Verify the insert
SELECT COUNT(*) as total_organisers FROM organisers;
SELECT role, COUNT(*) as organisers_per_role FROM organisers GROUP BY role ORDER BY role;

-- ============================================================================
-- End of Sample Organisers Data
-- ============================================================================
