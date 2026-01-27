# ⚡ QUICK REFERENCE - ICASS 2026

## 🎯 Current Status

✅ **Server Running**: http://localhost:3000
✅ **Dependencies**: Installed (398 packages)
✅ **Frontend**: 100% Complete
✅ **Backend**: SQL files ready
⏳ **Database**: Needs Supabase setup (10 min)

---

## 🚀 Quick Commands

```bash
# View the app (already running!)
open http://localhost:3000

# Stop server
# Press Ctrl+C in terminal

# Restart server
cd frontend && npm run dev

# Build for production
cd frontend && npm run build

# Check for errors
cd frontend && npm run lint
```

---

## 📁 Quick File Locations

### Frontend
```
frontend/src/app/          → All 11 pages
frontend/src/components/   → Reusable components
frontend/src/lib/         → Supabase client
frontend/.env.local       → ⚠️ Configure API keys here!
```

### Backend
```
backend/complete-database-setup.sql    → Run this first
backend/sample-data-*.sql              → Then run these 5 files
```

### Documentation
```
START-HERE.md              → Overview
SUPABASE-SETUP.md         → Database setup
NEXT-STEPS.md             → What to do now
END-TO-END-COMPLETION.md  → Full completion report
```

---

## 🗄️ 10-Minute Database Setup

### 1. Create Account (2 min)
→ https://supabase.com → Sign up

### 2. Create Project (1 min)
→ New Project → "ICASS-2026" → Asia South region

### 3. Run SQL (5 min)
In SQL Editor, run in order:
1. `complete-database-setup.sql`
2. `sample-data-tracks.sql`
3. `sample-data-speakers.sql`
4. `sample-data-sessions.sql`
5. `sample-data-authors.sql`
6. `sample-data-organisers.sql`

### 4. Get Keys (1 min)
Settings → API → Copy:
- Project URL
- anon public key

### 5. Configure (1 min)
Edit `frontend/.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
```

### 6. Refresh (10 sec)
Reload http://localhost:3000 → Done! 🎉

---

## 📊 Sample Data Included

- **12 Speakers** → Keynotes & experts with bios
- **18 Sessions** → Feb 12-13 schedule
- **12 Tracks** → All research areas
- **26 Authors** → From 15+ countries
- **17 Organisers** → Committee members

**Total: 85+ database rows ready!**

---

## 📱 Pages Available

| URL | Description |
|-----|-------------|
| `/` | Splash screens (9s) |
| `/home` | Main dashboard |
| `/speakers` | 12 profiles |
| `/schedule` | 18 sessions |
| `/tracks` | 12 research tracks |
| `/authors` | 26 researchers |
| `/organisers` | 17 committee |
| `/workshop` | Pre-conference |
| `/patrons` | Leadership |
| `/location` | Maps & venue |
| `/more` | Menu & info |

---

## 🎨 Design Theme

**Colors**: MRU University
- Blue: `#1E3A8A`
- Red: `#DC2626`

**Font**: Inter (Google Font)
**Layout**: Mobile-first (max 448px)
**Icons**: Lucide React

---

## 📖 Documentation Index

| File | Purpose | Read Time |
|------|---------|-----------|
| **START-HERE.md** | Project overview | 5 min |
| **NEXT-STEPS.md** | Immediate actions | 2 min |
| **SUPABASE-SETUP.md** | Database guide | 10 min |
| **QUICK-START.md** | Quick setup | 5 min |
| **END-TO-END-COMPLETION.md** | Full report | 15 min |
| **DEPLOYMENT.md** | Go to production | 10 min |
| **TROUBLESHOOTING.md** | Fix issues | As needed |

---

## 🐛 Quick Troubleshooting

### No data showing?
→ Setup Supabase (see above)

### Port already in use?
```bash
lsof -ti:3000 | xargs kill
```

### Changes not reflecting?
→ Save file, Next.js auto-reloads

### Need different port?
```bash
npm run dev -- -p 3001
```

### Environment not working?
→ Check `frontend/.env.local` has real values (not placeholders)

---

## ✅ Pre-Deployment Checklist

- [ ] Supabase setup complete
- [ ] All pages loading data
- [ ] Search working
- [ ] Maps showing (optional)
- [ ] Build succeeds: `npm run build`
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Ready to deploy!

---

## 🚀 Deploy (After Database Setup)

### Vercel (Easiest)
```bash
npm install -g vercel
cd frontend
vercel
```

### Environment Variables
Add to Vercel/Netlify:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=... (optional)
```

---

## 💡 Quick Tips

1. **Test Locally First**
   - Setup Supabase
   - Verify all features
   - Then deploy

2. **Update Content**
   - Edit in Supabase Table Editor
   - Changes reflect immediately
   - No code changes needed

3. **Customize Design**
   - Edit `tailwind.config.ts`
   - Change colors, fonts
   - Rebuild to apply

4. **Add More Data**
   - Use SQL Editor
   - Or Table Editor UI
   - Or build admin panel

---

## 📊 Project Stats

- **Files**: 77+
- **Lines**: 5,000+
- **Dependencies**: 398
- **Pages**: 11
- **Tables**: 7
- **Sample Rows**: 85+
- **Docs**: 13 files (20k+ words)

---

## 🎯 Success Path

1. ✅ **Now**: Server running locally
2. ⏳ **10 min**: Setup Supabase
3. ✅ **Result**: Fully working app
4. 🚀 **15 min**: Deploy to production
5. 🎉 **Done**: Live conference website!

---

## 🔗 Important Links

**Local**: http://localhost:3000
**Supabase**: https://supabase.com
**Vercel**: https://vercel.com
**Docs**: START-HERE.md

---

## 📞 Get Help

**Database issues** → SUPABASE-SETUP.md
**Code questions** → TROUBLESHOOTING.md
**Find files** → FILE-STRUCTURE.md
**Everything else** → INDEX.md

---

**🎉 You're 90% done! Just 10 minutes to 100%!**

**Next**: Open SUPABASE-SETUP.md → Follow guide → Enjoy! 🚀
