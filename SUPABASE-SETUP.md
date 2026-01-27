# 🗄️ Supabase Database Setup Guide

## Quick Setup (5 Minutes)

### Step 1: Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Click **"Start your project"**
3. Sign up with GitHub, Google, or email
4. Verify your email if required

### Step 2: Create New Project
1. Click **"New Project"** button
2. Fill in project details:
   - **Organization**: Select or create one
   - **Name**: `ICASS-2026`
   - **Database Password**: Choose a strong password (save it!)
   - **Region**: `Asia South (Mumbai)` or closest to India
   - **Pricing Plan**: Free tier is perfect to start
3. Click **"Create new project"**
4. Wait ~2 minutes for project to initialize

### Step 3: Run Database Setup

Once your project is ready:

#### 3.1 Create Tables
1. Click **"SQL Editor"** in left sidebar
2. Click **"New query"** button
3. Open `backend/complete-database-setup.sql` from your project
4. Copy entire contents
5. Paste in SQL Editor
6. Click **"Run"** or press `Ctrl+Enter`
7. ✅ You should see: "Success. No rows returned"

#### 3.2 Insert Sample Data

Run these files **in order**, one by one:

**File 1: Tracks Data**
1. New query in SQL Editor
2. Copy contents of `backend/sample-data-tracks.sql`
3. Paste and Run
4. ✅ Should show: "12 rows affected"

**File 2: Speakers Data**
1. New query
2. Copy `backend/sample-data-speakers.sql`
3. Paste and Run
4. ✅ Should show: "12 rows affected"

**File 3: Sessions Data**
1. New query
2. Copy `backend/sample-data-sessions.sql`
3. Paste and Run
4. ✅ Should show: "18 rows affected"

**File 4: Authors Data**
1. New query
2. Copy `backend/sample-data-authors.sql`
3. Paste and Run
4. ✅ Should show: "26 rows affected"

**File 5: Organisers Data**
1. New query
2. Copy `backend/sample-data-organisers.sql`
3. Paste and Run
4. ✅ Should show: "17 rows affected"

**Optional: Patrons & Workshop Data**
- Sample data available in `backend/supabase-schema.md`
- Copy and run if needed

### Step 4: Get API Keys

1. Click **"Settings"** (gear icon) in left sidebar
2. Click **"API"** section
3. Find these values:

   **Project URL**
   ```
   https://xxxxxxxxxxxxx.supabase.co
   ```
   
   **anon public key** (under "Project API keys")
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

4. Copy both values

### Step 5: Configure Environment

1. Open `frontend/.env.local` in your project
2. Replace placeholder values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. Save the file

### Step 6: Verify Setup

1. Go back to Supabase dashboard
2. Click **"Table Editor"** in left sidebar
3. Verify you see these tables:
   - ✅ speakers (12 rows)
   - ✅ sessions (18 rows)
   - ✅ tracks (12 rows)
   - ✅ authors (26 rows)
   - ✅ organisers (17 rows)
   - ✅ patrons (optional)
   - ✅ workshop (optional)

4. Click on any table to browse the data

---

## ✅ Setup Complete!

Your database is ready! Now you can:

```bash
cd frontend
npm run dev
```

Open http://localhost:3000 and see your app! 🎉

---

## 📊 What Was Created

### Tables Structure

| Table | Rows | Purpose |
|-------|------|---------|
| **speakers** | 12 | Conference speakers with bios and social links |
| **sessions** | 18 | Conference schedule for 2 days |
| **tracks** | 12 | Research tracks with topics |
| **authors** | 26 | Paper authors and affiliations |
| **organisers** | 17 | Organizing committee members |
| **patrons** | 0* | Leadership and patronage (optional) |
| **workshop** | 0* | Pre-conference workshop (optional) |

*Can be populated with sample data from `backend/supabase-schema.md`

### Security Setup

- ✅ Row Level Security (RLS) enabled on all tables
- ✅ Public read access policies configured
- ✅ No authentication required for reading data
- ✅ Secure by default

### Indexes Created

Performance optimization indexes:
- Speakers ordered by `order_index`
- Sessions sorted by `date` and `start_time`
- Authors grouped by `track`
- Patrons grouped by `category`
- Organisers grouped by `role`

---

## 🎨 Customizing Data

### Option 1: Supabase Table Editor (Easy)

1. Go to **Table Editor** in Supabase
2. Select a table
3. Click **"Insert row"** or edit existing rows
4. Fill in the form
5. Click **"Save"**

### Option 2: SQL Editor (Advanced)

```sql
-- Example: Add a new speaker
INSERT INTO speakers (name, title, organization, bio, order_index)
VALUES (
  'Dr. Your Name',
  'Your Title',
  'Your Organization',
  'Your bio here...',
  13
);

-- Example: Update session time
UPDATE sessions 
SET start_time = '15:00', end_time = '16:30'
WHERE title = 'Your Session Title';
```

### Option 3: Via Application (Future)

Build an admin panel to manage data through your web app!

---

## 🔍 Verifying Data

### Check Table Counts

```sql
SELECT 
  'speakers' as table_name, COUNT(*) as rows FROM speakers
UNION ALL
SELECT 'sessions', COUNT(*) FROM sessions
UNION ALL
SELECT 'tracks', COUNT(*) FROM tracks
UNION ALL
SELECT 'authors', COUNT(*) FROM authors
UNION ALL
SELECT 'organisers', COUNT(*) FROM organisers;
```

### Browse Specific Data

```sql
-- View all speakers
SELECT name, title, organization FROM speakers ORDER BY order_index;

-- View sessions for Feb 12
SELECT title, speaker_name, start_time, location 
FROM sessions 
WHERE date = '2026-02-12' 
ORDER BY start_time;

-- View authors by track
SELECT track, COUNT(*) as author_count 
FROM authors 
GROUP BY track 
ORDER BY author_count DESC;
```

---

## 🚨 Troubleshooting

### Error: "relation 'speakers' does not exist"
**Solution**: Run `backend/complete-database-setup.sql` first to create tables

### Error: "duplicate key value violates unique constraint"
**Solution**: You're trying to insert data that already exists. Check your tables in Table Editor.

### Error: "new row violates row-level security policy"
**Solution**: RLS policies not set up correctly. Re-run the complete-database-setup.sql file.

### Can't see data in the app
**Check**:
1. ✅ Is `.env.local` configured with correct keys?
2. ✅ Did you run all SQL insert files?
3. ✅ Check browser console for errors (F12)
4. ✅ Verify data exists in Supabase Table Editor

### Supabase connection timeout
**Solution**: 
1. Check your internet connection
2. Verify the Supabase URL is correct
3. Try from a different network
4. Check Supabase status page

---

## 🔐 Security Best Practices

### API Keys
- ✅ **DO** use environment variables (`.env.local`)
- ✅ **DO** use different keys for dev/production
- ❌ **DON'T** commit `.env.local` to Git
- ❌ **DON'T** share your anon key publicly

### Row Level Security
- ✅ RLS is enabled on all tables
- ✅ Public read-only access configured
- ✅ No one can modify data without authentication
- ✅ Perfect for public conference websites

### Future Enhancements
- Add authentication for admin features
- Create admin-only write policies
- Implement content moderation
- Add audit logging

---

## 📈 Next Steps

### 1. Customize Content
Replace sample data with real:
- Speaker profiles and photos
- Actual session schedule
- Real author information
- Your organizing committee

### 2. Add More Data
- Upload speaker photos (use Supabase Storage)
- Add more sessions/tracks as needed
- Include sponsor information
- Add venue maps/photos

### 3. Test Everything
- Browse all pages in your app
- Test search functionality
- Verify links work
- Check mobile responsiveness

### 4. Deploy
Follow `DEPLOYMENT.md` to:
- Deploy to Vercel (recommended)
- Set up production environment
- Configure custom domain
- Enable analytics

---

## 💡 Pro Tips

1. **Backup Your Data**
   - Go to Settings > Database
   - Click "Backups" tab
   - Free tier includes 7-day backups

2. **Monitor Usage**
   - Check Dashboard for API usage
   - Free tier: 500MB database, 2GB bandwidth
   - Perfect for conference website

3. **Use Supabase Studio**
   - Visual query builder
   - Browse relationships
   - Export to CSV

4. **Real-time Updates** (Optional)
   ```typescript
   // Subscribe to new speakers
   supabase
     .channel('speakers')
     .on('postgres_changes', { 
       event: 'INSERT', 
       schema: 'public', 
       table: 'speakers' 
     }, payload => {
       console.log('New speaker added!', payload)
     })
     .subscribe()
   ```

---

## 📞 Need Help?

- **Supabase Docs**: https://supabase.com/docs
- **Supabase Discord**: https://discord.supabase.com
- **SQL Tutorial**: https://www.postgresqltutorial.com
- **Project Docs**: `TROUBLESHOOTING.md`

---

**✅ Database Setup Complete!**

You now have a fully functional Supabase backend with:
- 7 tables with sample data
- Secure RLS policies
- Performance indexes
- Ready for production

**Start your dev server and build something amazing! 🚀**
