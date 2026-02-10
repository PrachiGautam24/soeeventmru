-- ============================================================================
-- PATRONS AND CHAIRS DATA - ICASS 2026
-- ============================================================================
-- This file contains Chief Patrons, Patrons, and top-level Chairs
-- These are stored in the PATRONS table using the 'category' field
-- ============================================================================

-- Delete existing patrons data to avoid duplicates
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

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Count total patrons
SELECT COUNT(*) as total_patrons FROM public.patrons;

-- View all patrons by category
SELECT 
    category,
    name,
    designation,
    organization,
    order_index
FROM public.patrons
ORDER BY order_index;

-- Count by category
SELECT 
    category,
    COUNT(*) as count
FROM public.patrons
GROUP BY category
ORDER BY MIN(order_index);
