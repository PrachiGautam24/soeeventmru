-- ============================================================================
-- ICASS 2026 - Sessions and Schedule Data
-- ============================================================================
-- Conference Record #69550
-- MANAV RACHNA UNIVERSITY, FARIDABAD
-- 1st International Conference on Intelligent Computing and Automation 
-- for Sustainable Solutions (ICASS-2026)
-- Programme Schedule: February 12-13, 2026
-- ============================================================================

-- Delete existing session data
DELETE FROM sessions;

-- Insert Sessions Data
INSERT INTO sessions (title, description, speaker_name, date, start_time, end_time, duration_minutes, location, session_type, track) VALUES

-- ====================================================================================
-- DAY 1: THURSDAY, FEBRUARY 12, 2026
-- ====================================================================================

-- Registration
('Registration', 'Conference registration and badge collection', NULL, '2026-02-12', '08:15', '09:15', 60, 'A Block Ground Floor', 'Registration', NULL),

-- Inaugural Ceremony
('Inaugural Ceremony', 'Welcome & Brief Introduction to ICASS 2026, Lamp Lighting Ceremony & Saraswati Vandana, Felicitation of Dignitaries, Welcome Address, Keynote Addresses', NULL, '2026-02-12', '09:30', '11:20', 110, 'A Block Auditorium', 'Inaugural', NULL),

-- High Tea Break
('High Tea Break', 'Morning refreshments', NULL, '2026-02-12', '11:20', '11:50', 30, 'A Block Ground Floor', 'Break', NULL),

-- Technical Session-I (11:50 AM - 01:50 PM)
('Technical Session-I: Track 1 (Online)', 'IoT, Machine Learning, AI, Deep Learning - Online presentations', 'Session Chair: Prof Vikas Rathi, Graphic Era Deemed University', '2026-02-12', '11:50', '13:50', 120, 'LT03 (L Block)', 'Technical Session', 'Track 1'),

('Technical Session-I: Track 1/2 (Offline)', 'AI, Phishing Detection, Multimodal Framework, Hybrid Systems - Offline presentations', 'Session Chair: Dr Vidhi Khanduja, Hansraj College, Delhi', '2026-02-12', '11:50', '13:50', 120, 'LT10 (L Block)', 'Technical Session', 'Track 1, 2'),

('Technical Session-I: Track 2 (Online)', 'Mycobacteria Detection, Predictive Analytics, AI Legal Systems - Online presentations', 'Session Chair: Prof Nihar Ranjan Roy, AKGEC, Ghaziabad', '2026-02-12', '11:50', '13:50', 120, 'LS10 (L Block)', 'Technical Session', 'Track 2'),

('Technical Session-I: Track 7 (Offline)', 'MgFe2O4 Analysis, Piezoelectric Optimization, Image Encryption, Cancer Diagnosis - Offline presentations', 'Session Chair: Prof Naresh Kumar, GD Goenka University', '2026-02-12', '11:50', '13:50', 120, 'LS09 (L Block)', 'Technical Session', 'Track 7'),

('Technical Session-I: Track 3/2 (Offline)', 'Lean 4.0, Blockchain, Stock Market Forecasting, AI Workloads - Offline presentations', 'Session Chair: Dr Charu Gaur, Delhi Skill and Entrepreneurship University', '2026-02-12', '11:50', '13:50', 120, 'LS03 (L Block)', 'Technical Session', 'Track 3, 2'),

('Technical Session-I: Track 1 (Online)', 'Biometric Authentication, Cancer Diagnosis, Privacy Preserving Search, Deepfake Detection - Online presentations', 'Session Chair: Prof Ashish Goel, JIIT Noida', '2026-02-12', '11:50', '13:50', 120, 'LF03 (L Block)', 'Technical Session', 'Track 1'),

('Technical Session-I: Track 5/10 (Offline)', 'Waste-to-Energy, Traffic Management, Smart Parking, AI Waste Classification - Offline presentations', 'Session Chair: Dr Kaushal Kumar, Graphic Era University', '2026-02-12', '11:50', '13:50', 120, 'LF09 (L Block)', 'Technical Session', 'Track 5, 10'),

('Technical Session-I: Track 10 (Online)', 'Federated Learning, Edge Intelligence, Brain Tumor Detection, ECG Classification - Online presentations', 'Session Chair: Dr Neha Gupta, BVCOE, Delhi', '2026-02-12', '11:50', '13:50', 120, 'LF10 (L Block)', 'Technical Session', 'Track 10'),

('Technical Session-I: Track 11 (Offline/Online)', 'Technology-Driven Learning, Blockchain Gig Economy, Diabetic Retinopathy, Smart Healthcare - Mixed mode', 'Session Chair: Dr Hemant Kumar Saini, Bennett University', '2026-02-12', '11:50', '13:50', 120, 'I Block Auditorium', 'Technical Session', 'Track 11'),

('Technical Session-I: Track 1/2 (Online)', 'Responsible AI, Machine Learning Ethics, Plant Disease Detection, Brain Tumor Classification - Online presentations', 'Session Chair: Prof Aanjey Mani Tripathi, Galgotias University', '2026-02-12', '11:50', '13:50', 120, 'CADR Room, G Block Basement', 'Technical Session', 'Track 1, 2'),

-- Lunch Break
('Lunch Break', 'Lunch and networking', NULL, '2026-02-12', '13:50', '14:20', 30, NULL, 'Break', NULL),

-- Technical Session-II (14:20 - 17:10)
('Technical Session-II: Track 1 (Online)', 'Cow Health Prediction, ECG Classification, Toxic Comment Detection, Speech Translation - Online presentations', 'Session Chair: Prof Vimlesh Singh, MRIIRS', '2026-02-12', '14:20', '17:10', 170, 'LT03 (L Block)', 'Technical Session', 'Track 1'),

('Technical Session-II: Track 1 (Offline)', 'Fake News Detection, Wireless Sensor Networks, Predictive Maintenance - Offline presentations', 'Session Chair: Dr Rashmi Panwar, Delhi Skill and Entrepreneurship University', '2026-02-12', '14:20', '17:10', 170, 'LT10 (L Block)', 'Technical Session', 'Track 1'),

('Technical Session-II: Track 3 (Online)', 'Intelligent Predictive Maintenance, Blockchain Identity, Budget Transparency, Deep Learning - Online presentations', 'Session Chair: Prof Himani Garg, AKGEC, Ghaziabad', '2026-02-12', '14:20', '17:10', 170, 'LS10 (L Block)', 'Technical Session', 'Track 3'),

('Technical Session-II: Track 4/2 (Offline)', 'Elderly Support System, Aerial Target Tracking, MoS2 Biosensing, Climate Change IoT - Offline presentations', 'Session Chair: Prof Jasdeep Kaur Dhanoa, IGDTUW', '2026-02-12', '14:20', '17:10', 170, 'LS03 (L Block)', 'Technical Session', 'Track 4, 2'),

('Technical Session-II: Track 4 (Online)', 'TFETs Architectures, Nakagami-m Fading, Solar Cell Simulation - Online presentations', 'Session Chair: Prof Ashish Sachdeva, MM University', '2026-02-12', '14:20', '17:10', 170, 'LF03 (L Block)', 'Technical Session', 'Track 4'),

('Technical Session-II: Track 8 (Offline)', 'Generative AI, Smart Manufacturing, Crop Disease Detection, BiasHindi Framework - Offline presentations', 'Session Chair: Dr Kushagra Agrawal, MRIIRS', '2026-02-12', '14:20', '17:10', 170, 'LF09 (L Block)', 'Technical Session', 'Track 8'),

('Technical Session-II: Track 9/12 (Online)', 'Mobile Robotics, Bayesian Decision Making, Cybersecurity, Deepfake Detection - Online presentations', 'Session Chair: Prof Md Irfanul Hasan, Graphic Era University', '2026-02-12', '14:20', '17:10', 170, 'LF10 (L Block)', 'Technical Session', 'Track 9, 12'),

('Technical Session-II: Track 8 (Online)', 'Plant Disease Detection, Adaptive Scheduling, IoT Agriculture, Cloud Task Scheduling - Online presentations', 'Session Chair: Dr Budesh Kanwar, PIET Jaipur', '2026-02-12', '14:20', '17:10', 170, 'I Block Auditorium', 'Technical Session', 'Track 8'),

('Technical Session-II: Track 8/2/4 (Online)', 'Apple Leaf Disease, GAN Comparison, Cryptocurrency Prediction, Metamaterial Antenna - Online presentations', 'Session Chair: Prof Shilpi Agrawal, Galgotias University', '2026-02-12', '14:20', '17:10', 170, 'CADR Room, G Block Basement', 'Technical Session', 'Track 8, 2, 4'),

-- Tea Break
('Tea/Coffee Break', 'Evening refreshments', NULL, '2026-02-12', '17:10', '17:30', 20, NULL, 'Break', NULL),

-- Industry Expert Talk
('Industry Expert Talk', 'Talk by Industry Expert', NULL, '2026-02-12', '17:30', '18:00', 30, NULL, 'Invited Talk', NULL),

-- Cultural Event
('Cultural Event & Gala Dinner', 'SITAYANA - A Classical Dance Drama followed by Gala Dinner', NULL, '2026-02-12', '18:00', '19:00', 60, 'Mandala Auditorium, G Block', 'Cultural Event', NULL),

-- ====================================================================================
-- DAY 2: FRIDAY, FEBRUARY 13, 2026
-- ====================================================================================

-- Registration
('Registration', 'Day 2 registration', NULL, '2026-02-13', '08:15', '09:15', 60, 'L Block Ground Floor', 'Registration', NULL),

-- Plenary Session
('Plenary Session / Invited Talk', 'Keynote presentation by distinguished speaker', NULL, '2026-02-13', '09:15', '10:15', 60, NULL, 'Plenary Session', NULL),

-- High Tea
('High Tea Break', 'Morning refreshments', NULL, '2026-02-13', '10:15', '11:15', 60, NULL, 'Break', NULL),

-- Technical Session-III (11:15 AM - 13:30 PM)
('Technical Session-III: Track 1/5 (Online)', 'Diabetes Prediction, Alzheimer Modeling, Bone Tumor Classification, Smart Surveillance - Online presentations', 'Session Chair: Mr Ahsaas Bajaj, Instacart', '2026-02-13', '11:15', '13:30', 135, 'LT03 (L Block)', 'Technical Session', 'Track 1, 5'),

('Technical Session-III: Track 1 (Offline)', 'Enhanced Alpha-Beta Pruning, Theta* Search, Genre-Aware Recommendation, Mental Health Screening - Offline presentations', 'Session Chair: Dr Harsh Bhasin, Bennett University', '2026-02-13', '11:15', '13:30', 135, 'LT10 (L Block)', 'Technical Session', 'Track 1'),

('Technical Session-III: Track 4/2/1 (Online)', 'Equal Gain Combining, FIFO Verification, P2P Communication, QCA Demultiplexer - Online presentations', 'Session Chair: Dr Rohit Anand, GB Pant DSEU Campus', '2026-02-13', '11:15', '13:30', 135, 'LS10 (L Block)', 'Technical Session', 'Track 4, 2, 1'),

('Technical Session-III: Track 9 (Offline)', 'Trust-Aware Framework, DDoS Detection, Mobile Banking Security, Cyberattack Analysis - Offline presentations', 'Session Chair: Dr Manvi Breja, NCU Gurgaon', '2026-02-13', '11:15', '13:30', 135, 'LS09 (L Block)', 'Technical Session', 'Track 9'),

('Technical Session-III: Track 3 (Offline)', 'FCRD9T SRAM Cell, Graph Neural Networks, Threat Detection, RAG vs Fine-Tuning - Offline presentations', 'Session Chair: Dr Rohit Tanwar, SMVDU', '2026-02-13', '11:15', '13:30', 135, 'LS03 (L Block)', 'Technical Session', 'Track 3'),

('Technical Session-III: Track 1/6 (Online)', 'Diabetic Retinopathy Detection, AI-Driven Intrusion Detection, Healthcare Recommendations - Online presentations', 'Session Chair: Prof Preeti Kaur, NSUT Delhi', '2026-02-13', '11:15', '13:30', 135, 'LF03 (L Block)', 'Technical Session', 'Track 1, 6'),

('Technical Session-III: Track 11/12 (Online)', 'Edge AI in Wireless Networks, Crop Yield Prediction, YOLOv5 Robustness, IoT Healthcare - Online presentations', 'Session Chair: Dr Poonam Rani, NSUT Delhi', '2026-02-13', '11:15', '13:30', 135, 'LF10 (L Block)', 'Technical Session', 'Track 11, 12'),

('Technical Session-III: Track 8/3 (Online)', 'AI-Powered Image Retrieval, AWS Navigation, Digit Recognition, Water Quality Assessment - Online presentations', 'Session Chair: Dr Priti Bansal, NSUT Delhi', '2026-02-13', '11:15', '13:30', 135, 'I Block Auditorium', 'Technical Session', 'Track 8, 3'),

('Technical Session-III: Track 1/7 (Online)', 'Data Forecasting, Lung Segmentation, Skill Swapping Framework, Aquatic Weed Detection - Online presentations', 'Session Chair: Prof Dileep Kumar Yadav, Bennett University', '2026-02-13', '11:15', '13:30', 135, 'CADR Room, G Block Basement', 'Technical Session', 'Track 1, 7'),

-- Lunch Break
('Lunch Break', 'Lunch and networking', NULL, '2026-02-13', '13:30', '14:30', 60, NULL, 'Break', NULL),

-- Valedictory Session
('Valedictory Session', 'Closing ceremony, awards, and concluding remarks', NULL, '2026-02-13', '14:30', '16:00', 90, 'G Block Mandala', 'Valedictory', NULL),

-- High Tea
('High Tea Break', 'Afternoon refreshments', NULL, '2026-02-13', '16:00', '16:30', 30, NULL, 'Break', NULL),

-- Certificate Distribution
('Certificate Distribution', 'Distribution of participation certificates', NULL, '2026-02-13', '16:30', '17:00', 30, 'G Block Mandala', 'Closing', NULL);

-- Verify the data
SELECT 
    date,
    session_type,
    COUNT(*) as session_count
FROM sessions
GROUP BY date, session_type
ORDER BY date, session_type;
