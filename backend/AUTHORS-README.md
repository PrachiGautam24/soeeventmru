# AUTHORS DATABASE SETUP - ICASS 2026

This folder contains SQL scripts to set up and populate the authors table with all 176 registered authors for ICASS 2026.

## 📋 Overview

The authors table stores information about conference paper authors including:
- Paper ID and track
- Author name and affiliation  
- Paper title
- Participation mode (online/offline)
- Contact email
- Order index for display

## 📦 Files Included

### 1. `authors-schema-update.sql`
Updates the existing authors table schema by adding:
- `paper_id` - Integer field for paper submission ID
- `participation_mode` - Text field for 'online' or 'offline'
- Indexes on both fields for better query performance

### 2. `authors-data.sql`
Contains INSERT statements for all 176 authors with:
- Complete author information
- Paper details (ID, title, track)
- Affiliation and contact details
- Participation mode
- Verification queries at the end

### 3. `AUTHORS-COMPLETE-SETUP.sql`
All-in-one file that combines schema updates and data insertion.
Use this for quick setup in a single step.

## 🚀 Installation

### Option 1: Quick Setup (Recommended)
Execute the complete setup file in one go:

```sql
-- Run this single file in Supabase SQL Editor
\i AUTHORS-COMPLETE-SETUP.sql
```

### Option 2: Step-by-Step Setup
Execute files in this order:

**Step 1:** Update schema
```sql
-- Adds paper_id and participation_mode columns
\i authors-schema-update.sql
```

**Step 2:** Insert data
```sql
-- Inserts all 176 authors
\i authors-data.sql
```

## 📊 Data Summary

**Total Authors:** 176

**By Participation Mode:**
- Online: ~120 authors
- Offline: ~56 authors

**By Track:**
- Track 1 (AI/ML): 51 authors
- Track 2 (Data Science): 13 authors
- Track 3 (Blockchain/Systems): 16 authors
- Track 4 (Electronics/Hardware): 22 authors
- Track 5 (Energy/IoT): 7 authors
- Track 6 (Management): 2 authors
- Track 7 (Materials Science): 6 authors
- Track 8 (Computing Applications): 22 authors
- Track 9 (Security/Robotics): 12 authors
- Track 10 (Federated Learning): 7 authors
- Track 11 (Smart Systems): 13 authors
- Track 12 (Healthcare IoT): 5 authors

**Multiple Authors per Paper:**
Some papers have multiple authors (e.g., Paper ID 1210, 1432, 558, etc.)

## ✅ Verification

After installation, run these queries to verify:

### Check total count
```sql
SELECT COUNT(*) as total_authors FROM public.authors;
-- Expected: 176
```

### View all authors
```sql
SELECT 
    paper_id,
    track,
    name,
    affiliation,
    participation_mode,
    email
FROM public.authors
ORDER BY paper_id;
```

### Count by participation mode
```sql
SELECT 
    participation_mode,
    COUNT(*) as count
FROM public.authors
GROUP BY participation_mode;
```

### Count by track
```sql
SELECT 
    track,
    COUNT(*) as count
FROM public.authors
GROUP BY track
ORDER BY track::integer;
```

### Find papers with multiple authors
```sql
SELECT 
    paper_id,
    COUNT(*) as author_count,
    STRING_AGG(name, ', ') as authors
FROM public.authors
GROUP BY paper_id
HAVING COUNT(*) > 1
ORDER BY author_count DESC;
```

## 🔍 Schema Details

### Authors Table Structure
```sql
CREATE TABLE public.authors (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    affiliation TEXT,
    email TEXT,
    paper_title TEXT,
    track TEXT,
    paper_id INTEGER,                    -- NEW
    participation_mode TEXT,             -- NEW
    country TEXT,
    image_url TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

### Indexes
- `authors_name_idx` - On name field
- `authors_email_idx` - On email field
- `authors_order_idx` - On order_index field
- `authors_track_idx` - On track field
- `authors_paper_id_idx` - On paper_id field (NEW)
- `authors_participation_mode_idx` - On participation_mode field (NEW)

## 🛠️ Troubleshooting

### Issue: Column already exists
If you get "column already exists" error:
```sql
-- Check existing columns
SELECT column_name, data_type 
FROM information_schema.columns
WHERE table_name = 'authors';
```

If columns exist, skip schema update and run data file directly.

### Issue: Duplicate authors
If you need to clear existing data:
```sql
-- Delete all authors (BE CAREFUL!)
DELETE FROM public.authors;

-- Then run the data insertion script again
```

### Issue: Foreign key constraints
The authors table doesn't have foreign key constraints to tracks table,
so you can insert authors even if track records don't exist yet.

## 📱 Frontend Integration

To display authors in your Next.js app, create an authors page:

```typescript
// frontend/src/app/icass-2026/authors/page.tsx

import { createClient } from '@/lib/supabase';

interface Author {
  id: string;
  name: string;
  paper_title: string;
  affiliation: string;
  email: string;
  track: string;
  paper_id: number;
  participation_mode: string;
}

export default async function AuthorsPage() {
  const supabase = createClient();
  
  const { data: authors } = await supabase
    .from('authors')
    .select('*')
    .order('paper_id');

  return (
    <div>
      <h1>Conference Authors</h1>
      {/* Display authors here */}
    </div>
  );
}
```

## 📝 Notes

- **Phone numbers were intentionally excluded** as per user requirements
- Email addresses are stored for contact purposes
- Participation mode helps organize virtual vs in-person attendees
- Order_index can be used for custom sorting if needed
- Some authors have multiple papers (check by email or name)

## 🔐 Security

- Row Level Security (RLS) is enabled on the authors table
- Public read access is granted via policy
- No phone numbers are stored to protect privacy

## 📧 Support

For issues or questions about the authors data:
1. Check verification queries above
2. Review the schema in `backend/SCHEMA.sql`
3. Ensure all data is properly formatted (no unescaped quotes)

---

**Last Updated:** February 10, 2026
**Total Authors:** 176
**Conference:** ICASS 2026
