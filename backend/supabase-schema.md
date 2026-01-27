# Supabase Database Schema for ICASS 2026

This file contains the SQL commands to create all necessary tables in your Supabase database.

## Setup Instructions

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy and paste the SQL commands below
4. Execute the commands

## SQL Schema

```sql
-- Create speakers table
CREATE TABLE IF NOT EXISTS public.speakers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    designation TEXT NOT NULL,
    organization TEXT NOT NULL,
    bio TEXT NOT NULL,
    image_url TEXT,
    social_links JSONB,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create sessions table
CREATE TABLE IF NOT EXISTS public.sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    speaker_id UUID REFERENCES public.speakers(id),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    date DATE NOT NULL,
    start_time TEXT NOT NULL,
    end_time TEXT NOT NULL,
    duration TEXT NOT NULL,
    location TEXT NOT NULL,
    session_type TEXT DEFAULT 'General Session',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create tracks table
CREATE TABLE IF NOT EXISTS public.tracks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    track_number TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    topics TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create patrons table
CREATE TABLE IF NOT EXISTS public.patrons (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    designation TEXT NOT NULL,
    category TEXT NOT NULL,
    organization TEXT NOT NULL,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create organisers table
CREATE TABLE IF NOT EXISTS public.organisers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    designation TEXT NOT NULL,
    organization TEXT NOT NULL,
    role TEXT NOT NULL,
    image_url TEXT,
    email TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create workshop table
CREATE TABLE IF NOT EXISTS public.workshop (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    topic TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    venue TEXT NOT NULL,
    partner TEXT NOT NULL,
    overview TEXT NOT NULL,
    topics_covered TEXT[] DEFAULT '{}',
    target_audience TEXT[] DEFAULT '{}',
    benefits TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create authors table
CREATE TABLE IF NOT EXISTS public.authors (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    affiliation TEXT NOT NULL,
    email TEXT NOT NULL,
    country TEXT NOT NULL,
    paper_title TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.speakers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.patrons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organisers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workshop ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.authors ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access
CREATE POLICY "Enable read access for all users" ON public.speakers FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.sessions FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.tracks FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.patrons FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.organisers FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.workshop FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.authors FOR SELECT USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS speakers_order_idx ON public.speakers(order_index);
CREATE INDEX IF NOT EXISTS sessions_date_idx ON public.sessions(date, start_time);
CREATE INDEX IF NOT EXISTS tracks_number_idx ON public.tracks(track_number);
CREATE INDEX IF NOT EXISTS patrons_order_idx ON public.patrons(order_index);
CREATE INDEX IF NOT EXISTS organisers_order_idx ON public.organisers(order_index);
CREATE INDEX IF NOT EXISTS authors_name_idx ON public.authors(name);
```

## Sample Data Insertion

After creating the tables, you can insert the provided data:

### Insert Patrons Data

```sql
INSERT INTO public.patrons (name, designation, category, organization, order_index) VALUES
('Dr Prashant Bhalla', 'Hon''ble Chancellor, MRU, Faridabad', 'Chief Patron(s)', 'Manav Rachna University', 1),
('Dr Amit Bhalla', 'Hon''ble Vice President, MRU, Faridabad', 'Chief Patron(s)', 'Manav Rachna University', 2),
('Prof (Dr) Deependra Kumar Jha', 'Hon''ble Vice Chancellor, MRU, Faridabad', 'Patron(s)', 'Manav Rachna University', 3),
('Prof (Dr) Sangeeta Banga', 'Pro-Vice-Chancellor, MRU, Faridabad', 'Patron(s)', 'Manav Rachna University', 4),
('Prof (Dr) Shruti Vashist', 'Professor and Dean (Academics), MRU, Faridabad', 'Patron(s)', 'Manav Rachna University', 5),
('Shri Ramesh Nair', 'Registrar, MRU, Faridabad', 'Patron(s)', 'Manav Rachna University', 6),
('Prof (Dr) Dipali Bansal', 'Professor and Dean, SoE, MRU, Faridabad', 'General Chair', 'School of Engineering, MRU', 7),
('Prof (Dr) Manpreet Kaur', 'Director E-Learning and Professor, DoCST, MRU, Faridabad', 'Conference Chair', 'Manav Rachna University', 8);
```

### Insert Workshop Data

```sql
INSERT INTO public.workshop (
    title, 
    topic, 
    date, 
    time, 
    venue, 
    partner, 
    overview,
    topics_covered,
    target_audience,
    benefits
) VALUES (
    'Pre Conference Workshop',
    'Quantum Computing',
    '11 February 2026',
    '9:00 AM – 5:00 PM',
    'Manav Rachna University',
    'C-DAC, Bangalore',
    'Quantum Computing is revolutionizing the way we solve complex problems in cryptography, optimization, artificial intelligence, and scientific simulations. This workshop aims to provide participants with an understanding of the fundamentals of quantum mechanics for computing, quantum algorithms, and the practical implementation of quantum programs using emerging platforms.',
    ARRAY[
        'Introduction to Quantum computation',
        'Quantum bits, Single qubit operations',
        'Postulates of quantum mechanics',
        'Quantum Measurement, Bell states',
        'Quantum Gates (Single qubit gates, Pauli Gates, Hadamard gate)',
        'Quantum Circuits',
        'Multi-qubit gates (CNOT gate, Toffoli Gate, Fredkin Gate)',
        'Universal quantum gates',
        'Hands-on session using Qniverse',
        'Designing quantum circuits and implementing quantum algorithms',
        'Grover''s Search Algorithm, Deutsch Algorithm',
        'K-Means and QNN algorithms'
    ],
    ARRAY[
        'Faculty, researchers, and industry professionals',
        'UG/PG/PhD students from Computer Science, Mathematics, Physics, and related fields',
        'Enthusiasts exploring next-generation computing paradigms'
    ],
    ARRAY[
        'Registration Kit',
        'Refreshment and Lunch',
        'Certificate of Participation from C-DAC',
        'Accounts on Qniverse – A unified Quantum Computing Platform (150 credits) - FREE'
    ]
);
```

### Insert Tracks Data

See the `sample-data-tracks.sql` file for the complete tracks insertion script.

## Environment Variables

Create a `.env.local` file in the frontend directory:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

You can find your Supabase credentials in your Supabase project settings under "API".
