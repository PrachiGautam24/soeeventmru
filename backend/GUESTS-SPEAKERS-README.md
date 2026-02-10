# Chief Guest, Guest of Honor, and Keynote Speakers Setup

## Overview
This setup adds three new categories of distinguished guests to the ICASS 2026 conference:
1. **Chief Guest** - The main guest of honor for the conference
2. **Guest of Honor** - Distinguished guests for inaugural and valedictory sessions
3. **Keynote Speakers** - Expert speakers for the conference (updated speakers table)

## Database Changes

### New Tables Created
1. `chief_guest` - Stores chief guest information
2. `guest_of_honor` - Stores guests of honor information

### Updated Tables
1. `speakers` - Added two new columns:
   - `session_type` (TEXT) - Session type: Inaugural, Valedictory, etc.
   - `participation_mode` (TEXT) - Online or Offline

## SQL Files

### Quick Setup (Recommended)
Use this single file to set up everything:
- **`COMPLETE-GUESTS-SPEAKERS-SETUP.sql`** - Complete setup including schema creation, data insertion, and verification queries

### Individual Files (Optional)
If you prefer to run components separately:

#### Schema Files
- `chief-guest-schema.sql` - Creates chief_guest table with RLS and indexes
- `guest-of-honor-schema.sql` - Creates guest_of_honor table with RLS and indexes

#### Data Files
- `chief-guest-data.sql` - Inserts chief guest data
- `guest-of-honor-data.sql` - Inserts guest of honor data
- `keynote-speakers-data.sql` - Updates speakers table and inserts keynote speakers

## Installation Instructions

### Option 1: Complete Setup (Easiest)
1. Open Supabase SQL Editor
2. Copy and paste the contents of `COMPLETE-GUESTS-SPEAKERS-SETUP.sql`
3. Execute the query
4. Verify the results in the output

### Option 2: Step-by-Step
1. Execute schema files first:
   ```sql
   -- Run chief-guest-schema.sql
   -- Run guest-of-honor-schema.sql
   ```

2. Update speakers table and insert data:
   ```sql
   -- Run keynote-speakers-data.sql
   -- Run chief-guest-data.sql
   -- Run guest-of-honor-data.sql
   ```

## Data Included

### Chief Guest
- **Prof (Dr) Dinesh Kumar**
  - Vice Chancellor, Shri Vishwakarma Skill University, Palwal, Haryana
  - Session: Inaugural

### Guests of Honor
1. **Dr. Anbuthambi B**
   - Director-SuccessVerse, Ex-Head, Strategy and Incubation, L&T EduTech
   - Session: Inaugural

2. **Prof. (Dr.) Prerna Gaur**
   - Director, NSUT (West Campus) and Chair, IEEE India Council
   - Session: Valedictory

### Keynote Speakers
1. **Prof (Dr) Parag Kulkarni**
   - Professor (AI and Innovation), Tokyo International University, Japan
   - Session: Inaugural
   - Mode: Online

2. **Dr Ankit Agrawal**
   - Research Professor, Department of ECE, Northwestern University, USA
   - Session: Inaugural
   - Mode: Offline

## Frontend Integration

### New Pages Created
1. `/icass-2026/chief-guest` - Chief Guest page with amber theme
2. `/icass-2026/guest-of-honor` - Guest of Honor page with blue theme

### Updated Components
1. **QuickActions.tsx** - Added two new action buttons
2. **Speakers Page** - Updated title to "Keynote Speakers"

### TypeScript Types Updated
- Added `ChiefGuest` type
- Added `GuestOfHonor` type
- Updated `Speaker` type with new fields

## Verification

After running the SQL, verify the data:

```sql
-- Check Chief Guest
SELECT * FROM public.chief_guest ORDER BY order_index;

-- Check Guest of Honor
SELECT * FROM public.guest_of_honor ORDER BY order_index;

-- Check Keynote Speakers
SELECT * FROM public.speakers WHERE session_type IS NOT NULL ORDER BY order_index;

-- Get counts
SELECT 
    (SELECT COUNT(*) FROM public.chief_guest) as chief_guest_count,
    (SELECT COUNT(*) FROM public.guest_of_honor) as guest_of_honor_count,
    (SELECT COUNT(*) FROM public.speakers WHERE session_type IS NOT NULL) as keynote_speakers_count;
```

Expected Results:
- Chief Guest: 1 record
- Guest of Honor: 2 records
- Keynote Speakers: 2 records

## Security

Both new tables have Row Level Security (RLS) enabled with public read access policies. This ensures data security while allowing the frontend to fetch the data.

## Next Steps

After database setup:
1. Restart your Next.js development server
2. Visit the ICASS 2026 home page
3. You should see new action buttons for "Chief Guest" and "Guest of Honor"
4. The "Speakers" button is now renamed to "Keynote Speakers"
5. Click each button to verify the pages display correctly

## Troubleshooting

If you encounter issues:
1. Verify all tables exist: `\dt` in SQL editor
2. Check RLS policies: `SELECT * FROM pg_policies WHERE tablename IN ('chief_guest', 'guest_of_honor');`
3. Ensure indexes were created: Check the indexes tab in Supabase
4. Verify data was inserted: Run the verification queries above
