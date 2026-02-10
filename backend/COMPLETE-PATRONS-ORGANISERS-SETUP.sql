-- ============================================================================
-- COMPLETE PATRONS AND ORGANISERS SETUP - ICASS 2026
-- ============================================================================
-- This file sets up all conference patrons, chairs, and organizing committee
-- Run this single file to populate both tables with all data
-- ============================================================================

-- ============================================================================
-- PART 1: PATRONS AND TOP-LEVEL CHAIRS
-- ============================================================================

-- Clear existing data
DELETE FROM public.patrons;

-- Insert Chief Patrons
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES
('Dr. Prashant Bhalla', 'Hon''ble Chancellor', 'MRU, Faridabad', 'Chief Patron', 1),
('Dr. Amit Bhalla', 'Hon''ble Vice President', 'MREI, Faridabad', 'Chief Patron', 2);

-- Insert Patrons
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES
('Prof. (Dr.) Deependra Kumar Jha', 'Hon''ble Vice Chancellor', 'MRU, Faridabad', 'Patron', 3),
('Prof. (Dr.) Sangita Banga', 'Pro-Vice-Chancellor', 'MRU, Faridabad', 'Patron', 4),
('Prof. (Dr.) Shruti Vashist', 'Professor and Dean (Academics)', 'MRU, Faridabad', 'Patron', 5),
('Shri. Ramesh Nair', 'Registrar', 'MRU, Faridabad', 'Patron', 6);

-- Insert General Chair
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES
('Prof. (Dr.) Dipali Bansal', 'Professor and Dean, SoE', 'MRU, Faridabad', 'General Chair', 7);

-- Insert Conference Chair
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES
('Prof. (Dr.) Manpreet Kaur', 'Director E-Learning and Professor, DoCST', 'MRU, Faridabad', 'Conference Chair', 8);

-- Insert Executive Chairs
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES
('Prof. (Dr.) Jyotsna Pandit', 'Dean & HOD Sciences', 'MRU, Faridabad', 'Executive Chair', 9),
('Prof. (Dr.) Deepa Arora', 'Director QAA and Professor, SoSc', 'MRU, Faridabad', 'Executive Chair', 10),
('Prof. (Dr.) Meena Kapahi', 'Director International Relations and Professor, SoSc', 'MRU, Faridabad', 'Executive Chair', 11);

-- Insert Conveners
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES
('Dr. Meenakshi Gupta', 'Associate Professor, Associate Head, DoECE', 'MRU, Faridabad', 'Convener', 12),
('Dr. Ganga Sharma', 'Associate Professor, DoCST', 'MRU, Faridabad', 'Convener', 13);

-- Insert Conference Secretaries
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES
('Dr. Prashant Bhardwaj', 'Associate Professor, DoME', 'MRU, Faridabad', 'Conference Secretary', 14),
('Dr. Gianender Kajal', 'Assistant Professor, DoME', 'MRU, Faridabad', 'Conference Secretary', 15);

-- Insert Technical Program Chairs
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES
('Prof. (Dr.) Bhim Singh', 'Director Publications & Patents and Head, DoME', 'MRU, Faridabad', 'Technical Program Chair', 16),
('Dr. Jimmy Mehta', 'Assistant Professor, DoME', 'MRU, Faridabad', 'Technical Program Chair', 17),
('Prof. (Dr.) Kavita Singh', 'Professor, DoECE', 'MRU, Faridabad', 'Technical Program Chair', 18),
('Prof. (Dr.) D.K Sharma', 'Dean Examination and Professor, SoSc', 'MRU, Faridabad', 'Technical Program Chair', 19),
('Prof. (Dr.) Joginder Singh', 'Professor, DoME', 'MRU, Faridabad', 'Technical Program Chair', 20),
('Prof. (Dr.) Mrinal Pandey', 'Professor, DoCST', 'MRU, Faridabad', 'Technical Program Chair', 21),
('Dr. Niharika Thakur', 'Associate Professor, DoECE', 'MRU, Faridabad', 'Technical Program Chair', 22);

-- Insert Steering Committee Chairs
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES
('Prof. (Dr.) Prinima Gupta', 'Director PhD and Professor, DoCST', 'MRU, Faridabad', 'Steering Committee Chair', 23),
('Prof. (Dr.) Jyoti Pruthi', 'Director Regional Outreach and Professor, DoCST', 'MRU, Faridabad', 'Steering Committee Chair', 24);

-- Insert Finance Chairs / Treasurers
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES
('Dr. Chandni Magoo', 'Associate Professor and Associate Head, DoCST', 'MRU, Faridabad', 'Finance Chair / Treasurer', 25),
('Prof. (Dr.) Ajit', 'Professor, DoME', 'MRU, Faridabad', 'Finance Chair / Treasurer', 26),
('Dr. J.P Sharma', 'Associate Professor, DoME', 'MRU, Faridabad', 'Finance Chair / Treasurer', 27),
('Ms. Shefali Chopra', 'Dy Registrar Examination and R&S', 'MRU, Faridabad', 'Finance Chair / Treasurer', 28),
('Dr. Nitika', 'Associate Professor, DoECE', 'MRU, Faridabad', 'Finance Chair / Treasurer', 29);

-- Insert Publication Chairs
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES
('Prof. (Dr.) Sachin Lakra', 'Professor, DoCST', 'MRU, Faridabad', 'Publication Chair', 30),
('Dr. Aparna Vyas', 'Associate Professor, SoSc', 'MRU, Faridabad', 'Publication Chair', 31),
('Dr. Urmila Pilania', 'Associate Professor, DoCST', 'MRU, Faridabad', 'Publication Chair', 32),
('Dr. Priyanka Bansal', 'Professor, DoECE', 'MRU, Faridabad', 'Publication Chair', 33),
('Dr. Jitendra Pal Singh', 'Ramanujan Fellow, SoSc', 'MRU, Faridabad', 'Publication Chair', 34);

-- Insert Track Chairs
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES
('Dr. Urmila Pilania', 'Associate Professor, DoCST', 'MRU, Faridabad', 'Track Chair', 35),
('Dr. Deepti Thakral', 'Associate Professor, DoCST', 'MRU, Faridabad', 'Track Chair', 36),
('Dr. Manoj Kumar', 'Associate Professor, DoCST', 'MRU, Faridabad', 'Track Chair', 37),
('Dr. Piyush Charan', 'Associate Professor, DoECE', 'MRU, Faridabad', 'Track Chair', 38),
('Dr. Awwab Mohammed', 'Assistant Professor, DoR&AI', 'MRU, Faridabad', 'Track Chair', 39),
('Dr. Mamta Arora', 'Associate Professor, DoCST', 'MRU, Faridabad', 'Track Chair', 40),
('Dr. Monika Garg', 'Associate Professor, DoR&AI', 'MRU, Faridabad', 'Track Chair', 41),
('Dr. Mohit Kumar Singh', 'Associate Professor, DoCST', 'MRU, Faridabad', 'Track Chair', 42),
('Dr. Nitu Chauhan', 'Assistant Professor, DoECE', 'MRU, Faridabad', 'Track Chair', 43),
('Dr. Richa Adlakha', 'Associate Professor, DoECE', 'MRU, Faridabad', 'Track Chair', 44),
('Dr. Neha Chaudhary', 'Assistant Professor, DoR&AI', 'MRU, Faridabad', 'Track Chair', 45),
('Dr. Rajnesh Kumar Singh', 'Associate Professor, DoR&AI', 'MRU, Faridabad', 'Track Chair', 46),
('Dr. Gurpreet Singh Matharou', 'Associate Professor, DoR&AI', 'MRU, Faridabad', 'Track Chair', 47),
('Dr. Vinayak Vandan', 'Assistant Professor, SoSc', 'MRU, Faridabad', 'Track Chair', 48),
('Dr. Jaiprakash Sorout', 'Professor, SoSc', 'MRU, Faridabad', 'Track Chair', 49);

-- Insert Special Session Chairs
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES
('Dr. Jitendra Pal Singh', 'Ramanujan Fellow, SoSc', 'MRU, Faridabad', 'Special Session Chair', 50),
('Dr. Monika Lamba', 'Assistant Professor, DoCST', 'MRU, Faridabad', 'Special Session Chair', 51),
('Dr. Ranjana Jain', 'Associate Professor, DoCST', 'MRU, Faridabad', 'Special Session Chair', 52),
('Dr. Pooja Ahuja', 'Assistant Professor, DoCST', 'MRU, Faridabad', 'Special Session Chair', 53),
('Dr. Mamta Kaushik', 'Deputy Librarian', 'MRU', 'Special Session Chair', 54);

-- Insert Publicity Chairs
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES
('Prof. (Dr.) Parneeta Dhaliwal', 'Professor, DoCST', 'MRU, Faridabad', 'Publicity Chair', 55),
('Dr. Mamta Arora', 'Associate Professor, DoCST', 'MRU, Faridabad', 'Publicity Chair', 56),
('Dr. Smriti Mishra', 'Assistant Professor, DoME', 'MRU, Faridabad', 'Publicity Chair', 57),
('Dr. Arpit Sand', 'Professor, SoSc', 'MRU, Faridabad', 'Publicity Chair', 58);

-- ============================================================================
-- PART 2: ORGANIZING COMMITTEE MEMBERS
-- ============================================================================

-- Clear existing data
DELETE FROM public.organisers;

-- Insert Conference Oversight Committee
INSERT INTO public.organisers (name, role, organization, order_index) VALUES
('Prof. (Dr.) Rajnish Sharma', 'Conference Oversight Committee', 'Section Vice Chair & Member-IEEE Delhi Section STDCOM on T & P Act', 1),
('Prof. (Dr.) Vivek Shrivastava', 'Conference Oversight Committee', 'Section Exec Com Member Co-opted & Member-IEEE Delhi Section STDCOM on T & P Act', 2),
('Dr. Ekta Gandotra', 'Conference Oversight Committee', 'Member-IEEE Delhi Section STDCOM on T & P Act', 3),
('Prof. (Dr.) Sneha Kabra', 'Conference Oversight Committee', 'Section Secretary & Member-IEEE Delhi Section STDCOM on T & P Act', 4);

-- Insert Registration Committee
INSERT INTO public.organisers (name, role, organization, order_index) VALUES
('Dr. Meenakshi Gupta', 'Registration Committee', 'Associate Professor, Associate Head, DoECE, MRU, Faridabad', 5),
('Ms. Daljeet Kaur', 'Registration Committee', 'Office Coordinator, DoECE, MRU, Faridabad', 6),
('Ms. Ritika Saggi', 'Registration Committee', 'Office Coordinator, DoCST, MRU, Faridabad', 7),
('Dr. Niharika Thakur', 'Registration Committee', 'Associate Professor, DoECE, MRU, Faridabad', 8),
('Mr. Nazish Ahmad Samsi', 'Registration Committee', 'Assistant Professor, DoME, MRU, Faridabad', 9);

-- Insert Finance Committee
INSERT INTO public.organisers (name, role, organization, order_index) VALUES
('Dr. Narender', 'Finance Committee', 'Associate Professor, DoCST, MRU, Faridabad', 10),
('Ms. Babita Yadav', 'Finance Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 11),
('Mr. Shyam Vij', 'Finance Committee', 'Sr Executive, Accounts, MRU, Faridabad', 12),
('Mr. Deepak', 'Finance Committee', 'Superintendent, Office of Dean Engg, MRU, Faridabad', 13),
('Mr. Sanjeev Kumar Kannojia', 'Finance Committee', 'Office Coordinator, DoCST, MRU, Faridabad', 14);

-- Insert Publication Committee
INSERT INTO public.organisers (name, role, organization, order_index) VALUES
('Prof. (Dr.) Sachin Lakra', 'Publication Committee', 'Professor, DoCST, MRU, Faridabad', 15),
('Prof. (Dr.) Manpreet Kaur', 'Publication Committee', 'Director E-Learning and Professor, DoCST, MRU, Faridabad', 16),
('Prof. (Dr.) Priyanka Bansal', 'Publication Committee', 'Professor, DoECE, MRU, Faridabad', 17),
('Prof. (Dr.) Poonam Rattan', 'Publication Committee', 'Professor, DoCST, MRU, Faridabad', 18),
('Prof. (Dr.) Vivek Sharma', 'Publication Committee', 'Professor, DOCST, MRU, Faridabad', 19),
('Dr. Ganga Sharma', 'Publication Committee', 'Associate Professor, DoCST, MRU, Faridabad', 20),
('Dr. Jimmy Mehta', 'Publication Committee', 'Assistant Professor, DoME, MRU, Faridabad', 21),
('Dr. S K Shukla', 'Publication Committee', 'Professor, SoSc, MRU, Faridabad', 22),
('Dr. Neha Chaudhary', 'Publication Committee', 'Assistant Professor, DoR&AI, MRU, Faridabad', 23),
('Dr. Richa Adlakha', 'Publication Committee', 'Assistant Professor, DoME, MRU, Faridabad', 24),
('Dr. Piyush Charan', 'Publication Committee', 'Associate Professor, DoR&AI, MRU, Faridabad', 25),
('Dr. Charu Pathak', 'Publication Committee', 'Professor, DoECE, MRU, Faridabad', 26),
('Dr. Manoj Kumar', 'Publication Committee', 'Associate Professor, DoCST, MRU, Faridabad', 27),
('Dr. Shalu', 'Publication Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 28);

-- Insert Logistic Committee
INSERT INTO public.organisers (name, role, organization, order_index) VALUES
('Prof. (Dr.) Ajit', 'Logistic Committee', 'Professor, DoME, MRU, Faridabad', 29),
('Mr. Vijay Kumar Gill', 'Logistic Committee', 'Assistant Professor, DoECE, MRU, Faridabad', 30),
('Dr. Bhanu Pratap Chaudhary', 'Logistic Committee', 'Assistant Professor, DoECE, MRU, Faridabad', 31),
('Dr. Rajnesh Kumar Singh', 'Logistic Committee', 'Associate Professor, DoR&AI, MRU, Faridabad', 32),
('Mr. Sandeep Bali', 'Logistic Committee', 'DGM Administration, MRU, Faridabad', 33),
('Dr. A Jayamani', 'Logistic Committee', 'Assistant Professor, SoSc, MRU, Faridabad', 34),
('Dr. Piyush Mahendru', 'Logistic Committee', 'Assistant Professor, DoME, MRU, Faridabad', 35);

-- Insert Website and Social Media Committee
INSERT INTO public.organisers (name, role, organization, order_index) VALUES
('Dr. K Deepa', 'Website and Social Media Committee', 'Associate Professor, DoECE, MRU, Faridabad', 36),
('Ms. Esha Khanna', 'Website and Social Media Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 37),
('Ms. Tamanna Sachdeva', 'Website and Social Media Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 38),
('Dr. Gunjan Chandwani', 'Website and Social Media Committee', 'Associate Professor, DoCST, MRU, Faridabad', 39),
('Ms. Deepanshi Gupta', 'Website and Social Media Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 40),
('Ms. Sonal Mathur', 'Website and Social Media Committee', 'Senior Manager - Content & Social Media, MREI, Faridabad', 41),
('Ms. Ashima', 'Website and Social Media Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 42),
('Dr. Bhanu Pratap Chaudhary', 'Website and Social Media Committee', 'Assistant Professor, DoECE, MRU, Faridabad', 43);

-- Insert Hospitality/Accommodation/Transport Committee
INSERT INTO public.organisers (name, role, organization, order_index) VALUES
('Mr. Sandeep Bali', 'Hospitality/Accommodation/Transport Committee', 'DGM Administration, MRU, Faridabad', 44),
('Dr. Sanjay Singh', 'Hospitality/Accommodation/Transport Committee', 'Associate Professor, DoCST, MRU, Faridabad', 45),
('Mr. Agha Imran Hussain', 'Hospitality/Accommodation/Transport Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 46),
('Dr. Jai Prakash', 'Hospitality/Accommodation/Transport Committee', 'Associate Professor, SoSc, MRU, Faridabad', 47),
('Mr. Pradeep Kr Mouria', 'Hospitality/Accommodation/Transport Committee', 'Assistant Professor, DoME, MRU, Faridabad', 48),
('Mr. Mandeep Bhadana', 'Hospitality/Accommodation/Transport Committee', 'Assistant Professor, DoME, MRU, Faridabad', 49),
('Dr. Deepti Maikhuri', 'Hospitality/Accommodation/Transport Committee', 'Assistant Professor, SoSc, MRU, Faridabad', 50);

-- Insert Industry Collaboration and Sponsorship Committee
INSERT INTO public.organisers (name, role, organization, order_index) VALUES
('Dr. Pooja Ahuja', 'Industry Collaboration and Sponsorship Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 51),
('Dr. Abhishek Saxena', 'Industry Collaboration and Sponsorship Committee', 'Professor, DoCST, MRU, Faridabad', 52),
('Dr. Mamta Kaushik', 'Industry Collaboration and Sponsorship Committee', 'Deputy Librarian, MRU', 53);

-- Insert Stage Handling, Cultural and Decoration Committee
INSERT INTO public.organisers (name, role, organization, order_index) VALUES
('Prof. (Dr.) Shruti Vashist', 'Stage Handling, Cultural and Decoration Committee', 'Professor and Dean (Academics), MRU, Faridabad', 54),
('Dr. Monika Garg', 'Stage Handling, Cultural and Decoration Committee', 'Associate Professor, DoR&AI, MRU, Faridabad', 55),
('Ms. Anupriya Sharma', 'Stage Handling, Cultural and Decoration Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 56),
('Dr. Pushpa', 'Stage Handling, Cultural and Decoration Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 57),
('Dr. Shalu', 'Stage Handling, Cultural and Decoration Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 58),
('Mr. Aniket Singh', 'Stage Handling, Cultural and Decoration Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 59),
('Dr. Mahesh Swami', 'Stage Handling, Cultural and Decoration Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 60),
('Ms. Shreya', 'Stage Handling, Cultural and Decoration Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 61),
('Ms. Deepanshi Gupta', 'Stage Handling, Cultural and Decoration Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 62),
('Ms. Bhawna Shrivastava', 'Stage Handling, Cultural and Decoration Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 63),
('Mr. Ram Chatterjee', 'Stage Handling, Cultural and Decoration Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 64),
('Ms. Simple', 'Stage Handling, Cultural and Decoration Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 65),
('Dr. Deepti Thakral', 'Stage Handling, Cultural and Decoration Committee', 'Associate Professor, DoCST, MRU, Faridabad', 66),
('Dr. Priti Gupta', 'Stage Handling, Cultural and Decoration Committee', 'Assistant Professor, DoECE, MRU, Faridabad', 67),
('Dr. Ananna Bardhan', 'Stage Handling, Cultural and Decoration Committee', 'Assistant Professor, SoSc, MRU, Faridabad', 68);

-- Insert Technical Report and Content Writing Committee
INSERT INTO public.organisers (name, role, organization, order_index) VALUES
('Ms. Esha Khanna', 'Technical Report and Content Writing Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 69),
('Ms. Tamanna Sachdeva', 'Technical Report and Content Writing Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 70),
('Dr. Javed Idrisi', 'Technical Report and Content Writing Committee', 'Professor, SoSc, MRU, Faridabad', 71),
('Dr. Neelu Chaudhary', 'Technical Report and Content Writing Committee', 'Associate Professor, DoCST, MRU, Faridabad', 72),
('Mr. Ram Chatterjee', 'Technical Report and Content Writing Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 73);

-- Insert Graphics and Printing Committee
INSERT INTO public.organisers (name, role, organization, order_index) VALUES
('Mr. Sandeep Bali', 'Graphics and Printing Committee', 'DGM Administration, MRU, Faridabad', 74),
('Ms. Sonal Mathur', 'Graphics and Printing Committee', 'Senior Manager - Content & Social Media, MREI, Faridabad', 75),
('Dr. Richa Adlakha', 'Graphics and Printing Committee', 'Associate Professor, DoECE, MRU, Faridabad', 76),
('Prof. (Dr.) Kavita Singh', 'Graphics and Printing Committee', 'Professor, DoECE, MRU, Faridabad', 77),
('Mr. Anup Singh Kushwaha', 'Graphics and Printing Committee', 'Assistant Professor, DoCST, MRU, Faridabad', 78);

-- Insert IT and Audio Visual Committee
INSERT INTO public.organisers (name, role, organization, order_index) VALUES
('Dr. Prashant Bhardwaj', 'IT and Audio Visual Committee', 'Associate Professor, DoME, MRU, Faridabad', 79),
('Dr. Gianender Kajal', 'IT and Audio Visual Committee', 'Assistant Professor, DoME, MRU, Faridabad', 80);

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Summary counts
SELECT 'Patrons' as table_name, COUNT(*) as total FROM public.patrons
UNION ALL
SELECT 'Organisers' as table_name, COUNT(*) as total FROM public.organisers;

-- Patrons by category
SELECT 
    '=== PATRONS BY CATEGORY ===' as section;
SELECT 
    category,
    COUNT(*) as count
FROM public.patrons
GROUP BY category
ORDER BY MIN(order_index);

-- Organisers by committee
SELECT 
    '=== ORGANISERS BY COMMITTEE ===' as section;
SELECT 
    role as committee,
    COUNT(*) as member_count
FROM public.organisers
GROUP BY role
ORDER BY MIN(order_index);

-- View all patrons
SELECT 
    '=== ALL PATRONS ===' as section;
SELECT 
    category,
    name,
    designation,
    organization
FROM public.patrons
ORDER BY order_index;

-- View all organisers
SELECT 
    '=== ALL ORGANISERS ===' as section;
SELECT 
    role as committee,
    name,
    organization
FROM public.organisers
ORDER BY order_index;

-- Expected totals:
-- Patrons: 11 (2 Chief Patrons + 4 Patrons + 1 General Chair + 1 Conference Chair + 3 Executive Chairs)
-- Organisers: 80 (across 12 committees)
