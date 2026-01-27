-- ============================================================================
-- ICASS 2026 - Sample Sessions/Schedule Data
-- ============================================================================
-- This file contains sample data for the sessions table
-- Run this SQL in your Supabase SQL Editor after creating speakers
-- ============================================================================

-- Insert Sample Sessions for Day 1 (February 12, 2026)
INSERT INTO sessions (title, description, speaker_name, date, start_time, end_time, duration_minutes, location, session_type, track) VALUES

-- Day 1 - Opening & Keynotes
(
  'Inaugural Ceremony & Welcome Address',
  'Official opening of ICASS 2026 with welcome addresses from dignitaries, chief patron, and organizing committee. Overview of conference theme and objectives.',
  'Organizing Committee',
  '2026-02-12',
  '09:00',
  '10:00',
  60,
  'Main Auditorium',
  'Opening Ceremony',
  'General'
),
(
  'Keynote: The Future of AI in Digital Transformation',
  'An insightful keynote exploring how artificial intelligence is revolutionizing industries, enabling digital transformation, and shaping the future of technology. Discussion on ethical AI, responsible innovation, and the role of AI in solving global challenges.',
  'Dr. Rajesh Kumar',
  '2026-02-12',
  '10:00',
  '11:00',
  60,
  'Main Auditorium',
  'Keynote',
  'AI & ML'
),
(
  'Tea Break & Networking',
  'Refreshments and networking opportunity for attendees to connect with speakers, researchers, and industry professionals.',
  '',
  '2026-02-12',
  '11:00',
  '11:30',
  30,
  'Foyer Area',
  'Break',
  'General'
),
(
  'Keynote: Quantum Computing - The Next Frontier',
  'Exploring the revolutionary potential of quantum computing in cybersecurity, cryptography, and complex problem-solving. Discussion on current state, challenges, and future roadmap of quantum technologies.',
  'Prof. Anita Sharma',
  '2026-02-12',
  '11:30',
  '12:30',
  60,
  'Main Auditorium',
  'Keynote',
  'Quantum Computing'
),

-- Day 1 - Parallel Sessions (Track 1)
(
  'Advances in Deep Learning Architectures',
  'Latest developments in neural network architectures, including transformers, GANs, and attention mechanisms. Case studies on real-world applications and performance optimization techniques.',
  'Dr. Michael Chen',
  '2026-02-12',
  '14:00',
  '15:30',
  90,
  'Hall A',
  'Technical Session',
  'AI & ML'
),
(
  'Natural Language Processing in Multilingual Contexts',
  'Challenges and solutions in developing NLP systems for low-resource languages. Techniques for multilingual models, transfer learning, and cultural context preservation.',
  'Dr. Sneha Patel',
  '2026-02-12',
  '14:00',
  '15:30',
  90,
  'Hall B',
  'Technical Session',
  'NLP'
),

-- Day 1 - Parallel Sessions (Track 2)
(
  'IoT and Smart Cities: Implementation Challenges',
  'Practical insights into deploying IoT infrastructure for smart cities. Discussion on sensor networks, data management, energy efficiency, and citizen privacy.',
  'Dr. Priya Verma',
  '2026-02-12',
  '16:00',
  '17:30',
  90,
  'Hall A',
  'Technical Session',
  'IoT & Smart Cities'
),
(
  'Big Data Analytics for Business Intelligence',
  'Leveraging big data for actionable business insights. Tools, techniques, and frameworks for data-driven decision making. Real-world case studies from industry.',
  'Prof. John Williams',
  '2026-02-12',
  '16:00',
  '17:30',
  90,
  'Hall B',
  'Technical Session',
  'Data Science'
),

-- Day 2 - Morning Sessions (February 13, 2026)
(
  'Panel Discussion: AI Ethics and Responsible Innovation',
  'Expert panel discussing ethical considerations in AI development, bias mitigation, transparency, and regulatory frameworks. Interactive Q&A session.',
  'Dr. Rajesh Kumar, Prof. Anita Sharma, Dr. Emily Chen',
  '2026-02-13',
  '09:00',
  '10:30',
  90,
  'Main Auditorium',
  'Panel Discussion',
  'AI Ethics'
),
(
  'Cloud Computing and Edge Intelligence',
  'Modern cloud architectures, serverless computing, and edge AI deployment. Best practices for scalable and resilient cloud-native applications.',
  'Dr. Lisa Anderson',
  '2026-02-13',
  '11:00',
  '12:30',
  90,
  'Hall A',
  'Technical Session',
  'Cloud Computing'
),
(
  'Cybersecurity in the Age of AI',
  'AI-powered threat detection, security automation, and defensive strategies. Challenges and opportunities in securing AI systems themselves.',
  'Dr. Ahmed Hassan',
  '2026-02-13',
  '11:00',
  '12:30',
  90,
  'Hall B',
  'Technical Session',
  'Cybersecurity'
),

-- Day 2 - Lunch Break
(
  'Lunch Break',
  'Networking lunch with opportunities for informal discussions and collaborations.',
  '',
  '2026-02-12',
  '12:30',
  '14:00',
  90,
  'Dining Hall',
  'Break',
  'General'
),
(
  'Lunch Break',
  'Networking lunch with opportunities for informal discussions and collaborations.',
  '',
  '2026-02-13',
  '12:30',
  '14:00',
  90,
  'Dining Hall',
  'Break',
  'General'
),

-- Day 2 - Industry Sessions
(
  'Digital Transformation in Enterprise',
  'Real-world experiences of leading digital transformation initiatives. Change management, technology adoption, and measuring ROI.',
  'Mr. Vikram Malhotra',
  '2026-02-13',
  '14:00',
  '15:30',
  90,
  'Hall A',
  'Industry Talk',
  'Digital Transformation'
),
(
  'Autonomous Systems and Robotics',
  'Latest developments in autonomous vehicles, drones, and robotics. AI algorithms for perception, decision-making, and control.',
  'Ms. Sarah Johnson',
  '2026-02-13',
  '14:00',
  '15:30',
  90,
  'Hall B',
  'Industry Talk',
  'Robotics'
),

-- Day 2 - Final Sessions
(
  'AI in Healthcare and Life Sciences',
  'Applications of AI in drug discovery, medical diagnosis, and personalized medicine. Regulatory considerations and patient privacy.',
  'Dr. Ramesh Iyer',
  '2026-02-13',
  '16:00',
  '17:00',
  60,
  'Hall A',
  'Technical Session',
  'Healthcare AI'
),
(
  'Best Paper Awards & Closing Ceremony',
  'Recognition of outstanding research papers, vote of thanks, and conference conclusion. Announcement of future events.',
  'Conference Chair',
  '2026-02-13',
  '17:00',
  '18:00',
  60,
  'Main Auditorium',
  'Closing Ceremony',
  'General'
);

-- Verify the insert
SELECT COUNT(*) as total_sessions FROM sessions;
SELECT date, COUNT(*) as sessions_per_day FROM sessions GROUP BY date ORDER BY date;

-- ============================================================================
-- End of Sample Sessions Data
-- ============================================================================
