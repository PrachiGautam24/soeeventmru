-- ============================================================================
-- ICASS 2026 - Organisers Data
-- ============================================================================
-- This file contains the updated organisers data for ICASS 2026
-- Run this SQL in your Supabase SQL Editor after deleting existing organiser data
-- ============================================================================

-- Delete existing organiser data
DELETE FROM organisers;

-- Insert Organisers Data
INSERT INTO organisers (name, role, organization, email, phone, image_url, order_index) VALUES

-- Conference Oversight Committee
('Prof Rajnish Sharma', 'Conference Oversight Committee', 'Section Vice Chair & Member-IEEE Delhi Section STDCOM on T & P Act', NULL, NULL, NULL, 1),
('Prof Vivek Shrivastava', 'Conference Oversight Committee', 'Section Exec Com Member Co-opted & Member-IEEE Delhi Section STDCOM on T & P Act', NULL, NULL, NULL, 2),
('Dr Ekta Gandotra', 'Conference Oversight Committee', 'Member-IEEE Delhi Section STDCOM on T & P Act', NULL, NULL, NULL, 3),
('Prof Sneha Kabra', 'Conference Oversight Committee', 'Section Secretary & Member-IEEE Delhi Section STDCOM on T & P Act', NULL, NULL, NULL, 4),

-- Registration Committee
('Dr Meena Chaudhary', 'Registration Committee', 'Associate Professor, MRU, Faridabad', NULL, NULL, NULL, 5),
('Dr Ekta Rawat', 'Registration Committee', 'Assistant Professor, SoSc, MRU, Faridabad', NULL, NULL, NULL, 6),
('Ms Jyoti Nanwal', 'Registration Committee', 'DoCST, MRU, Faridabad', NULL, NULL, NULL, 7),
('Mr Nazish Ahmad Samsi', 'Registration Committee', 'Assistant Professor, DoME, MRU, Faridabad', NULL, NULL, NULL, 8),

-- Finance Committee
('Dr Narender', 'Finance Committee', 'Associate Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 9),
('Ms Babita Yadav', 'Finance Committee', 'Assistant Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 10),
('Mr Shyam Vij', 'Finance Committee', 'Sr Executive, Accounts, MRU, Faridabad', NULL, NULL, NULL, 11),
('Mr Deepak', 'Finance Committee', 'Superintendent, Office of Dean Engg, MRU, Faridabad', NULL, NULL, NULL, 12),
('Mr Sanjeev Kumar Kannojia', 'Finance Committee', 'Office Coordinator, DoCST, MRU, Faridabad', NULL, NULL, NULL, 13),

-- Publication Committee
('Dr S K Shukla', 'Publication Committee', 'Professor, SoSc, MRU, Faridabad', NULL, NULL, NULL, 14),
('Dr Neha Chaudhary', 'Publication Committee', 'Assistant Professor, DoR&AI, MRU, Faridabad', NULL, NULL, NULL, 15),
('Dr Richa Adlakha', 'Publication Committee', 'Assistant Professor, DoME, MRU, Faridabad', NULL, NULL, NULL, 16),
('Dr Piyush Charan', 'Publication Committee', 'Associate Professor, DoR&AI, MRU, Faridabad', NULL, NULL, NULL, 17),
('Dr Charu Pathak', 'Publication Committee', 'Professor, DoECE, MRU, Faridabad', NULL, NULL, NULL, 18),
('Dr Manoj Kumar', 'Publication Committee', 'Associate Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 19),
('Dr Shalu', 'Publication Committee', 'Assistant Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 20),
('Ms Ashima', 'Publication Committee', 'Assistant Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 21),

-- Publicity Committee
('Dr Lokesh Bhardwaj', 'Publicity Committee', 'Assistant Professor, DoECE, MRU, Faridabad', NULL, NULL, NULL, 22),
('Mr Vijay Kumar Gill', 'Publicity Committee', 'Assistant Professor, DoECE, MRU, Faridabad', NULL, NULL, NULL, 23),

-- Logistic Committee
('Dr A Jayamani', 'Logistic Committee', 'Assistant Professor, SoSc, MRU, Faridabad', NULL, NULL, NULL, 24),
('Dr Piyush Mahendru', 'Logistic Committee', 'Assistant Professor, DoME, MRU, Faridabad', NULL, NULL, NULL, 25),
('Mr Agha Imran Hussain', 'Logistic Committee', 'Assistant Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 26),

-- Website and Social Media Committee
('Dr K Deepa', 'Website and Social Media Committee', 'Associate Professor, DoECE, MRU, Faridabad', NULL, NULL, NULL, 27),
('Dr Gunjan Chandwani', 'Website and Social Media Committee', 'Assistant Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 28),
('Dr Bhanu Pratap Chaudhary', 'Website and Social Media Committee', 'Assistant Professor, DoECE, MRU, Faridabad', NULL, NULL, NULL, 29),
('Ms Deepanshi Gupta', 'Website and Social Media Committee', 'Assistant Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 30),
('Ms Esha Khanna', 'Website and Social Media Committee', 'Assistant Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 31),
('Ms Tamanna Sachdeva', 'Website and Social Media Committee', 'Assistant Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 32),

-- Hospitality / Accommodation Committee
('Dr Sanjay Singh', 'Hospitality / Accommodation Committee', 'Associate Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 33),
('Dr Jai Prakash', 'Hospitality / Accommodation Committee', 'Associate Professor, SoSc, MRU, Faridabad', NULL, NULL, NULL, 34),
('Mr Pradeep Kr Mouria', 'Hospitality / Accommodation Committee', 'Assistant Professor, DoME, MRU, Faridabad', NULL, NULL, NULL, 35),
('Mr Mandeep Bhadana', 'Hospitality / Accommodation Committee', 'Assistant Professor, DoME, MRU, Faridabad', NULL, NULL, NULL, 36),
('Dr Deepti Maikhuri', 'Hospitality / Accommodation Committee', 'Assistant Professor, SoSc, MRU, Faridabad', NULL, NULL, NULL, 37),

-- Industry Collaboration and Sponsorship Committee
('Dr Pooja Ahuja', 'Industry Collaboration and Sponsorship Committee', 'Assistant Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 38),
('Dr Abhishek Saxena', 'Industry Collaboration and Sponsorship Committee', 'Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 39),
('Dr Mamta Kaushik', 'Industry Collaboration and Sponsorship Committee', 'Deputy Librarian, MRU, Faridabad', NULL, NULL, NULL, 40),

-- Event Management Committee
('Ms Anupriya Sharma', 'Event Management Committee', 'Assistant Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 41),
('Dr Monika Garg', 'Event Management Committee', 'Associate Professor, DoR&AI, MRU, Faridabad', NULL, NULL, NULL, 42),
('Dr Deepti Thakral', 'Event Management Committee', 'Associate Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 43),
('Dr Priti Gupta', 'Event Management Committee', 'Assistant Professor, DoECE, MRU, Faridabad', NULL, NULL, NULL, 44),
('Dr Ananna Bardhan', 'Event Management Committee', 'Assistant Professor, SoSc, MRU, Faridabad', NULL, NULL, NULL, 45),

-- Technical Report and Content Writing
('Dr Javed Idrisi', 'Technical Report and Content Writing', 'Professor, SoSc, MRU, Faridabad', NULL, NULL, NULL, 46),
('Dr Neelu Chaudhary', 'Technical Report and Content Writing', 'Associate Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 47),
('Mr Ram Chatterjee', 'Technical Report and Content Writing', 'Assistant Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 48),

-- Graphics and Printing
('Mr Aniket Singh', 'Graphics and Printing', 'Assistant Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 49),
('Mr Anup Singh Kushwaha', 'Graphics and Printing', 'Assistant Professor, DoCST, MRU, Faridabad', NULL, NULL, NULL, 50),
('Dr Awwab Mohammad', 'Graphics and Printing', 'Assistant Professor, DoR&AI, MRU, Faridabad', NULL, NULL, NULL, 51);

-- Verify the data was inserted
SELECT role, COUNT(*) as count
FROM organisers
GROUP BY role
ORDER BY MIN(order_index);
