-- ============================================================
-- COMPLETE SCHEDULE DATA
-- SOE Events MRU - ICASS 2026
-- Run schedule-schema.sql FIRST, then this file
-- ============================================================

-- Clear existing data
DELETE FROM public.session_papers;
DELETE FROM public.schedule_events;

-- ============================================================
-- DAY 1: THURSDAY 12 FEBRUARY, 2026
-- ============================================================

INSERT INTO public.schedule_events (id, day, date, event_type, title, description, start_time, end_time, venue, session_name, tracks, mode, session_chair, session_incharge, order_index) VALUES

-- Non-technical events Day 1
('a0000000-0001-4000-8000-000000000001', 1, '2026-02-12', 'registration', 'Registration', NULL, '08:15 AM', '09:15 AM', 'A Block Ground Floor', NULL, NULL, NULL, NULL, NULL, 1),

('a0000000-0001-4000-8000-000000000002', 1, '2026-02-12', 'ceremony', 'Inaugural Ceremony', '09:30 AM - 09:35 AM: Welcome & Brief Introduction to ICASS 2026
09:35 AM - 09:40 AM: Lamp Lighting Ceremony & Saraswati Vandana
09:40 AM - 09:50 AM: Felicitation of Dignitaries
09:50 AM - 09:55 AM: Welcome Address by General Chair ICASS 2026
09:55 AM - 10:05 AM: Address by Hon''ble Vice Chancellor MRU
10:05 AM - 10:15 AM: Address by Hon''ble Chief Guest
10:15 AM - 10:25 AM: Address by Guest of Honor - I
10:25 AM - 10:35 AM: Address by Guest of Honor - II
10:35 AM - 10:55 AM: Keynote Address - I
10:55 AM - 11:15 AM: Keynote Address - II
11:15 AM - 11:20 AM: Vote of Thanks', '09:30 AM', '11:20 AM', 'A Block Auditorium', NULL, NULL, NULL, NULL, NULL, 2),

('a0000000-0001-4000-8000-000000000003', 1, '2026-02-12', 'high_tea', 'High Tea', NULL, '11:20 AM', '11:50 AM', 'A Block Ground Floor', NULL, NULL, NULL, NULL, NULL, 3),

-- Technical Session I - Day 1 (10 rooms)
('a0000000-0001-4000-8000-000000000004', 1, '2026-02-12', 'technical_session', 'Technical Session – I: Track-1 Online', NULL, '11:50 AM', '01:50 PM', 'LT03 (L Block)', 'Technical Session – I', 'Track-1', 'Online', 'Prof Vikas Rathi, Graphic Era Deemed University, 919760207981, vikasrathi@geu.ac.in (offline)', 'Dr Urmila Pilania (9911306200), Dr Manoj Kumar (8368906788)', 4),

('a0000000-0001-4000-8000-000000000005', 1, '2026-02-12', 'technical_session', 'Technical Session – I: Track-1/ Track-2/ Track-7 Offline', NULL, '11:50 AM', '01:50 PM', 'LT10 (L Block)', 'Technical Session – I', 'Track-1/ Track-2/ Track-7', 'Offline', 'Dr Vidhi Khanduja, Hansraj College, Delhi, 9999695797, vidhikhanduja@hrc.du.ac.in (offline)', 'Dr Deepti Thakral (9958200333), Dr Prinima Gupta (9971405007)', 5),

('a0000000-0001-4000-8000-000000000006', 1, '2026-02-12', 'technical_session', 'Technical Session – I: Track-2 Online', NULL, '11:50 AM', '01:50 PM', 'LS10 (L Block)', 'Technical Session – I', 'Track-2', 'Online', 'Prof Nihar Ranjan Roy, AKGEC, Ghaziabad, +919810977908, niharranjanroy@gmail.com (offline)', 'Dr Piyush Charan (9559313115), Dr Awwab Mohammad (9990642712)', 6),

('a0000000-0001-4000-8000-000000000007', 1, '2026-02-12', 'technical_session', 'Technical Session – I: Track-7 Offline', NULL, '11:50 AM', '01:50 PM', 'LS09 (L Block)', 'Technical Session – I', 'Track-7', 'Offline', 'Prof Naresh Sharma, GD Goenka University, 9873669510, naresh.sharma2006@gmail.com, Dr Aradhna Dutt Johri, Galgotias University, 9711301327, aradhanadutt.jauhari@galgotiasuniversity.edu.in (offline)', 'Dr Jaiprakash Sorout (9711315173), Dr Vinayak Vandan (9870400874)', 7),

('a0000000-0001-4000-8000-000000000008', 1, '2026-02-12', 'technical_session', 'Technical Session – I: Track-3/ Track-2 Offline', NULL, '11:50 AM', '01:50 PM', 'LS03 (L Block)', 'Technical Session – I', 'Track-3/ Track-2', 'Offline', 'Dr Charu Gaur, Delhi Skill and Entrepreneurship University, 9868761029, charu.gaur@dseu.ac.in (offline)', 'Dr Mamta Arora (9873599315), Dr Monika Garg (9650353336)', 8),

('a0000000-0001-4000-8000-000000000009', 1, '2026-02-12', 'technical_session', 'Technical Session – I: Track-1 Online', NULL, '11:50 AM', '01:50 PM', 'LF03 (L Block)', 'Technical Session – I', 'Track-1', 'Online', 'Prof Ashish Goel, Jaypee Institute of Information Technology Noida (Deemed University), 91-9811946987, ashish.goel@jiit.ac.in (offline)', 'Dr Poonam Rattan (7888493133), Dr Vivek Sharma (9717200103)', 9),

('a0000000-0001-4000-8000-000000000010', 1, '2026-02-12', 'technical_session', 'Technical Session – I: Track-5/ Track-10 Offline', NULL, '11:50 AM', '01:50 PM', 'LF09 (L Block)', 'Technical Session – I', 'Track-5/ Track-10', 'Offline', 'Dr Kaushal Kumar, Graphic Era University, Dehradun, +91-9997468929, kaushal1987@geu.ac.in, Prof Md Irfanul Hasan, Graphic Era University, +91 95575 09130, irfanhasan25@rediffmail.com (offline)', 'Dr Neha Chaudhary (9958460544), Dr Richa Adlakha (9971304449)', 10),

('a0000000-0001-4000-8000-000000000011', 1, '2026-02-12', 'technical_session', 'Technical Session – I: Track-10 Online', NULL, '11:50 AM', '01:50 PM', 'LF10 (L Block)', 'Technical Session – I', 'Track-10', 'Online', 'Dr Neha Gupta, BVCOE, Delhi, 9968058919, neha.06.gupta@gmail.com (offline)', 'Dr Ranjana Jain (9871543454), Dr Sachin Lakra (9899400694)', 11),

('a0000000-0001-4000-8000-000000000012', 1, '2026-02-12', 'technical_session', 'Technical Session – I: Track-11 Offline/Online', NULL, '11:50 AM', '01:50 PM', 'I Block Auditorium', 'Technical Session – I', 'Track-11', 'Offline/Online', 'Dr Hemant Kumar Saini, Bennett University, +91-9079001257, drhksainimalaysia@gmail.com (offline)', 'Dr Jitendra Pal Singh (8449689802), Dr Abhishek Saxena (9457580379)', 12),

('a0000000-0001-4000-8000-000000000013', 1, '2026-02-12', 'technical_session', 'Technical Session – I: Track-1/ Track-2 Online', NULL, '11:50 AM', '01:50 PM', 'CADR Room G Block Basement', 'Technical Session – I', 'Track-1/ Track-2', 'Online', 'Prof Aanjey Mani Tripathi, Galgotias University, +919807978299, aanjeymanit09@gmail.com; Dr Sonia Setia, Galgotias University, 8383007704, setiasonia53@gmail.com (offline)', 'Dr Rajnesh Kr Singh (7836901337), Dr Gurpreet Singh Matharou (9413067409)', 13),

-- Lunch Day 1
('a0000000-0001-4000-8000-000000000014', 1, '2026-02-12', 'lunch', 'Lunch Break', NULL, '01:50 PM', '02:20 PM', NULL, NULL, NULL, NULL, NULL, NULL, 14),

-- Technical Session II - Day 1 (9 rooms)
('a0000000-0001-4000-8000-000000000015', 1, '2026-02-12', 'technical_session', 'Technical Session – II: Track-1 Online', NULL, '02:20 PM', '05:10 PM', 'LT03 (L Block)', 'Technical Session – II', 'Track-1', 'Online', 'Prof Vimlesh Singh, MRIIRS, 9873049490, vimlesh.set@mriu.edu.in (offline)', 'Dr Deepti Thakral (9958200333), Dr Prinima Gupta (9971405007)', 15),

('a0000000-0001-4000-8000-000000000016', 1, '2026-02-12', 'technical_session', 'Technical Session – II: Track-1 Offline', NULL, '02:20 PM', '05:10 PM', 'LT10 (L Block)', 'Technical Session – II', 'Track-1', 'Offline', 'Dr Rashmi Panwar, Delhi Skill and Entrepreneurship University, 9811512801, rashmimakkarpanwar@gmail.com (offline)', 'Dr Urmila Pilania (9911306200), Dr Manoj Kumar (8368906788)', 16),

('a0000000-0001-4000-8000-000000000017', 1, '2026-02-12', 'technical_session', 'Technical Session – II: Track-3 Online', NULL, '02:20 PM', '05:10 PM', 'LS10 (L Block)', 'Technical Session – II', 'Track-3', 'Online', 'Prof Himani Garg, AKGEC, Ghaziabad, 9650655307, Garghimani@akgec.ac.in (offline)', 'Dr Mamta Arora (9873599315), Dr Monika Garg (9650353336)', 17),

('a0000000-0001-4000-8000-000000000018', 1, '2026-02-12', 'technical_session', 'Technical Session – II: Track-4/ Track-2 Offline', NULL, '02:20 PM', '05:10 PM', 'LS03 (L Block)', 'Technical Session – II', 'Track-4/ Track-2', 'Offline', 'Prof Jasdeep Kaur Dhanoa, IGDTUW, 9968485100, jasdeep@igdtuw.ac.in (offline)', 'Dr Mohit Kumar Singh (9868098652), Dr Bhim Singh (9212673940)', 18),

('a0000000-0001-4000-8000-000000000019', 1, '2026-02-12', 'technical_session', 'Technical Session – II: Track-4/ Track-2 Online', NULL, '02:20 PM', '05:10 PM', 'LF03 (L Block)', 'Technical Session – II', 'Track-4/ Track-2', 'Online', 'Prof Ashish Sachdeva, Maharishi Markandeshwar (Deemed to be University), Mullana, +918950115050, er.ashishsachdeva@gmail.com (offline)', 'Dr Neetu Chauhan (9718238836), Dr Priyanka Bansal (9810907022)', 19),

('a0000000-0001-4000-8000-000000000020', 1, '2026-02-12', 'technical_session', 'Technical Session – II: Track-8 Offline', NULL, '02:20 PM', '05:10 PM', 'LF09 (L Block)', 'Technical Session – II', 'Track-8', 'Offline', 'Dr Kushagra Agrawal, MRIIRS, +91-9996185556, agrawal_kushagra@rediffmail.com; Ms Shaveta Jain, MRIIRS, +91-7018613431, Shavetajn120@gmail.com (offline)', 'Dr Monika Lamba (9711434143), Dr Sujata (9910096028)', 20),

('a0000000-0001-4000-8000-000000000021', 1, '2026-02-12', 'technical_session', 'Technical Session – II: Track-9/ Track-12 Online', NULL, '02:20 PM', '05:10 PM', 'LF10 (L Block)', 'Technical Session – II', 'Track-9/ Track-12', 'Online', 'Dr Amrinder Kaur, Associate Professor, MRIIRS, amrinder.set@mriu.edu.in, 9990870253 (offline)', 'Dr Pooja Sachdeva (9711380505), Dr Parneeta Dhaliwal (9871425044)', 21),

('a0000000-0001-4000-8000-000000000022', 1, '2026-02-12', 'technical_session', 'Technical Session – II: Track-8 Online', NULL, '02:20 PM', '05:10 PM', 'I Block Auditorium', 'Technical Session – II', 'Track-8', 'Online', 'Prof Mamta Dahiya, MRIIRS, 9996236339, mamtadahiya.set@mriu.edu.in (Offline)', 'Dr Ranjana Jain (9871543454), Dr Sachin Lakra (9899400694)', 22),

('a0000000-0001-4000-8000-000000000023', 1, '2026-02-12', 'technical_session', 'Technical Session – II: Track-8/ Track-2/ Track-4 Online', NULL, '02:20 PM', '05:10 PM', 'CADR Room G Block Basement', 'Technical Session – II', 'Track-8/ Track-2/ Track-4', 'Online', 'Dr Puneet Garg, KIET Ghaziabad, 91-9996091999, puneet.garg@kiet.edu (offline)', 'Dr Piyush Charan (9559313115), Dr Awwab Mohammad (9990642712)', 23),

-- Post Session II events Day 1
('a0000000-0001-4000-8000-000000000024', 1, '2026-02-12', 'tea_break', 'Tea/Coffee Break', NULL, '05:10 PM', '05:30 PM', NULL, NULL, NULL, NULL, NULL, NULL, 24),

('a0000000-0001-4000-8000-000000000025', 1, '2026-02-12', 'talk', 'Talk by Industry Expert', NULL, '05:30 PM', '06:00 PM', NULL, NULL, NULL, NULL, NULL, NULL, 25),

('a0000000-0001-4000-8000-000000000026', 1, '2026-02-12', 'cultural', 'Cultural Event followed by Gala Dinner', NULL, '06:00 PM', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 26),

-- ============================================================
-- DAY 2: FRIDAY 13 FEBRUARY, 2026
-- ============================================================

('a0000000-0002-4000-8000-000000000001', 2, '2026-02-13', 'registration', 'Registration', NULL, '08:15 AM', '09:15 AM', 'L Block Ground Floor', NULL, NULL, NULL, NULL, NULL, 1),

('a0000000-0002-4000-8000-000000000002', 2, '2026-02-13', 'plenary', 'Plenary Session / Invited Talk', NULL, '09:15 AM', '10:15 AM', NULL, NULL, NULL, NULL, NULL, NULL, 2),

('a0000000-0002-4000-8000-000000000003', 2, '2026-02-13', 'high_tea', 'High Tea', NULL, '10:15 AM', '11:15 AM', NULL, NULL, NULL, NULL, NULL, NULL, 3),

-- Technical Session III - Day 2 (9 rooms)
('a0000000-0002-4000-8000-000000000004', 2, '2026-02-13', 'technical_session', 'Technical Session – III: Track-1/ Track-5 Online', NULL, '11:15 AM', '01:30 PM', 'LT03 (L Block)', 'Technical Session – III', 'Track-1/ Track-5', 'Online', 'Mr Ahsaas Bajaj, Instacart, +1-413-210-4664, bajajahsaas@gmail.com (online)', 'Dr Neha Chaudhary (9958460544), Dr Richa Adlakha (9971304449)', 4),

('a0000000-0002-4000-8000-000000000005', 2, '2026-02-13', 'technical_session', 'Technical Session – III: Track-1 Offline', NULL, '11:15 AM', '01:30 PM', 'LT10 (L Block)', 'Technical Session – III', 'Track-1', 'Offline', 'Dr Harsh Bhasin, Bennett University, +919818730508, harsh.bhasin@bennett.edu.in (offline)', 'Dr Poonam Rattan (7888493133), Dr Vivek Sharma (9717200103)', 5),

('a0000000-0002-4000-8000-000000000006', 2, '2026-02-13', 'technical_session', 'Technical Session – III: Track-4/ Track-2/ Track-1 Online', NULL, '11:15 AM', '01:30 PM', 'LS10 (L Block)', 'Technical Session – III', 'Track-4/ Track-2/ Track-1', 'Online', 'Dr Rohit Anand, G.B.Pant DSEU Campus, New Delhi, +91-9416281993, +91-9466994669, rohit.anand@dseu.ac.in (offline)', 'Dr Mohit Kumar Singh (9868098652), Dr Neetu Chauhan (9718238836)', 6),

('a0000000-0002-4000-8000-000000000007', 2, '2026-02-13', 'technical_session', 'Technical Session – III: Track-9 Offline', NULL, '11:15 AM', '01:30 PM', 'LS09 (L Block)', 'Technical Session – III', 'Track-9', 'Offline', 'Dr Manvi Breja, NCU, Gurgaon, +919711248931, manvibreja@ncuindia.edu (offline)', 'Dr Pooja Sachdeva (9711380505), Dr Parneeta Dhaliwal (9871425044)', 7),

('a0000000-0002-4000-8000-000000000008', 2, '2026-02-13', 'technical_session', 'Technical Session – III: Track-3/ Track-1 Offline', NULL, '11:15 AM', '01:30 PM', 'LS03 (L Block)', 'Technical Session – III', 'Track-3/ Track-1', 'Offline', 'Dr Rohit Tanwar, Shri Mata Vaishno Devi University, +91-9992257914, rohit.tanwar.cse@gmail.com (offline)', 'Dr Mamta Arora (9873599315), Dr Monika Garg (9650353336)', 8),

('a0000000-0002-4000-8000-000000000009', 2, '2026-02-13', 'technical_session', 'Technical Session – III: Track-1/ Track-6 Online', NULL, '11:15 AM', '01:30 PM', 'LF03 (L Block)', 'Technical Session – III', 'Track-1/ Track-6', 'Online', 'Prof Preeti Kaur, NSUT, Delhi, 9810870327, preeti.kaur@nsut.ac.in (offline)', 'Dr Rajnesh Kr Singh (7836901337), Dr Gurpreet Singh Matharou (9413067409)', 9),

('a0000000-0002-4000-8000-000000000010', 2, '2026-02-13', 'technical_session', 'Technical Session – III: Track-11/ Track-12 Online', NULL, '11:15 AM', '01:30 PM', 'LF10 (L Block)', 'Technical Session – III', 'Track-11/ Track-12', 'Online', 'Dr Poonam Rani, NSUT, Delhi, 8882144367, poonam.rani@nsut.ac.in (offline)', 'Dr Jitendra Pal Singh (8449689802), Dr Abhishek Saxena (9457580379)', 10),

('a0000000-0002-4000-8000-000000000011', 2, '2026-02-13', 'technical_session', 'Technical Session – III: Track-8/ Track-3 Online', NULL, '11:15 AM', '01:30 PM', 'I Block Auditorium', 'Technical Session – III', 'Track-8/ Track-3', 'Online', 'Dr Priti Bansal, NSUT, Delhi, 09811614388, bansalpriti79@gmail.com (offline)', 'Dr Monika Lamba (9711434143), Dr Sujata (9910096028)', 11),

('a0000000-0002-4000-8000-000000000012', 2, '2026-02-13', 'technical_session', 'Technical Session – III: Track-1/ Track-7 Online', NULL, '11:15 AM', '01:30 PM', 'CADR Room G Block Basement', 'Technical Session – III', 'Track-1/ Track-7', 'Online', 'Prof Dileep Kumar Yadav, Bennett University, +91-9891359168, dileep252000@gmail.com (offline)', 'Dr Deepti Thakral (9958200333), Dr Prinima Gupta (9971405007)', 12),

-- Post Session III events Day 2
('a0000000-0002-4000-8000-000000000013', 2, '2026-02-13', 'lunch', 'Lunch Break', NULL, '01:30 PM', '02:30 PM', NULL, NULL, NULL, NULL, NULL, NULL, 13),

('a0000000-0002-4000-8000-000000000014', 2, '2026-02-13', 'valedictory', 'Valedictory Session', NULL, '02:30 PM', '04:00 PM', 'G Block Mandala', NULL, NULL, NULL, NULL, NULL, 14),

('a0000000-0002-4000-8000-000000000015', 2, '2026-02-13', 'high_tea', 'High Tea', NULL, '04:00 PM', '04:30 PM', NULL, NULL, NULL, NULL, NULL, NULL, 15),

('a0000000-0002-4000-8000-000000000016', 2, '2026-02-13', 'certificate', 'Certificate Distribution', NULL, '04:30 PM', '05:00 PM', NULL, NULL, NULL, NULL, NULL, NULL, 16);


-- ============================================================
-- SESSION PAPERS
-- ============================================================

-- ============================================================
-- DAY 1 - TECHNICAL SESSION I PAPERS
-- ============================================================

-- Session I Room 1: Track-1 Online, LT03
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000004', '75', 'IoT-Based Temperature Forecasting System for Smart Agriculture Applications', 'Mathivanan P', '1', 'online', '11:50 AM - 12:10 PM', 1),
('a0000000-0001-4000-8000-000000000004', '121', 'Radiomics-Based Classification of Hepatocellular Carcinoma Using an Empirical Curvelet-Ridgelet-Wavelet Transform Approach', 'Anupama Jamwal, Dr. Shruti Jain', '1', 'online', '12:10 PM - 12:30 PM', 2),
('a0000000-0001-4000-8000-000000000004', '133', 'A Comprehensive Review on Software Forensics: Enhancing Integrity Verification and Legal Accountability in Software Investigations', 'Sahil Mehta', '1', 'online', '12:30 PM - 12:50 PM', 3),
('a0000000-0001-4000-8000-000000000004', '363', 'Optimizing NLP Models for Low-Resource Languages Using Knowledge Distillation', 'Pratik Kumar', '1', 'online', '12:50 PM - 01:10 PM', 4),
('a0000000-0001-4000-8000-000000000004', '390', 'Adaptive Noise-Aware Variational Quantum Classifier for Robust Machine Learning on NISQ Devices', 'Pravin P', '1', 'online', '01:10 PM - 01:30 PM', 5),
('a0000000-0001-4000-8000-000000000004', '425', 'Inference of low-bit Deep Neural Networks on FPGAs using Hardcoded Dataflow-style methods', 'Anushka Sikarwar', '1', 'online', '01:30 PM - 01:50 PM', 6);

-- Session I Room 2: Track-1/Track-2/Track-7 Offline, LT10
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000005', '283', 'Comparing LLMs for Phishing Email Detection', 'Praveen Kumar Sharma', '1', 'offline', '11:50 AM - 12:10 PM', 1),
('a0000000-0001-4000-8000-000000000005', '690', 'An AI-Centric Multimodal Framework for Cognitive Productivity and Digital Wellbeing', 'Ashima Garg', '1', 'offline', '12:10 PM - 12:30 PM', 2),
('a0000000-0001-4000-8000-000000000005', '1473', 'Hybrid Explainable Framework for Mammographic Breast Cancer Detection using ResNet with Integrated Gradients and Grad-CAM', 'Sugandha Kaur', '1', 'offline', '12:30 PM - 12:50 PM', 3),
('a0000000-0001-4000-8000-000000000005', '537', 'Dynamic Data-Driven Framework for Forecasting Employment Trends in the AI Era', 'Mayank Singh Negi', '2', 'offline', '12:50 PM - 01:10 PM', 4),
('a0000000-0001-4000-8000-000000000005', '1268', 'Lung Cancer Diagnosis- Visualizing Deep Learning Decision Pathway', 'Osheen Sharma', '7', 'offline', '01:10 PM - 01:30 PM', 5);

-- Session I Room 3: Track-2 Online, LS10
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000006', '589', 'Differentiation of Rapid-Growing Mycobacteria via Handcrafted Image Features and Supervised Classifiers', 'Shambhavi Priya', '2', 'online', '11:50 AM - 12:10 PM', 1),
('a0000000-0001-4000-8000-000000000006', '791', 'An Integrated Predictive Analytics Architecture for Coordinated Sales Demand and Customer Lifetime Value Forecasting', 'Jyoti Kunal Shah', '2', 'online', '12:10 PM - 12:30 PM', 2),
('a0000000-0001-4000-8000-000000000006', '906', 'Hybrid Heuristic and Zero-Knowledge Proof Framework for Patient Data Sanitization and Selective Disclosure in Smart Contracts', 'M.Lakshmanan', '2', 'online', '12:30 PM - 12:50 PM', 3),
('a0000000-0001-4000-8000-000000000006', '910', 'AI-Powered Legal Document Consistency Analyzer', 'Shreya Rajendra Kamat', '2', 'online', '12:50 PM - 01:10 PM', 4),
('a0000000-0001-4000-8000-000000000006', '1273', 'MPA-Based Opinion Leader Detection for Mental Health in Online Social Networks', 'pramod kumar soni', '2', 'online', '01:10 PM - 01:30 PM', 5),
('a0000000-0001-4000-8000-000000000006', '1301', 'Machine Learning-Based Arrhythmia Detection: Enhancing ECG Classification for Early Diagnosis', 'Nihar Shaileshbhai Dadhania', '2', 'online', '01:30 PM - 01:50 PM', 6);

-- Session I Room 4: Track-7 Offline, LS09
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000007', '65', 'Size and Strain Analysis of MgFe2O4 Obtained from Citric-acid Assisted Sol-gel route', 'Vinod Singh', '7', 'offline', '11:50 AM - 12:10 PM', 1),
('a0000000-0001-4000-8000-000000000007', '259', 'A STUDY ON MECHANICAL BEHAVIOUR OF TERNARY BLENDED GEOPOLYMER CONCRETE', 'Ayushi Gupta', '7', 'offline', '12:10 PM - 12:30 PM', 2),
('a0000000-0001-4000-8000-000000000007', '870', 'Synergistic Optimization of Piezoelectric Transducers', 'Pankaj Jha', '7', 'offline', '12:30 PM - 12:50 PM', 3),
('a0000000-0001-4000-8000-000000000007', '1099', 'Image Encryption and Decryption using AES and Pixel Shuffling Techniques', 'Dev Kumar Sharma', '7', 'offline', '12:50 PM - 01:10 PM', 4),
('a0000000-0001-4000-8000-000000000007', '1292', 'Synthesis of Ni-rich layered cathodes using Sol-gel Method', 'IFFAT KHAN', '7', 'offline', '01:10 PM - 01:30 PM', 5);

-- Session I Room 5: Track-3/Track-2 Offline, LS03
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000008', '167', 'Lean 4.0 Evaluation Framework for MSME Sustainability', 'Neeraj Kumar', '3', 'offline', '11:50 AM - 12:10 PM', 1),
('a0000000-0001-4000-8000-000000000008', '207', 'Exploring Blockchain Adoption in Supply Chain Networks', 'Prateek Choudhary', '3', 'offline', '12:10 PM - 12:30 PM', 2),
('a0000000-0001-4000-8000-000000000008', '763', 'Ensemble Learning for Stock Market Forecasting: A Stacking-Based Framework Using LSTM and Random Forest', 'Neha Sharma', '3', 'offline', '12:30 PM - 12:50 PM', 3),
('a0000000-0001-4000-8000-000000000008', '887', 'Compiler Performance Analysis for AI Workloads on RISC-V: A Comprehensive Comparison of GCC and LLVM', 'Samarth Dhiman', '3', 'offline', '12:50 PM - 01:10 PM', 4),
('a0000000-0001-4000-8000-000000000008', '318', 'Renyi Fuzzy Decision Tree to Frame Fairer Tax Policies', 'Aman P.R', '2', 'offline', '01:10 PM - 01:30 PM', 5);

-- Session I Room 6: Track-1 Online, LF03
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000009', '961', 'Tri-Modal DeepFusion: A Privacy-Preserving Hybrid Feature-Score Fusion Framework for Multimodal Biometric Authentication Using Face, Fingerprint, and Iris', 'Karunakar Kavuri', '1', 'online', '11:50 AM - 12:10 PM', 1),
('a0000000-0001-4000-8000-000000000009', '1217', 'Lung Cancer Diagnosis - Visualizing Deep Learning Decision Pathways', 'Manikandakumar M', '1', 'online', '12:10 PM - 12:30 PM', 2),
('a0000000-0001-4000-8000-000000000009', '1275', 'Privacy Preserving Multi-Keyword Search and Ranked Retrieval Using Homomorphic Encryption in Cloud Environment', 'Jasmine M.S', '1', 'online', '12:30 PM - 12:50 PM', 3),
('a0000000-0001-4000-8000-000000000009', '1405', 'Block-chain Enabled Grey Wolf Optimization for Secure Capacitor Placement in Smart Distribution Systems', 'GOLLA LAHARI', '1', 'online', '12:50 PM - 01:10 PM', 4),
('a0000000-0001-4000-8000-000000000009', '1429', 'A Heterogeneous Ensemble for Robust Deepfake Detection: Synergistic Integration of Convolutional and Transformer Architectures', 'Aswin Bala R', '1', 'online', '01:10 PM - 01:30 PM', 5),
('a0000000-0001-4000-8000-000000000009', '1436', 'AI-Enabled Cognitive Health Monitoring: Multimodal Framework for Alzheimer''s Detection using EEG Entropy, HRV and Sleep Signals', 'Nabanita Sinha', '1', 'online', '01:30 PM - 01:50 PM', 6);

-- Session I Room 7: Track-5/Track-10 Offline, LF09
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000010', '610', 'Harnessing Waste Materials for Electricity Production: Toward a Zero-Waste Energy Future', 'Ram Ashish Maurya', '5', 'offline', '11:50 AM - 12:10 PM', 1),
('a0000000-0001-4000-8000-000000000010', '817', 'Traffic Diversion using Convolutional Neural Networks', 'Lakshya Lal', '5', 'offline', '12:10 PM - 12:30 PM', 2),
('a0000000-0001-4000-8000-000000000010', '1058', 'A Geospatial approach for E-waste Facility Locating', 'Sarvagya Pratap Singh', '5', 'offline', '12:30 PM - 12:50 PM', 3),
('a0000000-0001-4000-8000-000000000010', '1415', 'City Scope: A Smart Parking Management System for Real-Time Vehicle Detection and Tracking Using YOLOv5, ANPR', 'Prakhar Kaushik', '5', 'offline', '12:50 PM - 01:10 PM', 4),
('a0000000-0001-4000-8000-000000000010', '1313', 'AI-Powered Waste Classification and Recycling Optimisation: Advancing Sustainable Waste Management', 'Dr. Rashmi Sharma', '10', 'offline', '01:10 PM - 01:30 PM', 5);

-- Session I Room 8: Track-10 Online, LF10
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000011', '326', 'Combining Explainable AI and Federated Learning in Data-Centric Frameworks of Edge-Based Intelligence', 'KAMALAKANNAN K', '10', 'online', '11:50 AM - 12:10 PM', 1),
('a0000000-0001-4000-8000-000000000011', '671', 'Brain Tumor Detection from MRI Scans Using a Fine-Tuned VGG16 Model and Explainable AI', 'Bharat Bhushan', '10', 'online', '12:10 PM - 12:30 PM', 2),
('a0000000-0001-4000-8000-000000000011', '836', 'Federated Multi-Agent Reinforcement Learning for Resource Optimization in WBANs', 'Rajesh Kumar Behera', '10', 'online', '12:30 PM - 12:50 PM', 3),
('a0000000-0001-4000-8000-000000000011', '907', 'Federated Augmented Random Search Reinforcement Learning for Edge-Private Autonomous Driving Systems', 'M.Lakshmanan', '10', 'online', '12:50 PM - 01:10 PM', 4),
('a0000000-0001-4000-8000-000000000011', '1094', 'Comparative Analysis of Machine Learning Models for Predicting Chess Outcomes Across Skill Strata', 'Sumanyu Singh', '10', 'online', '01:10 PM - 01:30 PM', 5),
('a0000000-0001-4000-8000-000000000011', '1271', 'Enhanced ECG Classification for Cardiac Illnesses Using Grasshopper-Optimized Attention-RNN Classifier', 'M. J. Murali', '10', 'online', '01:30 PM - 01:50 PM', 6);

-- Session I Room 9: Track-11 Offline/Online, I Block Auditorium
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000012', '314', 'Able Vista: A Technology-Driven Platform for Enhancing Learning Outcomes Among Special Learners', 'Aditya Arora', '11', 'offline', '11:50 AM - 12:10 PM', 1),
('a0000000-0001-4000-8000-000000000012', '421', 'Blockchain for Freelance Workforce Management in the Gig Economy', 'Dr. Aneesya Panicker', '11', 'online', '12:10 PM - 12:30 PM', 2),
('a0000000-0001-4000-8000-000000000012', '472', 'Lesion-aware Transformer-based Deep Hybrid Model (LTDHM) for Explainable Diabetic Retinopathy Detection', 'Rashmi Bhardwaj', '11', 'online', '12:30 PM - 12:50 PM', 3),
('a0000000-0001-4000-8000-000000000012', '528', 'Real-Time Groundwater Resource Evaluation Using DWLR Data and AI Models', 'Sneha Kandacharam', '11', 'offline', '12:50 PM - 01:10 PM', 4),
('a0000000-0001-4000-8000-000000000012', '1086', 'Smart-VISION: A Deep Learning Based Real-Time Violence Detection System for CCTV Surveillance', 'Ravikant Jangid', '11', 'online', '01:10 PM - 01:30 PM', 5),
('a0000000-0001-4000-8000-000000000012', '1088', 'Smart Healthcare: Real-Time Patient Monitoring and Emergency Response Systems for smart cities', 'Dr Ashima Arya', '11', 'online', '01:30 PM - 01:50 PM', 6);

-- Session I Room 10: Track-1/Track-2 Online, CADR Room
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000013', '79', 'Responsible AI in the Algorithmic Era: Ethics, Bias, and Emerging Frontiers', 'Dr. Tapsi Nagpal', '1', 'online', '11:50 AM - 12:10 PM', 1),
('a0000000-0001-4000-8000-000000000013', '210', 'Ethical Integration of Machine Learning and Vision Systems for Academic Environments', 'Dr. Rajeev Kumar', '1', 'online', '12:10 PM - 12:30 PM', 2),
('a0000000-0001-4000-8000-000000000013', '262', 'HADF: A Hybrid Adaptive Deep Framework for Robust and Mobile-Efficient Plant Disease Detection', 'Seema Maitrey', '1', 'online', '12:30 PM - 12:50 PM', 3),
('a0000000-0001-4000-8000-000000000013', '829', 'Serverless News Aggregation Through Semantic Event Clustering and Multi-Feed Recommendation', 'Pulkit Goyal', '1', 'online', '12:50 PM - 01:10 PM', 4),
('a0000000-0001-4000-8000-000000000013', '103', 'Hybrid CNN-ResNet18 Framework for Accurate Brain Tumor Classification Using MRI', 'Prabhleen Kaur', '2', 'online', '01:10 PM - 01:30 PM', 5),
('a0000000-0001-4000-8000-000000000013', '992', 'Early Detection and Classification of Alzheimer''s Disease from MRI Data using Harmonised MCI-SSL', 'Pari Bansal', '2', 'online', '01:30 PM - 01:50 PM', 6);


-- ============================================================
-- DAY 1 - TECHNICAL SESSION II PAPERS
-- ============================================================

-- Session II Room 1: Track-1 Online, LT03
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000015', '488', 'Machine Learning and Optimization Based Cow Health Prediction', 'Dr. Preeti Yadav', '1', 'online', '02:20 PM - 02:40 PM', 1),
('a0000000-0001-4000-8000-000000000015', '489', 'A Privacy-Respecting Federated Approach for Non-IID ECG Signal Classification using Adaptive Aggregation', 'Dr. Kaushal Kumar', '1', 'online', '02:40 PM - 03:00 PM', 2),
('a0000000-0001-4000-8000-000000000015', '510', 'Explainable Toxic Comment Detection and Detoxification in Code-Mixed Languages using Multi-Task Attention', 'Swathi Donga', '1', 'online', '03:00 PM - 03:20 PM', 3),
('a0000000-0001-4000-8000-000000000015', '606', 'Position-Aware Mobile User Authentication using CNN-LSTM based Keystroke Dynamics', 'Baljit Singh Saini', '1', 'online', '03:20 PM - 03:40 PM', 4),
('a0000000-0001-4000-8000-000000000015', '793', 'Speech-To-Speech Machine Translation using Attention-Based Neural Models for Indic Languages', 'G Y K Vaishnavi', '1', 'online', '03:40 PM - 04:00 PM', 5),
('a0000000-0001-4000-8000-000000000015', '1037', 'Hooked Without Knowing: Unveiling the Power of Virtual Unconsciousness in Social Media Loyalty', 'Adele B L Mailangkay', '1', 'online', '04:00 PM - 04:20 PM', 6),
('a0000000-0001-4000-8000-000000000015', '1216', 'Exploring Factors that Influence the Behavioral Intention to use AI-Based Robots in the Education Sector', 'Amadeus Davin Darryl Chandra', '1', 'online', '04:20 PM - 04:40 PM', 7);

-- Session II Room 2: Track-1 Offline, LT10
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000016', '558', 'Evaluating the Generalization Ability of an Ensemble-Based Fake News Detection Model across Multiple Domains', 'Jyoti / Dr Yogesh Kumar', '1', 'offline', '02:20 PM - 02:40 PM', 1),
('a0000000-0001-4000-8000-000000000016', '674', 'Adaptive Locality-Aware Dynamic Key Distribution for Secure Wireless Sensor Networks', 'Monjul Saikia', '1', 'offline', '02:40 PM - 03:00 PM', 2),
('a0000000-0001-4000-8000-000000000016', '764', 'A Hybrid Swarm Intelligence and Deep Learning Framework for Energy-Efficient Routing in Wireless Sensor Networks', 'Dr. Sarita Yadav', '1', 'offline', '03:00 PM - 03:20 PM', 3),
('a0000000-0001-4000-8000-000000000016', '1076', 'Evaluation of a Natural-Language Programming Syntax with White and Black Box Testing', 'Chitraksh Tarun', '1', 'offline', '03:20 PM - 03:40 PM', 4),
('a0000000-0001-4000-8000-000000000016', '1102', 'SmartNotice: A Retrieval Augmented Generation System for College Notices', 'Anmol Gupta', '1', 'offline', '03:40 PM - 04:00 PM', 5);

-- Session II Room 3: Track-3 Online, LS10
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000017', '111', 'Towards Sustainable Textile Manufacturing: Implementing Intelligent Predictive Maintenance in the Indian Context', 'Dr. Hirendra Singh', '3', 'online', '02:20 PM - 02:40 PM', 1),
('a0000000-0001-4000-8000-000000000017', '129', 'Integrating Blockchain and Self-Sovereign Identity for Secure, Scalable, and User-Controlled Digital Identity Systems', 'Paras Mahajan', '3', 'online', '02:40 PM - 03:00 PM', 2),
('a0000000-0001-4000-8000-000000000017', '261', 'Blockchain Consortium Model for Increased Transparency In School Budget Usage', 'Inayatulloh', '3', 'online', '03:00 PM - 03:20 PM', 3),
('a0000000-0001-4000-8000-000000000017', '782', 'Optimizing Linux Kernel Scheduler Parameters Using Reinforcement Learning', 'HITESH MAKKAR', '3', 'online', '03:20 PM - 03:40 PM', 4),
('a0000000-0001-4000-8000-000000000017', '835', 'Explainable Deep Learning for Early-Stage Hepatitis B Fibrosis Detection with Multi-Modal Conventional Ultrasound Imaging', 'Kunal Roy', '3', 'online', '03:40 PM - 04:00 PM', 5),
('a0000000-0001-4000-8000-000000000017', '925', 'Adoption of Blockchain Technology via Mobile Apps to Promote Gender Equality in School Education', 'Inayatulloh', '3', 'online', '04:00 PM - 04:20 PM', 6),
('a0000000-0001-4000-8000-000000000017', '1026', 'Blockchain-Enabled Hybrid QKD-Kyber KEM Framework for Post-Quantum Secure Key Exchange', 'Riya Jalgaonkar', '3', 'online', '04:20 PM - 04:40 PM', 7),
('a0000000-0001-4000-8000-000000000017', '1303', 'Analyzing the Effectiveness of AI-Based Learning Tools on Indonesian Students Using the TAM Model', 'Micheline Unviana', '3', 'online', '04:40 PM - 05:00 PM', 8);

-- Session II Room 4: Track-4/Track-2 Offline, LS03
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000018', '545', 'AI-ML based intelligent support system for elderly well-being and safety', 'Basanta Mahato', '4', 'offline', '02:20 PM - 02:40 PM', 1),
('a0000000-0001-4000-8000-000000000018', '600', 'Comparison of Multiple Algorithms for Aerial Target Tracking Using IR Dataset in OpenCV', 'Arshi Zaidi', '4', 'offline', '02:40 PM - 03:00 PM', 2),
('a0000000-0001-4000-8000-000000000018', '720', 'Performance Investigation of Molybdenum Disulphide (MoS2) Junctionless Symmetric Split-Gate (SymSG) FET for Biosensing Applications', 'Chetna Garg', '4', 'offline', '03:00 PM - 03:20 PM', 3),
('a0000000-0001-4000-8000-000000000018', '819', 'Wi-Fi Based Room Occupancy Estimation and Prediction Using Clustering Techniques and Deep Learning', 'Anurag Agarwal', '4', 'offline', '03:20 PM - 03:40 PM', 4),
('a0000000-0001-4000-8000-000000000018', '1080', 'A Sustainable Approach to Climate Change Mitigation and Energy Security Enhancement Through Biofuels Integrated with IoT', 'Piyush Charan', '4', 'offline', '03:40 PM - 04:00 PM', 5),
('a0000000-0001-4000-8000-000000000018', '1206', 'Heterophily-Robust Patient-Similarity Graphs for Parkinson''s Screening from Voice', 'Siddhant Ujjain', '2', 'offline', '04:00 PM - 04:20 PM', 6);

-- Session II Room 5: Track-4/Track-2 Online, LF03
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000019', '78', 'A Comprehensive Review of Advanced TFETs Architectures for Biosensing Applications', 'Dr. Kaushal Kumar', '4', 'online', '02:20 PM - 02:40 PM', 1),
('a0000000-0001-4000-8000-000000000019', '249', 'Performance Analysis of Equal Gain Combining and Maximal Ratio Combining over Correlated Weibull fading channels - A Review', 'Kirandeep Kaur', '4', 'online', '02:40 PM - 03:00 PM', 2),
('a0000000-0001-4000-8000-000000000019', '264', 'Tunnel to Efficiency: A Deep Dive into TFET and JL-TFET Advancements', 'Dr. Kaushal Kumar', '4', 'online', '03:00 PM - 03:20 PM', 3),
('a0000000-0001-4000-8000-000000000019', '441', 'Performance Simulation Model under Nakagami-m Fading Channel', 'Manju Devrari', '4', 'online', '03:20 PM - 03:40 PM', 4),
('a0000000-0001-4000-8000-000000000019', '487', 'Analysis of Analog and RF Parameter Variations in JLTFETs Due to Different Work Functions', 'Dr. Kaushal Kumar', '4', 'online', '03:40 PM - 04:00 PM', 5),
('a0000000-0001-4000-8000-000000000019', '780', 'Interface and Transport-Layer Engineering for CdS/BaZrS3/CuSCN Solar Cells: Device Simulation, Band Alignment and Defect Effects', 'Chandni Tiwari', '4', 'online', '04:00 PM - 04:20 PM', 6),
('a0000000-0001-4000-8000-000000000019', '781', 'Numerical Investigation of MASnBr3/CsSnGeI3/SnO2 Solar Cell: Understanding the Impact of Absorber Layer Parameters', 'Chandni Tiwari', '4', 'online', '04:20 PM - 04:40 PM', 7),
('a0000000-0001-4000-8000-000000000019', '765', 'Enhancing Hybrid Recommendation Systems with CUR-based Matrix Decomposition and Deep Neural Network Architectures for Consumer Behaviour Prediction', 'Abhigyan', '2', 'online', '04:40 PM - 05:00 PM', 8);

-- Session II Room 6: Track-8 Offline, LF09
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000020', '150', 'Generative AI in Action: Driving Sustainable Solutions Across Smart Cities, Energy, Agriculture and Healthcare', 'Jitendra Jain', '8', 'offline', '02:20 PM - 02:40 PM', 1),
('a0000000-0001-4000-8000-000000000020', '844', 'Smart Manufacturing Optimization System: An AI-Driven Approach for SME', 'Manan Kant Agarwal', '8', 'offline', '02:40 PM - 03:00 PM', 2),
('a0000000-0001-4000-8000-000000000020', '845', 'AI-Driven Framework for Email Redirection and Communication Optimization in Academic Institutions', 'Kushagra Agrawal', '8', 'offline', '03:00 PM - 03:20 PM', 3),
('a0000000-0001-4000-8000-000000000020', '1020', 'Multi-Modal Lightweight Deep Learning Framework for Robust In-Field Plant/Crop Disease Detection with Explainability (XAI)', 'Dr. Garima, Ghanshyam Yadav, Bhupendra Kr', '8', 'offline', '03:20 PM - 03:40 PM', 4),
('a0000000-0001-4000-8000-000000000020', '1203', 'BiasHindi: A Benchmarking Framework for Social Bias in English Hindi Translation', 'Jigyasa Patra', '8', 'offline', '03:40 PM - 04:00 PM', 5);

-- Session II Room 7: Track-9/Track-12 Online, LF10
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000021', '279', 'Sensor Fusion and Predictive Modeling in Mobile Robotics: A Deep Learning-Based Framework for Environmental Awareness', 'Dr. Renu Kumawat', '9', 'online', '02:20 PM - 02:40 PM', 1),
('a0000000-0001-4000-8000-000000000021', '280', 'Uncertainty-Aware Decision Making in Robotics Using Bayesian Data Science Techniques', 'Dr. Renu Kumawat', '9', 'online', '02:40 PM - 03:00 PM', 2),
('a0000000-0001-4000-8000-000000000021', '583', 'AI-Enhanced Cybersecurity Operations System for Real-Time Phishing Detection and User Education', 'Temienor Nikatsekpe', '9', 'online', '03:00 PM - 03:20 PM', 3),
('a0000000-0001-4000-8000-000000000021', '905', 'Prediction of Yield Strength of Al-Mg-Si Alloys Using Neural Network and XGBoost based on Artificial ageing time', 'M.Lakshmanan', '9', 'online', '03:20 PM - 03:40 PM', 4),
('a0000000-0001-4000-8000-000000000021', '1285', 'Deepfake Video Forensics Using ResNeXt-LSTM Visual Modeling and DSP-Enhanced Audio Spectrogram Analysis', 'Tanish Lal O', '9', 'online', '03:40 PM - 04:00 PM', 5),
('a0000000-0001-4000-8000-000000000021', '1067', 'Deep Hybrid Architecture for Cybersecurity Threat Detection in IIOT Networks: CNN-BiGRU Approach', 'Valluri Daneesha', '12', 'online', '04:00 PM - 04:20 PM', 6);

-- Session II Room 8: Track-8 Online, I Block Auditorium
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000022', '76', 'Systematic Literature Review on CNN and Transform Based Plant Disease Detection Techniques', 'Karan Soni', '8', 'online', '02:20 PM - 02:40 PM', 1),
('a0000000-0001-4000-8000-000000000022', '130', 'Adaptive Scheduling for Cost-Efficient and High-Performance Hybrid Data Applications', 'Paras Mahajan', '8', 'online', '02:40 PM - 03:00 PM', 2),
('a0000000-0001-4000-8000-000000000022', '163', 'Sliding K-Means and Progressive Deep Learning for Dynamic Hand Gesture Recognition in Human Computer Interaction', 'Arpneek Kaur, Sandhya Bansal', '8', 'online', '03:00 PM - 03:20 PM', 3),
('a0000000-0001-4000-8000-000000000022', '247', 'Data-Centric Smart Drip Irrigation: An IoT-InceptionNet Framework for Real-Time Water Demand Prediction', 'Anbarasu R', '8', 'online', '03:20 PM - 03:40 PM', 4),
('a0000000-0001-4000-8000-000000000022', '307', 'Improved Cloud-based Task Scheduling Using Hybrid MCTFFA Model for Enhanced Performance Metrics', 'Rashmi Makkar', '8', 'online', '03:40 PM - 04:00 PM', 5),
('a0000000-0001-4000-8000-000000000022', '388', 'An Optimized Deep Learning-based Lesion Segmentation Model for Early Gastric Cancer Diagnosis Using Pre-processed Gastroscopic Images', 'SOURABH BUDHIRAJA', '8', 'online', '04:00 PM - 04:20 PM', 6),
('a0000000-0001-4000-8000-000000000022', '424', 'Machine Learning for Predictive Maintenance in Industry 4.0', 'Dr. Jasjeet Singh', '8', 'online', '04:20 PM - 04:40 PM', 7),
('a0000000-0001-4000-8000-000000000022', '1089', 'Heart Disease Risk Prediction Models and their Accuracies: A Systematic Review', 'Preeti Sharma', '8', 'online', '04:40 PM - 05:00 PM', 8);

-- Session II Room 9: Track-8/Track-2/Track-4 Online, CADR Room
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0001-4000-8000-000000000023', '112', 'A Hybrid Approach Based on Deep Learning to Classify the Disease of Apple Leaves', 'Sandeep Kumar', '8', 'online', '02:20 PM - 02:40 PM', 1),
('a0000000-0001-4000-8000-000000000023', '1208', 'A Comprehensive Comparison of Vanilla GAN, WGAN, and DCGAN Variations', 'Dhawani Nanda', '8', 'online', '02:40 PM - 03:00 PM', 2),
('a0000000-0001-4000-8000-000000000023', '1227', 'Smart Diagnosis: Leveraging Generative AI to Improve Disease Detection in Real-World Healthcare', 'Ritu Gautam', '8', 'online', '03:00 PM - 03:20 PM', 3),
('a0000000-0001-4000-8000-000000000023', '609', 'Cryptocurrency Price Prediction using Deep Learning: A Comparative Study of Time-Series Models', 'Divya Pandey', '2', 'online', '03:20 PM - 03:40 PM', 4),
('a0000000-0001-4000-8000-000000000023', '748', 'Machine Learning based Process Optimization in L-PBF Manufacturing of Inconel 718 Spur Gears', 'Ravi Kishor Ranjan', '2', 'online', '03:40 PM - 04:00 PM', 5),
('a0000000-0001-4000-8000-000000000023', '237', 'Metamaterial Inspired Aperture Coupled Patch Antenna for V2X Applications', 'Chirag Arora', '4', 'online', '04:00 PM - 04:20 PM', 6),
('a0000000-0001-4000-8000-000000000023', '469', 'Steric Hindrance Effect on Core-Shell Junctionless Nanowire FET Based Biosensor Sensitivity for Breast Cancer Detection', 'BHARTI', '4', 'online', '04:20 PM - 04:40 PM', 7);


-- ============================================================
-- DAY 2 - TECHNICAL SESSION III PAPERS
-- ============================================================

-- Session III Room 1: Track-1/Track-5 Online, LT03
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0002-4000-8000-000000000004', '1439', 'Data-Driven Prediction of Diabetes Using Machine Learning and Deep Learning Methods', 'Annette Nayana Nellyet', '1', 'online', '11:15 AM - 11:35 AM', 1),
('a0000000-0002-4000-8000-000000000004', '1441', 'A Piecewise Fuzzy SIER Model for Alzheimer Disease Progression', 'Dr.R.Naveenkumar', '1', 'online', '11:35 AM - 11:55 AM', 2),
('a0000000-0002-4000-8000-000000000004', '1443', 'Multimodal and Transformer-Driven Bone Tumor Classification: State-of-the-Art Review and Mathematical Modeling Framework', 'Diksha', '1', 'online', '11:55 AM - 12:15 PM', 3),
('a0000000-0002-4000-8000-000000000004', '1450', 'AI-Based Smart Surveillance System Using Raspberry Pi and Embedded Vision', 'S.Prabu', '1', 'online', '12:15 PM - 12:35 PM', 4),
('a0000000-0002-4000-8000-000000000004', '1453', 'IoT-Integrated Embedded System for Smart Waste Management in Urban Areas', 'Saloni Manhas', '1', 'online', '12:35 PM - 12:55 PM', 5),
('a0000000-0002-4000-8000-000000000004', '550', 'Adaptive Control of DSTATCOM Using Hybrid NN-BAT Optimization for Voltage Stability and THD Reduction', 'Surbhi', '5', 'online', '12:55 PM - 01:15 PM', 6),
('a0000000-0002-4000-8000-000000000004', '986', 'Scene Segmentation in rural and urban regions from Remote Sensing Data', 'Prasanth K', '5', 'online', '01:15 PM - 01:35 PM', 7);

-- Session III Room 2: Track-1 Offline, LT10
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0002-4000-8000-000000000005', '1209', 'Enhanced Alpha-Beta Pruning and Evaluation Function Optimization for Pac-Man AI Agents', 'Yuvraj Rajni Sachin Deshmukh', '1', 'offline', '11:15 AM - 11:35 AM', 1),
('a0000000-0002-4000-8000-000000000005', '1210', 'Comparative Analysis of Enhanced Weighted A* and Theta* Search Algorithms on Pacman Mazes', 'Shlok Burmi', '1', 'offline', '11:35 AM - 11:55 AM', 2),
('a0000000-0002-4000-8000-000000000005', '1309', 'ReadSetu: A Scalable Genre-Aware Hybrid Recommendation Framework Integrating Textual Semantics and User Behavior Modeling', 'Priyanka Singh', '1', 'offline', '11:55 AM - 12:15 PM', 3),
('a0000000-0002-4000-8000-000000000005', '1471', 'Performance Comparison of Machine Learning Algorithms for Depression Risk Prediction using PHQ-9 Questionnaire', 'Ranveer Chauhan', '1', 'offline', '12:15 PM - 12:35 PM', 4),
('a0000000-0002-4000-8000-000000000005', '1472', 'Manasmitra: An Experimental Study on ML-Driven Mental Health Screening Using PHQ-9 and HRV', 'Anmol Bansal', '1', 'offline', '12:35 PM - 12:55 PM', 5),
('a0000000-0002-4000-8000-000000000005', '1474', 'A Comparative Evaluation of Metrics for Requirements Data Model Quality in Data Warehouses', 'Jaspreeti Singh', '1', 'offline', '01:15 PM - 01:35 PM', 6);

-- Session III Room 3: Track-4/Track-2/Track-1 Online, LS10
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0002-4000-8000-000000000006', '942', 'Performance Analysis of Equal Gain Combining over Weibull and Nakagami-m Fading Channels', 'Kirandeep Kaur', '4', 'online', '11:15 AM - 11:35 AM', 1),
('a0000000-0002-4000-8000-000000000006', '990', 'Design and Verification of FIFO using System Verilog', 'Neelam Deepthi Sree', '4', 'online', '11:35 AM - 11:55 AM', 2),
('a0000000-0002-4000-8000-000000000006', '1035', 'A Peer-to-Peer Bidirectional Communication Framework for Distributed Embedded Systems Using RS-485', 'Manoj Mysore Veere Gowda', '4', 'online', '11:55 AM - 12:15 PM', 3),
('a0000000-0002-4000-8000-000000000006', '1093', 'Optimal and Energy-Efficient Demultiplexer in QCA Nanotechnology', 'Nandan Vaid', '4', 'online', '12:15 PM - 12:35 PM', 4),
('a0000000-0002-4000-8000-000000000006', '1397', 'Analysis of Atmospheric Attenuation Effects on mmWave Signal Propagation in Future 6G Wireless Communication Networks', 'Pallavi Semwal', '4', 'online', '12:35 PM - 12:55 PM', 5),
('a0000000-0002-4000-8000-000000000006', '1299', 'MediBot: AI-Powered Healthcare Chatbot with Retrieval-Augmented Generation for Accurate Medical Response', 'Shri Krishna Mishra', '2', 'online', '12:55 PM - 01:15 PM', 6),
('a0000000-0002-4000-8000-000000000006', '1475', 'Real-Time Tea Leaf Disease Detection Using Attention-Driven YOLO Framework for Precision Plantation Management', 'Punit Kumar', '1', 'online', '01:15 PM - 01:35 PM', 7);

-- Session III Room 4: Track-9 Offline, LS09
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0002-4000-8000-000000000007', '216', 'A Hybrid Implicit Trust-Aware Framework with Trust Expansion Strategy for Enhanced Rating Prediction in Recommender Systems', 'Rishav Raj, Ashutosh, Abhishek Singh, Anshul Narge, Vaibhav Pundir', '9', 'offline', '11:15 AM - 11:35 AM', 1),
('a0000000-0002-4000-8000-000000000007', '234', 'Optimising DDoS Attack Detection Over Cloud', 'Bhagrajyoti Behera', '9', 'offline', '11:35 AM - 11:55 AM', 2),
('a0000000-0002-4000-8000-000000000007', '864', 'Developing enhanced security protocols for mobile banking applications using MFA in Blockchain', 'Tushar Verma', '9', 'offline', '11:55 AM - 12:15 PM', 3),
('a0000000-0002-4000-8000-000000000007', '934', 'Analysis of Different Cyberattacks on PMSG-Based Wind Turbine Control Systems', 'Nischay Rana', '9', 'offline', '12:15 PM - 12:35 PM', 4),
('a0000000-0002-4000-8000-000000000007', '1010', 'Active Expression-Driven Face Anti-Spoofing with Deep Reinforcement Learning Agents', 'Raj Singh', '9', 'offline', '12:35 PM - 12:55 PM', 5);

-- Session III Room 5: Track-3/Track-1 Offline, LS03
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0002-4000-8000-000000000008', '61', 'Design of A FCRD9T SRAM cell for Low-Power Wireless Communications', 'Deepika Bansal', '3', 'offline', '11:15 AM - 11:35 AM', 1),
('a0000000-0002-4000-8000-000000000008', '1219', 'Graph Neural Networks for Causal Inference in Climate Science: A Novel Approach to Model Modeling Complex Interactions', 'Preeti Sethi', '3', 'offline', '11:35 AM - 11:55 AM', 2),
('a0000000-0002-4000-8000-000000000008', '1278', 'Threat Detection Through Honeypot Data', 'Priyanshi Sharma', '3', 'offline', '11:55 AM - 12:15 PM', 3),
('a0000000-0002-4000-8000-000000000008', '1394', 'A Rigorous Mathematical Comparison of Retrieval-Augmented Generation and Fine-Tuning for Domain-Specific Language Model Customization', 'Raghvendra Kumar Jha', '3', 'offline', '12:15 PM - 12:35 PM', 4),
('a0000000-0002-4000-8000-000000000008', '1449', 'Spectrum Sensing Integration and Cross-Layer Optimisation in Cognitive Radio Routing Protocols', 'Neha Chaudhary', '3', 'offline', '12:35 PM - 12:55 PM', 5),
('a0000000-0002-4000-8000-000000000008', '1447', 'Farmers'' Transition to Organic Farming: Assessing the Impact of Markets, Policies, and Environmental Awareness', 'Dixit Kalra', '1', 'offline', '12:55 PM - 01:15 PM', 6),
('a0000000-0002-4000-8000-000000000008', '1448', 'BUILDING A FINANCIALLY INCLUSIVE FUTURE: PATHWAYS TO LITERACY, RESILIENCE, AND SUSTAINABLE GROWTH', 'Dixit Kalra, Manisha Mittal', '1', 'offline', '01:15 PM - 01:35 PM', 7);

-- Session III Room 6: Track-1/Track-6 Online, LF03
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0002-4000-8000-000000000009', '1456', 'Deep Learning Based Hybrid Model for Accurate Detection of Diabetic Retinopathy', 'Dr.R.Naveenkumar', '1', 'online', '11:15 AM - 11:35 AM', 1),
('a0000000-0002-4000-8000-000000000009', '1457', 'Explainable AI-Driven Intrusion Detection System Using Hybrid Deep Learning Models for Secure Network Infrastructure', 'Parul', '1', 'online', '11:35 AM - 11:55 AM', 2),
('a0000000-0002-4000-8000-000000000009', '1459', 'Hybrid Artificial Intelligence Internet of Things Platform for Personalized Healthcare Recommendations and Smart Patient Care Services', 'Richa', '1', 'online', '11:55 AM - 12:15 PM', 3),
('a0000000-0002-4000-8000-000000000009', '1460', 'Empirical Analysis on Different Techniques Affecting Training Time of Recommendation System', 'Saumya Goyal', '1', 'online', '12:15 PM - 12:35 PM', 4),
('a0000000-0002-4000-8000-000000000009', '787', 'Strategic Crowdsourcing: Bridging the Gap between Ideas and Market Solutions in Indian Capital Goods Sector and a Case Study', 'KUMAR ABHINAV', '6', 'online', '12:35 PM - 12:55 PM', 5),
('a0000000-0002-4000-8000-000000000009', '1310', 'Legal Governance of Human in the Loop Autonomy - Ensuring Safety and Accountability in Cyber Physical System', 'Ashish', '6', 'online', '12:55 PM - 01:15 PM', 6);

-- Session III Room 7: Track-11/Track-12 Online, LF10
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0002-4000-8000-000000000010', '422', 'The Role of Edge AI in Ultra-Reliable Wireless Networks', 'Angulakshmi M', '11', 'online', '11:15 AM - 11:35 AM', 1),
('a0000000-0002-4000-8000-000000000010', '595', 'SmartAgri-Net: Intelligent Crop Yield Prediction Using Hybrid Machine Learning Model', 'B.Umakanth', '11', 'online', '11:35 AM - 11:55 AM', 2),
('a0000000-0002-4000-8000-000000000010', '789', 'Evaluating The Robustness Of Yolov5 Object Detection On The KITTI Dataset Under Gaussian Noise And Fgsm Adversarial Attacks', 'Shashank Gupta', '11', 'online', '11:55 AM - 12:15 PM', 3),
('a0000000-0002-4000-8000-000000000010', '1406', 'AI Model Manipulation and Adversarial Threats in Internet of Things (AIoT) Environments: Challenges and Defense Mechanisms', 'Sk Wasim Haidar', '11', 'online', '12:15 PM - 12:35 PM', 4),
('a0000000-0002-4000-8000-000000000010', '761', 'Autonomous Mobile Robots (AMRs) for Warehouse and Production-Line Logistics', 'Prachur Gupta', '12', 'online', '12:35 PM - 12:55 PM', 5),
('a0000000-0002-4000-8000-000000000010', '977', 'Smart Non-Contact Portable Eye Pressure Monitor for Glaucoma Detection', 'Sai Geethika Kolanupaka', '12', 'online', '12:55 PM - 01:15 PM', 6),
('a0000000-0002-4000-8000-000000000010', '1435', 'Fault Detection in Healthcare: Patient Bed Exit Alert System using IoT', 'Bhavik Uppal', '12', 'online', '01:15 PM - 01:35 PM', 7);

-- Session III Room 8: Track-8/Track-3 Online, I Block Auditorium
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0002-4000-8000-000000000011', '805', 'AI-Powered Colour Image Retrieval using Hybrid Feature Descriptors', 'Yuvi', '8', 'online', '11:15 AM - 11:35 AM', 1),
('a0000000-0002-4000-8000-000000000011', '826', 'AI-based navigation browser extension for AWS', 'Riya Karmakar', '8', 'online', '11:35 AM - 11:55 AM', 2),
('a0000000-0002-4000-8000-000000000011', '1008', 'Unleashing Precision: Advancements in Digit Recognition through Machine Learning for Enhanced Efficiency', 'Anuj Kumar Jain', '8', 'online', '11:55 AM - 12:15 PM', 3),
('a0000000-0002-4000-8000-000000000011', '1009', 'Comparative Analysis of Machine Learning Models for Large-Scale Water Quality Assessment', 'Anuj Kumar Jain', '8', 'online', '12:15 PM - 12:35 PM', 4),
('a0000000-0002-4000-8000-000000000011', '1011', 'Advanced Welding Defect Detection Using Convolutional Neural Networks and Support Vector Machines', 'Bhavneet Kaur', '8', 'online', '12:35 PM - 12:55 PM', 5),
('a0000000-0002-4000-8000-000000000011', '1139', 'Quantum-Enhanced Representation of Transformer Embeddings for Fake News Detection', 'Shivani Tufchi', '3', 'online', '12:55 PM - 01:15 PM', 6);

-- Session III Room 9: Track-1/Track-7 Online, CADR Room
INSERT INTO public.session_papers (schedule_event_id, paper_id, paper_title, author_name, track_number, online_offline, timings, order_index) VALUES
('a0000000-0002-4000-8000-000000000012', '176', 'An Ensemble Approach for data forecasting from Knowledge Assimilation', 'Vipasha Abrol', '1', 'online', '11:15 AM - 11:35 AM', 1),
('a0000000-0002-4000-8000-000000000012', '1296', 'Lung Segmentation in Radiographic Images Using Deep U-Net and Transfer Learning Approaches', 'Vaibhav Kansal', '1', 'online', '11:35 AM - 11:55 AM', 2),
('a0000000-0002-4000-8000-000000000012', '1417', 'SkillMitra: A Hybrid AI Framework for Intelligent Skill Swapping Using SBERT Embeddings, Collaborative Filtering, and NLP-Driven Micro-Challenge Generation', 'Tanushka Verma', '1', 'online', '11:55 AM - 12:15 PM', 3),
('a0000000-0002-4000-8000-000000000012', '1432', 'Intelligent Deep Learning Systems for Aquatic Weed Detection: Models, Adaptation Challenges, and Future Directions', 'Savita Sharma', '1', 'online', '12:15 PM - 12:35 PM', 4),
('a0000000-0002-4000-8000-000000000012', '1461', 'EASA: Distributed Agentic Framework for Scalable Federated Edge Intelligence', 'Jyoti Rani', '1', 'online', '12:35 PM - 12:55 PM', 5),
('a0000000-0002-4000-8000-000000000012', '890', 'Prediction of Yield Strength of Al-Mg-Si Alloys Using Neural Network and XGBoost based on Artificial ageing time', 'SACHIN CHOUDHARY', '7', 'online', '12:55 PM - 01:15 PM', 6);
