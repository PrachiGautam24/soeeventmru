-- ============================================================================
-- ICASS 2026 - Sample Speakers Data
-- ============================================================================
-- This file contains sample data for the speakers table
-- Run this SQL in your Supabase SQL Editor after creating the schema
-- ============================================================================

-- Insert Sample Speakers
INSERT INTO speakers (name, title, organization, bio, image_url, twitter, linkedin, website, order_index) VALUES

-- Keynote Speakers
(
  'Dr. Rajesh Kumar',
  'Director, AI Research Lab',
  'Indian Institute of Technology, Delhi',
  'Dr. Rajesh Kumar is a renowned researcher in Artificial Intelligence with over 20 years of experience. He has published 150+ research papers in top-tier conferences and journals. His work focuses on machine learning, deep learning, and their applications in healthcare and smart cities. He has received numerous awards including the prestigious Shanti Swarup Bhatnagar Prize.',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh',
  'https://twitter.com/drrajeshkumar',
  'https://linkedin.com/in/rajeshkumar',
  'https://rajeshkumar.ai',
  1
),
(
  'Prof. Anita Sharma',
  'Head of Department, Computer Science',
  'Stanford University, USA',
  'Prof. Anita Sharma is a leading expert in Quantum Computing and Cybersecurity. She has been at Stanford for 15 years and has pioneered research in quantum cryptography. Her work has been instrumental in developing secure communication protocols for the quantum era. She serves on the advisory board of several Fortune 500 companies.',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=anita',
  'https://twitter.com/profanitasharma',
  'https://linkedin.com/in/anitasharma',
  'https://stanford.edu/~asharma',
  2
),
(
  'Dr. Michael Chen',
  'Chief Scientist',
  'Google AI, California',
  'Dr. Michael Chen leads Google''s AI research division, focusing on large language models and generative AI. He completed his PhD from MIT and has been instrumental in developing several breakthrough AI technologies. His team''s work on transformer architectures has revolutionized natural language processing. He is a frequent speaker at major AI conferences worldwide.',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
  'https://twitter.com/michaelchen',
  'https://linkedin.com/in/michaelchen',
  'https://research.google.com/pubs/MichaelChen.html',
  3
),

-- Expert Speakers
(
  'Dr. Priya Verma',
  'Associate Professor',
  'IIT Bombay',
  'Dr. Priya Verma specializes in Internet of Things (IoT) and Smart Cities. She has led several government-funded projects on smart infrastructure development. Her research focuses on energy-efficient IoT devices and sustainable urban planning. She has trained over 500 engineers in IoT technologies and authored two books on the subject.',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
  'https://twitter.com/drpriyaverma',
  'https://linkedin.com/in/priyaverma',
  'https://iitb.ac.in/~pverma',
  4
),
(
  'Prof. John Williams',
  'Professor of Data Science',
  'MIT, USA',
  'Prof. John Williams is a pioneer in Big Data Analytics and Data-Driven Decision Making. His research spans across machine learning, statistical modeling, and business intelligence. He has consulted for major corporations on data strategy and has been awarded the ACM Distinguished Scientist award. His online courses have reached over 100,000 students globally.',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
  'https://twitter.com/profjohnw',
  'https://linkedin.com/in/johnwilliams',
  'https://mit.edu/~jwilliams',
  5
),
(
  'Dr. Sneha Patel',
  'Research Scientist',
  'Microsoft Research India',
  'Dr. Sneha Patel works on Natural Language Processing and Computational Linguistics. She has made significant contributions to multilingual AI systems and low-resource language processing. Her work enables AI technologies to be accessible to billions of non-English speakers. She holds 15 patents and has published over 60 research papers.',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=sneha',
  'https://twitter.com/drsnehapatel',
  'https://linkedin.com/in/snehapatel',
  'https://microsoft.com/research/people/snpatel',
  6
),
(
  'Dr. Ahmed Hassan',
  'Director of Innovation',
  'Dubai Smart City Initiative',
  'Dr. Ahmed Hassan leads Dubai''s transformation into a smart city. He oversees projects in smart transportation, energy management, and citizen services. With expertise in cyber-physical systems and urban technology, he has implemented AI-driven solutions that serve millions of residents. He is a sought-after speaker on smart city innovations.',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed',
  'https://twitter.com/ahmed_hassan',
  'https://linkedin.com/in/ahmedhassan',
  'https://smartdubai.ae/team/ahmed',
  7
),
(
  'Dr. Lisa Anderson',
  'Principal Engineer',
  'Amazon Web Services',
  'Dr. Lisa Anderson is an expert in Cloud Computing and Distributed Systems. She has architected large-scale cloud solutions serving millions of users. Her work focuses on serverless computing, microservices, and edge computing. She regularly contributes to open-source projects and has written extensively on cloud-native architectures.',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa',
  'https://twitter.com/lisaanderson',
  'https://linkedin.com/in/lisaanderson',
  'https://aws.amazon.com/team/lisa',
  8
),

-- Industry Speakers
(
  'Mr. Vikram Malhotra',
  'CTO',
  'Tech Mahindra',
  'Vikram Malhotra has over 25 years of experience in leading digital transformation initiatives. As CTO of Tech Mahindra, he drives innovation in AI, blockchain, and cloud technologies. He has successfully delivered enterprise solutions for Fortune 100 companies. He is passionate about fostering innovation and mentoring young entrepreneurs.',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram',
  'https://twitter.com/vikrammalhotra',
  'https://linkedin.com/in/vikrammalhotra',
  'https://techmahindra.com/leadership/vikram',
  9
),
(
  'Ms. Sarah Johnson',
  'VP of Engineering',
  'Tesla Inc.',
  'Sarah Johnson leads engineering teams at Tesla working on autonomous driving and AI-powered vehicle systems. She has been instrumental in developing Tesla''s self-driving capabilities. With a background in robotics and computer vision, she has 20+ patents in automotive AI. She advocates for ethical AI development and diversity in tech.',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
  'https://twitter.com/sarahjohnson',
  'https://linkedin.com/in/sarahjohnson',
  'https://tesla.com/team/sarah',
  10
),
(
  'Dr. Ramesh Iyer',
  'Head of AI Division',
  'Tata Consultancy Services',
  'Dr. Ramesh Iyer leads TCS''s AI and automation initiatives globally. He has spearheaded the adoption of AI in banking, healthcare, and retail sectors. His team has developed AI solutions that have transformed business processes for clients worldwide. He is a thought leader in enterprise AI and digital transformation.',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=ramesh',
  'https://twitter.com/rameshiyer',
  'https://linkedin.com/in/rameshiyer',
  'https://tcs.com/team/ramesh',
  11
),
(
  'Dr. Emily Chen',
  'Director of Research',
  'IBM Watson',
  'Dr. Emily Chen leads research in cognitive computing and conversational AI at IBM Watson. Her work has advanced human-AI interaction and made AI more accessible to enterprises. She has published groundbreaking research on explainable AI and trustworthy machine learning. She holds a PhD from Carnegie Mellon University.',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=emily',
  'https://twitter.com/emilychen',
  'https://linkedin.com/in/emilychen',
  'https://research.ibm.com/people/emily-chen',
  12
);

-- Verify the insert
SELECT COUNT(*) as total_speakers FROM speakers;

-- ============================================================================
-- End of Sample Speakers Data
-- ============================================================================
