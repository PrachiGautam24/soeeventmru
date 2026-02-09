-- ============================================================================
-- ICASS 2026 - Patrons & Chairs Data
-- ============================================================================
-- This file contains the updated patrons and chairs data for ICASS 2026
-- Run this SQL in your Supabase SQL Editor after deleting existing patron data
-- ============================================================================

-- Delete existing patron data
DELETE FROM patrons;

-- Insert Patrons & Chairs Data
INSERT INTO patrons (name, title, organization, category, image_url, order_index) VALUES

-- Chief Patron(s)
('Dr Prashant Bhalla', 'Hon''ble Chancellor', 'Manav Rachna University, Faridabad', 'Chief Patron(s)', NULL, 1),
('Dr Amit Bhalla', 'Hon''ble Vice President', 'Manav Rachna University, Faridabad', 'Chief Patron(s)', NULL, 2),

-- Patron(s)
('Prof (Dr) Deependra Kumar Jha', 'Hon''ble Vice Chancellor', 'Manav Rachna University, Faridabad', 'Patron(s)', NULL, 3),
('Prof (Dr) Sangeeta Banga', 'Pro-Vice-Chancellor', 'Manav Rachna University, Faridabad', 'Patron(s)', NULL, 4),
('Prof (Dr) Shruti Vashist', 'Professor and Dean (Academics)', 'Manav Rachna University, Faridabad', 'Patron(s)', NULL, 5),
('Shri Ramesh Nair', 'Registrar', 'Manav Rachna University, Faridabad', 'Patron(s)', NULL, 6),

-- General Chair
('Prof (Dr) Dipali Bansal', 'Professor and Dean, School of Engineering', 'Manav Rachna University, Faridabad', 'General Chair', NULL, 7),

-- Conference Chair
('Prof (Dr) Manpreet Kaur', 'Director E-Learning and Professor, DoCST', 'Manav Rachna University, Faridabad', 'Conference Chair', NULL, 8),

-- Executive Chair(s)
('Prof (Dr) Jyotsna Pandit', 'Dean & HOD Sciences', 'Manav Rachna University, Faridabad', 'Executive Chair(s)', NULL, 9),
('Prof (Dr) Deepa Arora', 'Director QAA and Professor, SoSc', 'Manav Rachna University, Faridabad', 'Executive Chair(s)', NULL, 10),
('Prof (Dr) Meena Kapahi', 'Director International Relations and Professor, SoSc', 'Manav Rachna University, Faridabad', 'Executive Chair(s)', NULL, 11),

-- Convener
('Dr Ganga Sharma', 'Associate Professor, DoCST', 'Manav Rachna University, Faridabad', 'Convener', NULL, 12),

-- Conference Secretary(s)
('Dr Prashant Bhardwaj', 'Associate Professor, DoME', 'Manav Rachna University, Faridabad', 'Conference Secretary(s)', NULL, 13),
('Dr Gianender Kajal', 'Assistant Professor, DoME', 'Manav Rachna University, Faridabad', 'Conference Secretary(s)', NULL, 14),

-- Technical Program Chair(s)
('Prof (Dr) Bhim Singh', 'Director Publications & Patents and Head, DoME', 'Manav Rachna University, Faridabad', 'Technical Program Chair(s)', NULL, 15),
('Dr Jimmy Mehta', 'Assistant Professor, DoME', 'Manav Rachna University, Faridabad', 'Technical Program Chair(s)', NULL, 16),
('Prof (Dr) Kavita Singh', 'Professor, DoECE', 'Manav Rachna University, Faridabad', 'Technical Program Chair(s)', NULL, 17),
('Prof (Dr) D K Sharma', 'Dean Examination and Professor, SoSc', 'Manav Rachna University, Faridabad', 'Technical Program Chair(s)', NULL, 18),
('Prof (Dr) Joginder Singh', 'Professor, DoME', 'Manav Rachna University, Faridabad', 'Technical Program Chair(s)', NULL, 19),
('Prof (Dr) Mrinal Pandey', 'Professor, DoCST', 'Manav Rachna University, Faridabad', 'Technical Program Chair(s)', NULL, 20),
('Dr Niharika Thakur', 'Associate Professor, DoECE', 'Manav Rachna University, Faridabad', 'Technical Program Chair(s)', NULL, 21),

-- Steering Committee Chair(s)
('Prof (Dr) Prinima Gupta', 'Director PhD and Professor, DoCST', 'Manav Rachna University, Faridabad', 'Steering Committee Chair(s)', NULL, 22),
('Prof (Dr) Jyoti Pruthi', 'Director Regional Outreach and Professor, DoCST', 'Manav Rachna University, Faridabad', 'Steering Committee Chair(s)', NULL, 23),

-- Finance Chair / Treasurer(s)
('Dr Chandni Magoo', 'Associate Professor and Associate Head, DoCST', 'Manav Rachna University, Faridabad', 'Finance Chair / Treasurer(s)', NULL, 24),
('Prof (Dr) Ajit', 'Professor, DoME', 'Manav Rachna University, Faridabad', 'Finance Chair / Treasurer(s)', NULL, 25),
('Dr J P Sharma', 'Associate Professor, DoME', 'Manav Rachna University, Faridabad', 'Finance Chair / Treasurer(s)', NULL, 26),
('Ms Shefali Chopra', 'Dy Registrar Examination and R&S', 'Manav Rachna University, Faridabad', 'Finance Chair / Treasurer(s)', NULL, 27),
('Dr Nitika', 'Associate Professor, DoECE', 'Manav Rachna University, Faridabad', 'Finance Chair / Treasurer(s)', NULL, 28),

-- Publication Chair(s)
('Prof (Dr) Sachin Lakra', 'Professor, DoCST', 'Manav Rachna University, Faridabad', 'Publication Chair(s)', NULL, 29),
('Dr Aparna Vyas', 'Associate Professor, SoSc', 'Manav Rachna University, Faridabad', 'Publication Chair(s)', NULL, 30),
('Dr Urmila Pilania', 'Associate Professor, DoCST', 'Manav Rachna University, Faridabad', 'Publication Chair(s)', NULL, 31),
('Dr Priyanka Bansal', 'Professor, DoECE', 'Manav Rachna University, Faridabad', 'Publication Chair(s)', NULL, 32),
('Dr Jitendra Pal Singh', 'Ramanujan Fellow, SoSc', 'Manav Rachna University, Faridabad', 'Publication Chair(s)', NULL, 33),

-- Special Session Chair
('Dr Jitendra Pal Singh', 'Ramanujan Fellow, SoSc', 'Manav Rachna University, Faridabad', 'Special Session Chair', NULL, 34),
('Dr Monika Lamba', 'Assistant Professor, DoCST', 'Manav Rachna University, Faridabad', 'Special Session Chair', NULL, 35),
('Dr Mamta Kaushik', 'Deputy Librarian', 'Manav Rachna University, Faridabad', 'Special Session Chair', NULL, 36),
('Dr Ranjana Jain', 'Associate Professor, DoCST', 'Manav Rachna University, Faridabad', 'Special Session Chair', NULL, 37),
('Dr Pooja Ahuja', 'Assistant Professor, DoCST', 'Manav Rachna University, Faridabad', 'Special Session Chair', NULL, 38),

-- Publicity Chair(s)
('Prof (Dr) Parneeta Dhaliwal', 'Professor, DoCST', 'Manav Rachna University, Faridabad', 'Publicity Chair(s)', NULL, 39),
('Dr Mamta Arora', 'Associate Professor, DoCST', 'Manav Rachna University, Faridabad', 'Publicity Chair(s)', NULL, 40),
('Dr Smriti Mishra', 'Associate Professor, DoME', 'Manav Rachna University, Faridabad', 'Publicity Chair(s)', NULL, 41),
('Dr Arpit Sand', 'Professor, SoSc', 'Manav Rachna University, Faridabad', 'Publicity Chair(s)', NULL, 42);

-- Verify the data was inserted
SELECT category, COUNT(*) as count
FROM patrons
GROUP BY category
ORDER BY MIN(order_index);
