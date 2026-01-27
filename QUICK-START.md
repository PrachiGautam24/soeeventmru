# ICASS 2026 - Quick Start Guide

## 🚀 Get Your App Running in 5 Minutes

### Step 1: Install Dependencies (1 min)

```bash
cd frontend
npm install
```

### Step 2: Setup Supabase (2 min)

1. **Create Supabase Account**: Go to [supabase.com](https://supabase.com) and sign up (free)
2. **Create New Project**: Click "New Project" and fill in details
3. **Create Tables**: 
   - Go to SQL Editor
   - Copy all SQL from `backend/supabase-schema.md`
   - Click "Run" to execute
4. **Insert Sample Data**:
   - Copy SQL from `backend/sample-data-tracks.sql`
   - Run in SQL Editor

### Step 3: Get Your API Keys (1 min)

**Supabase Keys:**
1. In Supabase, go to Settings → API
2. Copy "Project URL" and "anon public" key

**Google Maps Key:**
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create project → Enable Maps JavaScript API
3. Create API key

### Step 4: Configure Environment (30 sec)

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key_here
```

### Step 5: Run the App! (30 sec)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📝 Next Steps

### Add Your First Speaker

Go to Supabase Dashboard → Table Editor → speakers → Insert:

```json
{
  "name": "Dr Pramod Sawant",
  "designation": "Chief Minister of Goa",
  "organization": "Government of Goa",
  "bio": "Chief Minister of Goa with extensive experience in governance...",
  "image_url": "https://example.com/image.jpg",
  "social_links": {
    "twitter": "https://twitter.com/example",
    "linkedin": "https://linkedin.com/in/example"
  },
  "order_index": 1
}
```

### Add a Session

Go to Supabase Dashboard → Table Editor → sessions → Insert:

```json
{
  "title": "Welcome Coffee Reception",
  "description": "Opening reception for all attendees",
  "date": "2026-02-01",
  "start_time": "11:00",
  "end_time": "11:30",
  "duration": "30 minutes",
  "location": "Foyer, First Floor",
  "session_type": "Reception"
}
```

---

## 🎨 Customization Tips

### Change Theme Colors

Edit `frontend/tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#1E3A8A', // Your blue
    light: '#3B82F6',
    dark: '#1E40AF',
  },
  secondary: {
    DEFAULT: '#DC2626', // Your red
    light: '#EF4444',
    dark: '#B91C1C',
  },
}
```

### Update Conference Details

Edit `frontend/src/components/home/HeroSection.tsx` to change:
- Conference name
- Date
- Location
- Theme

### Add More Quick Action Buttons

Edit `frontend/src/components/home/QuickActions.tsx` to add new buttons.

---

## 🐛 Troubleshooting

### "Module not found" Error
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Supabase Connection Error
- Check your `.env.local` file
- Verify Supabase URL and key are correct
- Make sure you're using `NEXT_PUBLIC_` prefix

### Map Not Loading
- Verify Google Maps API key
- Enable "Maps JavaScript API" in Google Cloud Console
- Check browser console for errors

### Build Errors
```bash
npm run build
```
Fix any TypeScript errors shown in the output.

---

## 📱 Mobile Testing

### Test on Your Phone

1. Find your computer's local IP:
   ```bash
   # On Mac/Linux
   ifconfig | grep "inet "
   
   # On Windows
   ipconfig
   ```

2. Run dev server:
   ```bash
   npm run dev
   ```

3. On your phone, visit: `http://YOUR_IP:3000`

---

## 🚀 Deploy to Production

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables
6. Deploy!

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `cd frontend && npm run build`
6. Publish directory: `frontend/.next`
7. Add environment variables
8. Deploy!

---

## 📞 Need Help?

- Check the main [README.md](./README.md)
- Review [backend/supabase-schema.md](./backend/supabase-schema.md)
- Inspect browser console for errors
- Check Supabase logs in dashboard

---

## ✅ Checklist

- [ ] Installed dependencies
- [ ] Created Supabase project
- [ ] Created database tables
- [ ] Inserted sample data
- [ ] Got API keys
- [ ] Created .env.local file
- [ ] App runs on localhost:3000
- [ ] Can see splash screens
- [ ] Bottom navigation works
- [ ] Data loads from Supabase

**All checked? You're ready to go! 🎉**
