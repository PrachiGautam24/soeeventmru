-- ============================================================================
-- ICASS 2026 - Sample Workshop Data
-- ============================================================================
-- This file contains sample data for the workshop table
-- Run this SQL in your Supabase SQL Editor after creating the schema
-- ============================================================================

-- Insert Pre-Conference Workshop
INSERT INTO workshop (
  title, 
  description, 
  instructor_name, 
  date, 
  start_time, 
  end_time, 
  duration_minutes, 
  location, 
  max_participants,
  topics,
  prerequisites,
  target_audience,
  benefits,
  registration_url
) VALUES (
  'Quantum Computing: From Theory to Practice',
  'An intensive hands-on workshop on quantum computing fundamentals, quantum algorithms, and their practical applications. Participants will learn about quantum gates, quantum circuits, and how to program quantum computers using Qiskit. The workshop includes live demonstrations and coding exercises on IBM Quantum Experience platform.',
  'Prof. Anita Sharma',
  '2026-02-11',
  '09:00',
  '17:00',
  480,
  'MRU Innovation Lab, Block C',
  50,
  ARRAY[
    'Introduction to Quantum Mechanics for Computing',
    'Quantum Gates and Quantum Circuits',
    'Quantum Algorithms (Grover, Shor)',
    'Quantum Programming with Qiskit',
    'Quantum Machine Learning Basics',
    'Quantum Cryptography and Security',
    'Hands-on: Building Quantum Circuits',
    'Real-world Quantum Computing Applications',
    'Quantum Computing in Drug Discovery',
    'Future of Quantum Computing'
  ],
  ARRAY[
    'Basic understanding of linear algebra',
    'Familiarity with Python programming',
    'Laptop with internet connection',
    'IBM Quantum Experience account (free)',
    'Basic knowledge of classical computing'
  ],
  ARRAY[
    'Graduate students in Computer Science, Physics, or Engineering',
    'Research scholars working on quantum technologies',
    'Industry professionals interested in quantum computing',
    'Faculty members teaching advanced computing courses',
    'Software developers exploring quantum programming'
  ],
  ARRAY[
    'Understand quantum computing fundamentals and principles',
    'Learn to design and implement quantum algorithms',
    'Gain hands-on experience with quantum programming tools',
    'Network with quantum computing experts and researchers',
    'Receive certificate of participation',
    'Access to workshop materials and code repositories',
    'Opportunity to explore quantum computing career paths',
    'Understanding of quantum computing applications in AI and ML'
  ],
  'https://icass2026.mru.edu.in/workshop-registration'
);

-- Verify the insert
SELECT COUNT(*) as total_workshops FROM workshop;
SELECT title, instructor_name, date FROM workshop;

-- ============================================================================
-- End of Sample Workshop Data
-- ============================================================================
