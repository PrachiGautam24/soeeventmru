-- Add Attendance Table
CREATE TABLE IF NOT EXISTS public.attendance (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add Sponsors Table
CREATE TABLE IF NOT EXISTS public.sponsors (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    logo_url TEXT,
    website TEXT,
    description TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sponsors ENABLE ROW LEVEL SECURITY;

-- Create policies for attendance (allow anyone to insert, only authenticated to read)
CREATE POLICY "Allow public insert" ON public.attendance
    FOR INSERT
    TO public
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read" ON public.attendance
    FOR SELECT
    TO authenticated
    USING (true);

-- Create policies for sponsors (allow public to read)
CREATE POLICY "Allow public read" ON public.sponsors
    FOR SELECT
    TO public
    USING (true);

CREATE POLICY "Allow authenticated insert/update" ON public.sponsors
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_attendance_timestamp ON public.attendance(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_sponsors_order ON public.sponsors(order_index ASC);
