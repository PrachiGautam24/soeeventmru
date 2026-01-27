-- ============================================================================
-- ICASS 2026 - Sample Authors Data
-- ============================================================================
-- This file contains sample data for the authors table
-- Run this SQL in your Supabase SQL Editor after creating the schema
-- ============================================================================

-- Insert Sample Authors
INSERT INTO authors (name, affiliation, email, paper_title, track, country, order_index) VALUES

-- Track 1: Computational Intelligent Systems
(
  'Dr. Amit Singh',
  'IIT Delhi, India',
  'amit.singh@iitd.ac.in',
  'Evolutionary Algorithms for Multi-Objective Optimization in Smart Grids',
  'Computational Intelligent Systems',
  'India',
  1
),
(
  'Prof. Maria Garcia',
  'University of Barcelona, Spain',
  'maria.garcia@ub.edu',
  'Fuzzy Logic Controllers for Adaptive Traffic Management Systems',
  'Computational Intelligent Systems',
  'Spain',
  2
),
(
  'Dr. Wei Zhang',
  'Tsinghua University, China',
  'wei.zhang@tsinghua.edu.cn',
  'Swarm Intelligence for Distributed Resource Allocation in IoT Networks',
  'Computational Intelligent Systems',
  'China',
  3
),

-- Track 2: Data Analytics and Decision Sciences
(
  'Dr. Neha Gupta',
  'BITS Pilani, India',
  'neha.gupta@pilani.bits-pilani.ac.in',
  'Predictive Analytics for Customer Churn in Telecommunications',
  'Data Analytics and Decision Sciences',
  'India',
  4
),
(
  'Prof. James Taylor',
  'Oxford University, UK',
  'james.taylor@ox.ac.uk',
  'Bayesian Networks for Risk Assessment in Financial Markets',
  'Data Analytics and Decision Sciences',
  'United Kingdom',
  5
),
(
  'Dr. Yuki Tanaka',
  'Tokyo Institute of Technology, Japan',
  'yuki.tanaka@titech.ac.jp',
  'Real-time Stream Processing for Social Media Sentiment Analysis',
  'Data Analytics and Decision Sciences',
  'Japan',
  6
),

-- Track 3: Futuristic Tools & Technologies
(
  'Dr. Sanjay Reddy',
  'IIIT Hyderabad, India',
  'sanjay.reddy@iiit.ac.in',
  'Blockchain-based Decentralized Identity Management System',
  'Futuristic Tools & Technologies',
  'India',
  7
),
(
  'Prof. Anna Kowalski',
  'Warsaw University of Technology, Poland',
  'anna.kowalski@pw.edu.pl',
  'Extended Reality (XR) Applications in Medical Training',
  'Futuristic Tools & Technologies',
  'Poland',
  8
),
(
  'Dr. Mohammed Al-Said',
  'King Fahd University, Saudi Arabia',
  'mohammed.alsaid@kfupm.edu.sa',
  'Digital Twin Technology for Smart Manufacturing',
  'Futuristic Tools & Technologies',
  'Saudi Arabia',
  9
),

-- Track 4: Smart Electronics & Communication
(
  'Dr. Kavita Sharma',
  'NIT Trichy, India',
  'kavita.sharma@nitt.edu',
  '6G Communication Networks: Architecture and Challenges',
  'Smart Electronics & Communication',
  'India',
  10
),
(
  'Prof. Hans Mueller',
  'Technical University Munich, Germany',
  'hans.mueller@tum.de',
  'Energy-Efficient VLSI Design for Edge AI Processors',
  'Smart Electronics & Communication',
  'Germany',
  11
),
(
  'Dr. Lisa Wong',
  'National University of Singapore',
  'lisa.wong@nus.edu.sg',
  'Reconfigurable Antennas for Software-Defined Radio Systems',
  'Smart Electronics & Communication',
  'Singapore',
  12
),

-- Track 5: Smart Cities & Sustainability
(
  'Dr. Rahul Mehta',
  'IIT Bombay, India',
  'rahul.mehta@iitb.ac.in',
  'AI-Driven Waste Management Systems for Urban Sustainability',
  'Smart Cities & Sustainability',
  'India',
  13
),
(
  'Prof. Sophie Laurent',
  'University of Paris, France',
  'sophie.laurent@uparis.fr',
  'Smart Water Distribution Networks Using IoT and ML',
  'Smart Cities & Sustainability',
  'France',
  14
),
(
  'Dr. Carlos Rodriguez',
  'Technical University of Madrid, Spain',
  'carlos.rodriguez@upm.es',
  'Renewable Energy Integration in Smart Grid Infrastructure',
  'Smart Cities & Sustainability',
  'Spain',
  15
),

-- Track 6: Industry 5.0 & Cyber Physical Systems
(
  'Dr. Arjun Krishnan',
  'IISc Bangalore, India',
  'arjun.krishnan@iisc.ac.in',
  'Human-Robot Collaboration in Industry 5.0 Manufacturing',
  'Industry 5.0 & Cyber Physical Systems',
  'India',
  16
),
(
  'Prof. Elena Popov',
  'Moscow State University, Russia',
  'elena.popov@msu.ru',
  'Cyber-Physical Systems Security in Industrial Control Networks',
  'Industry 5.0 & Cyber Physical Systems',
  'Russia',
  17
),
(
  'Dr. Thomas Anderson',
  'MIT, USA',
  'thomas.anderson@mit.edu',
  'Digital Thread for Lifecycle Management in Aerospace Industry',
  'Industry 5.0 & Cyber Physical Systems',
  'USA',
  18
),

-- Track 7: Smart Materials
(
  'Dr. Priyanka Joshi',
  'Anna University, India',
  'priyanka.joshi@annauniv.edu',
  'Self-Healing Polymers for Sustainable Infrastructure',
  'Smart Materials',
  'India',
  19
),
(
  'Prof. David Kim',
  'KAIST, South Korea',
  'david.kim@kaist.ac.kr',
  'Graphene-based Sensors for Environmental Monitoring',
  'Smart Materials',
  'South Korea',
  20
),
(
  'Dr. Isabella Rossi',
  'Politecnico di Milano, Italy',
  'isabella.rossi@polimi.it',
  'Shape Memory Alloys in Biomedical Devices',
  'Smart Materials',
  'Italy',
  21
),

-- Special Tracks
(
  'Dr. Aditya Kapoor',
  'IIT Kanpur, India',
  'aditya.kapoor@iitk.ac.in',
  'Generative AI for Automated Code Generation and Testing',
  'Generative AI in Action',
  'India',
  22
),
(
  'Dr. Rachel Green',
  'Carnegie Mellon University, USA',
  'rachel.green@cmu.edu',
  'Adversarial Machine Learning and Defense Mechanisms',
  'AI-Driven Cybersecurity',
  'USA',
  23
),
(
  'Dr. Vikash Kumar',
  'NIT Warangal, India',
  'vikash.kumar@nitw.ac.in',
  'Robotic Process Automation Using Deep Reinforcement Learning',
  'AI and Data-Driven Automation',
  'India',
  24
),
(
  'Prof. Chen Liu',
  'Zhejiang University, China',
  'chen.liu@zju.edu.cn',
  'Federated Learning for Privacy-Preserving Big Data Analytics',
  'AI-Enabled Big Data',
  'China',
  25
),
(
  'Dr. Sameer Patel',
  'DA-IICT, India',
  'sameer.patel@daiict.ac.in',
  'Edge Intelligence for Real-time Decision Making in CPS',
  'Next-Gen Cyber-Physical Systems',
  'India',
  26
);

-- Verify the insert
SELECT COUNT(*) as total_authors FROM authors;
SELECT track, COUNT(*) as authors_per_track FROM authors GROUP BY track ORDER BY track;

-- ============================================================================
-- End of Sample Authors Data
-- ============================================================================
