-- ============================================================================
-- ICASS 2026 - Pre-Conference Workshop Data
-- ============================================================================
-- Pre-Conference Workshops: February 11, 2026
-- MANAV RACHNA UNIVERSITY, FARIDABAD
-- ============================================================================

-- Delete existing workshop data
DELETE FROM workshop;

-- Insert Pre-Conference Workshop Data
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
) VALUES

(
  'Introduction to Machine Learning for Sustainable Solutions',
  'This hands-on workshop provides a comprehensive introduction to machine learning techniques with a focus on sustainability applications. Participants will learn fundamental ML algorithms, data preprocessing, model training, and evaluation through practical examples in environmental monitoring, energy optimization, and smart agriculture.',
  'Prof. Vikas Rathi, Graphic Era Deemed University',
  '2026-02-11',
  '09:00',
  '13:00',
  240,
  'A Block Computer Lab 1',
  50,
  ARRAY['Supervised Learning', 'Data Preprocessing', 'Model Evaluation', 'Sustainability Applications', 'Python Programming'],
  ARRAY['Basic Python programming', 'Understanding of statistics', 'Laptop with Python 3.8+ installed'],
  ARRAY['Graduate students', 'Researchers', 'Industry professionals', 'Faculty members'],
  ARRAY[
    'Hands-on experience with ML algorithms',
    'Real-world sustainability case studies',
    'Certificate of participation',
    'Course materials and code samples'
  ],
  'https://icass2026.mru.edu.in/register'
),

(
  'Deep Learning for Computer Vision Applications',
  'Explore the world of deep learning and computer vision in this intensive workshop. Learn to build and train convolutional neural networks (CNNs) for image classification, object detection, and image segmentation. The workshop covers popular frameworks like TensorFlow and PyTorch with practical implementations.',
  'Dr. Vidhi Khanduja, Hansraj College, University of Delhi',
  '2026-02-11',
  '09:00',
  '13:00',
  240,
  'A Block Computer Lab 2',
  40,
  ARRAY['CNN Architecture', 'Transfer Learning', 'Object Detection', 'TensorFlow', 'PyTorch', 'Image Processing'],
  ARRAY['Basic machine learning knowledge', 'Python programming', 'GPU-enabled laptop recommended'],
  ARRAY['AI/ML researchers', 'Computer Vision enthusiasts', 'Data scientists', 'PhD scholars'],
  ARRAY[
    'Build CNN models from scratch',
    'Implement transfer learning',
    'Access to pre-trained models',
    'Workshop resources and datasets'
  ],
  'https://icass2026.mru.edu.in/register'
),

(
  'IoT and Smart Systems Development',
  'This practical workshop demonstrates the development of IoT-based smart systems for sustainable solutions. Participants will work with Arduino, Raspberry Pi, and various sensors to build real-world IoT applications including smart agriculture monitoring, energy management systems, and environmental sensing.',
  'Dr. Kaushal Kumar, Graphic Era University',
  '2026-02-11',
  '14:00',
  '18:00',
  240,
  'L Block IoT Lab',
  35,
  ARRAY['IoT Fundamentals', 'Sensor Integration', 'Arduino Programming', 'Raspberry Pi', 'MQTT Protocol', 'Cloud Integration'],
  ARRAY['Basic electronics knowledge', 'C/C++ or Python programming', 'Laptop with Arduino IDE'],
  ARRAY['Engineering students', 'IoT developers', 'Industry professionals', 'Researchers'],
  ARRAY[
    'Build functional IoT prototypes',
    'Sensor integration techniques',
    'Cloud connectivity setup',
    'IoT development kit (if registered early)'
  ],
  'https://icass2026.mru.edu.in/register'
),

(
  'Blockchain and Decentralized Applications',
  'Dive into blockchain technology and learn to develop decentralized applications (DApps). This workshop covers blockchain fundamentals, smart contract development using Solidity, and building DApps on Ethereum. Explore use cases in supply chain, finance, and sustainability.',
  'Prof. Himani Garg, AKGEC, Ghaziabad',
  '2026-02-11',
  '14:00',
  '18:00',
  240,
  'G Block Seminar Hall',
  45,
  ARRAY['Blockchain Basics', 'Smart Contracts', 'Solidity Programming', 'Ethereum', 'Web3.js', 'DApp Development'],
  ARRAY['JavaScript programming', 'Basic understanding of cryptocurrency', 'Node.js installed on laptop'],
  ARRAY['Developers', 'Blockchain enthusiasts', 'Fintech professionals', 'Researchers'],
  ARRAY[
    'Deploy your first smart contract',
    'Understand blockchain architecture',
    'Build a simple DApp',
    'Access to development tools and frameworks'
  ],
  'https://icass2026.mru.edu.in/register'
),

(
  'Natural Language Processing and Text Analytics',
  'Master the fundamentals of Natural Language Processing (NLP) in this comprehensive workshop. Learn text preprocessing, sentiment analysis, named entity recognition, and transformer-based models. Hands-on sessions include working with BERT, GPT models, and building chatbots.',
  'Dr. Harsh Bhasin, Bennett University',
  '2026-02-11',
  '09:00',
  '13:00',
  240,
  'I Block Auditorium',
  60,
  ARRAY['Text Preprocessing', 'Sentiment Analysis', 'NER', 'Transformers', 'BERT', 'GPT Models', 'Chatbot Development'],
  ARRAY['Python programming', 'Basic ML concepts', 'Jupyter Notebook setup'],
  ARRAY['NLP researchers', 'Data scientists', 'AI developers', 'Graduate students'],
  ARRAY[
    'Build NLP applications',
    'Work with transformer models',
    'Pre-trained model access',
    'Comprehensive course materials'
  ],
  'https://icass2026.mru.edu.in/register'
),

(
  'Cybersecurity and Ethical Hacking Fundamentals',
  'Learn essential cybersecurity concepts and ethical hacking techniques in this interactive workshop. Topics include network security, vulnerability assessment, penetration testing, and secure coding practices. Hands-on labs provide practical experience with security tools and techniques.',
  'Dr. Manvi Breja, NCU Gurgaon',
  '2026-02-11',
  '14:00',
  '18:00',
  240,
  'L Block Computer Lab 3',
  30,
  ARRAY['Network Security', 'Penetration Testing', 'Vulnerability Assessment', 'Kali Linux', 'Security Tools', 'Secure Coding'],
  ARRAY['Basic networking knowledge', 'Linux familiarity', 'Laptop with virtualization support'],
  ARRAY['Security professionals', 'Network administrators', 'Developers', 'IT students'],
  ARRAY[
    'Hands-on security testing',
    'Kali Linux VM setup guide',
    'Security tools and scripts',
    'Ethical hacking certification preparation tips'
  ],
  'https://icass2026.mru.edu.in/register'
);

-- Verify the data
SELECT 
    title,
    date,
    start_time,
    duration_minutes,
    max_participants
FROM workshop
ORDER BY date, start_time;
