-- Additional Patron Chairs for ICASS 2026
-- This file adds 47 additional patron positions across 9 categories
-- Run this after the initial patrons-chairs-data.sql

-- Insert additional patron chairs
INSERT INTO public.patrons (name, designation, organization, category, order_index) VALUES

-- Convener (2 people, order_index 12-13)
('Dr. Meenakshi Gupta', 'Associate Professor, Associate Head, DoECE', 'MRU, Faridabad', 'Convener', 12),
('Dr. Ganga Sharma', 'Associate Professor, DoCST', 'MRU, Faridabad', 'Convener', 13),

-- Conference Secretary (2 people, order_index 14-15)
('Dr. Prashant Bhardwaj', 'Associate Professor, DoME', 'MRU, Faridabad', 'Conference Secretary', 14),
('Dr. Gianender Kajal', 'Assistant Professor, DoME', 'MRU, Faridabad', 'Conference Secretary', 15),

-- Technical Program Chair (7 people, order_index 16-22)
('Prof. (Dr.) Bhim Singh', 'Director Publications & Patents and Head, DoME', 'MRU, Faridabad', 'Technical Program Chair', 16),
('Dr. Jimmy Mehta', 'Assistant Professor, DoME', 'MRU, Faridabad', 'Technical Program Chair', 17),
('Prof. (Dr.) Kavita Singh', 'Professor, DoECE', 'MRU, Faridabad', 'Technical Program Chair', 18),
('Prof. (Dr.) D.K Sharma', 'Dean Examination and Professor, SoSc', 'MRU, Faridabad', 'Technical Program Chair', 19),
('Prof. (Dr.) Joginder Singh', 'Professor, DoME', 'MRU, Faridabad', 'Technical Program Chair', 20),
('Prof. (Dr.) Mrinal Pandey', 'Professor, DoCST', 'MRU, Faridabad', 'Technical Program Chair', 21),
('Dr. Niharika Thakur', 'Associate Professor, DoECE', 'MRU, Faridabad', 'Technical Program Chair', 22),

-- Steering Committee Chair (2 people, order_index 23-24)
('Prof. (Dr.) Prinima Gupta', 'Director PhD and Professor, DoCST', 'MRU, Faridabad', 'Steering Committee Chair', 23),
('Prof. (Dr.) Jyoti Pruthi', 'Director Regional Outreach and Professor, DoCST', 'MRU, Faridabad', 'Steering Committee Chair', 24),

-- Finance Chair / Treasurer (5 people, order_index 25-29)
('Dr. Chandni Magoo', 'Associate Professor and Associate Head, DoCST', 'MRU, Faridabad', 'Finance Chair / Treasurer', 25),
('Prof. (Dr.) Ajit', 'Professor, DoME', 'MRU, Faridabad', 'Finance Chair / Treasurer', 26),
('Dr. J.P Sharma', 'Associate Professor, DoME', 'MRU, Faridabad', 'Finance Chair / Treasurer', 27),
('Ms. Shefali Chopra', 'Dy Registrar Examination and R&S', 'MRU, Faridabad', 'Finance Chair / Treasurer', 28),
('Dr. Nitika', 'Associate Professor, DoECE', 'MRU, Faridabad', 'Finance Chair / Treasurer', 29),

-- Publication Chair (5 people, order_index 30-34)
('Prof. (Dr.) Sachin Lakra', 'Professor, DoCST', 'MRU, Faridabad', 'Publication Chair', 30),
('Dr. Aparna Vyas', 'Associate Professor, SoSc', 'MRU, Faridabad', 'Publication Chair', 31),
('Dr. Urmila Pilania', 'Associate Professor, DoCST', 'MRU, Faridabad', 'Publication Chair', 32),
('Dr. Priyanka Bansal', 'Professor, DoECE', 'MRU, Faridabad', 'Publication Chair', 33),
('Dr. Jitendra Pal Singh', 'Ramanujan Fellow, SoSc', 'MRU, Faridabad', 'Publication Chair', 34),

-- Track Chair (15 people, order_index 35-49)
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
('Dr. Jaiprakash Sorout', 'Professor, SoSc', 'MRU, Faridabad', 'Track Chair', 49),

-- Special Session Chair (5 people, order_index 50-54)
('Dr. Jitendra Pal Singh', 'Ramanujan Fellow, SoSc', 'MRU, Faridabad', 'Special Session Chair', 50),
('Dr. Monika Lamba', 'Assistant Professor, DoCST', 'MRU, Faridabad', 'Special Session Chair', 51),
('Dr. Ranjana Jain', 'Associate Professor, DoCST', 'MRU, Faridabad', 'Special Session Chair', 52),
('Dr. Pooja Ahuja', 'Assistant Professor, DoCST', 'MRU, Faridabad', 'Special Session Chair', 53),
('Dr. Mamta Kaushik', 'Deputy Librarian', 'MRU', 'Special Session Chair', 54),

-- Publicity Chair (4 people, order_index 55-58)
('Prof. (Dr.) Parneeta Dhaliwal', 'Professor, DoCST', 'MRU, Faridabad', 'Publicity Chair', 55),
('Dr. Mamta Arora', 'Associate Professor, DoCST', 'MRU, Faridabad', 'Publicity Chair', 56),
('Dr. Smriti Mishra', 'Assistant Professor, DoME', 'MRU, Faridabad', 'Publicity Chair', 57),
('Dr. Arpit Sand', 'Professor, SoSc', 'MRU, Faridabad', 'Publicity Chair', 58);

-- Verify the data
SELECT category, COUNT(*) as count 
FROM public.patrons 
WHERE category IN ('Convener', 'Conference Secretary', 'Technical Program Chair', 
                   'Steering Committee Chair', 'Finance Chair / Treasurer', 
                   'Publication Chair', 'Track Chair', 'Special Session Chair', 'Publicity Chair')
GROUP BY category 
ORDER BY MIN(order_index);

-- Total count
SELECT COUNT(*) as total_patrons FROM public.patrons;
