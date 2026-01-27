# 📁 Complete File Structure - ICASS 2026

## Visual Project Tree

```
icass-2026-web-app/
│
├── 📄 README.md                          # Main documentation
├── 📄 QUICK-START.md                     # 5-minute setup guide
├── 📄 GETTING-STARTED.md                 # Complete getting started guide
├── 📄 DEPLOYMENT.md                      # Production deployment guide
├── 📄 PROJECT-SUMMARY.md                 # Technical overview
├── 📄 TROUBLESHOOTING.md                 # Common issues & solutions
│
├── 📂 frontend/                          # Next.js Application
│   │
│   ├── 📂 src/
│   │   │
│   │   ├── 📂 app/                       # Next.js App Router Pages
│   │   │   │
│   │   │   ├── 📄 layout.tsx             # Root layout with metadata
│   │   │   ├── 📄 globals.css            # Global styles + Tailwind
│   │   │   ├── 📄 page.tsx               # Splash screens (entry point)
│   │   │   │
│   │   │   ├── 📂 home/
│   │   │   │   └── 📄 page.tsx           # Home page (main interface)
│   │   │   │
│   │   │   ├── 📂 speakers/
│   │   │   │   └── 📄 page.tsx           # Speakers list & details
│   │   │   │
│   │   │   ├── 📂 schedule/
│   │   │   │   └── 📄 page.tsx           # Conference schedule
│   │   │   │
│   │   │   ├── 📂 tracks/
│   │   │   │   └── 📄 page.tsx           # Conference tracks
│   │   │   │
│   │   │   ├── 📂 patrons/
│   │   │   │   └── 📄 page.tsx           # Patrons & chairs
│   │   │   │
│   │   │   ├── 📂 organisers/
│   │   │   │   └── 📄 page.tsx           # Organizing committee
│   │   │   │
│   │   │   ├── 📂 workshop/
│   │   │   │   └── 📄 page.tsx           # Pre-conference workshop
│   │   │   │
│   │   │   ├── 📂 authors/
│   │   │   │   └── 📄 page.tsx           # Authors list
│   │   │   │
│   │   │   ├── 📂 location/
│   │   │   │   └── 📄 page.tsx           # Venue location & map
│   │   │   │
│   │   │   └── 📂 more/
│   │   │       └── 📄 page.tsx           # More menu
│   │   │
│   │   ├── 📂 components/                # Reusable Components
│   │   │   │
│   │   │   ├── 📄 AppLayout.tsx          # Main app wrapper
│   │   │   ├── 📄 BottomNav.tsx          # Bottom navigation bar
│   │   │   │
│   │   │   └── 📂 home/                  # Home page components
│   │   │       ├── 📄 HeroSection.tsx    # Hero banner
│   │   │       ├── 📄 QuickActions.tsx   # Action buttons grid
│   │   │       └── 📄 AboutSection.tsx   # About accordion
│   │   │
│   │   └── 📂 lib/                       # Libraries & Utilities
│   │       │
│   │       ├── 📄 supabase.ts            # Supabase client
│   │       │
│   │       └── 📂 types/                 # TypeScript Types
│   │           ├── 📄 database.ts        # Database types
│   │           └── 📄 index.ts           # Type exports
│   │
│   ├── 📄 package.json                   # Dependencies
│   ├── 📄 package-lock.json              # Locked dependencies
│   ├── 📄 tsconfig.json                  # TypeScript config
│   ├── 📄 tailwind.config.ts             # Tailwind config
│   ├── 📄 postcss.config.js              # PostCSS config
│   ├── 📄 next.config.js                 # Next.js config
│   ├── 📄 .env.local.example             # Environment template
│   ├── 📄 .gitignore                     # Git ignore rules
│   │
│   └── 📂 node_modules/                  # Installed packages (after npm install)
│
└── 📂 backend/                           # Backend Resources
    │
    ├── 📄 supabase-schema.md             # Complete database schema
    └── 📄 sample-data-tracks.sql         # Sample tracks data

```

---

## 📊 File Counts

### Frontend (40+ files)
- **Pages**: 11 files
- **Components**: 5 files  
- **Library Files**: 3 files
- **Configuration**: 7 files
- **Styles**: 1 file

### Backend (2 files)
- **Schema**: 1 file
- **Sample Data**: 1 file

### Documentation (7 files)
- **Guides**: 6 files
- **Main README**: 1 file

### Total: **50+ files created**

---

## 🎯 Key Files Explained

### Entry Points

**`frontend/src/app/page.tsx`**
- First page users see
- Contains splash screen sequence
- Redirects to /home after 9 seconds

**`frontend/src/app/home/page.tsx`**
- Main application interface
- Shows hero, quick actions, about sections
- Entry point after splash screens

### Core Components

**`frontend/src/components/AppLayout.tsx`**
- Wraps all main pages
- Includes BottomNav
- Provides consistent layout

**`frontend/src/components/BottomNav.tsx`**
- Bottom navigation bar
- 3 tabs: Home, Location, More
- Highlights active tab

### Configuration Files

**`frontend/package.json`**
- Lists all dependencies
- Defines npm scripts
- Project metadata

**`frontend/tsconfig.json`**
- TypeScript compiler settings
- Path aliases (@/ for src/)
- Type checking rules

**`frontend/tailwind.config.ts`**
- Tailwind CSS configuration
- Custom colors (MRU theme)
- Custom utilities

**`frontend/next.config.js`**
- Next.js configuration
- Image domains
- Build settings

**`frontend/.env.local`** (you create this)
- Environment variables
- API keys
- Sensitive data

### Library Files

**`frontend/src/lib/supabase.ts`**
- Supabase client initialization
- Used by all pages to fetch data

**`frontend/src/lib/types/database.ts`**
- Auto-generated types for database
- Type-safe queries
- IntelliSense support

**`frontend/src/lib/types/index.ts`**
- Exports all types
- Convenience imports

### Backend Files

**`backend/supabase-schema.md`**
- Complete SQL schema
- Table definitions
- RLS policies
- Sample data insertion scripts

**`backend/sample-data-tracks.sql`**
- Pre-filled tracks data
- All 12 conference tracks
- Ready to insert

---

## 📝 File Purposes by Category

### 🎨 UI Components (11 files)
```
Components that render the user interface
├── AppLayout.tsx          → Main wrapper
├── BottomNav.tsx          → Navigation bar
├── HeroSection.tsx        → Home banner
├── QuickActions.tsx       → Action buttons
├── AboutSection.tsx       → About sections
└── 6 page components      → Full pages
```

### ⚙️ Configuration (7 files)
```
Files that configure the application
├── package.json           → Dependencies
├── tsconfig.json          → TypeScript
├── tailwind.config.ts     → Styling
├── postcss.config.js      → CSS processing
├── next.config.js         → Next.js
├── .env.local.example     → Environment template
└── .gitignore            → Git exclusions
```

### 🗄️ Database (3 files)
```
Files related to data management
├── supabase.ts            → Client connection
├── database.ts            → Type definitions
└── supabase-schema.md     → Schema SQL
```

### 📚 Documentation (7 files)
```
Guides and documentation
├── README.md              → Main docs
├── QUICK-START.md         → Fast setup
├── GETTING-STARTED.md     → Complete guide
├── DEPLOYMENT.md          → Production
├── PROJECT-SUMMARY.md     → Overview
├── TROUBLESHOOTING.md     → Help
└── FILE-STRUCTURE.md      → This file
```

---

## 🔍 Where to Find Things

### Need to change...

**Colors/Theme?**
→ `frontend/tailwind.config.ts`

**Conference name/details?**
→ `frontend/src/components/home/HeroSection.tsx`

**Quick action buttons?**
→ `frontend/src/components/home/QuickActions.tsx`

**Bottom navigation?**
→ `frontend/src/components/BottomNav.tsx`

**Splash screens?**
→ `frontend/src/app/page.tsx`

**Page layouts?**
→ Individual page files in `frontend/src/app/*/page.tsx`

**Database structure?**
→ `backend/supabase-schema.md`

**Environment variables?**
→ `frontend/.env.local`

---

## 📦 Dependencies Location

All npm packages are in:
```
frontend/node_modules/
```

Key dependencies:
- `next` - Next.js framework
- `react` - React library
- `typescript` - TypeScript compiler
- `tailwindcss` - Utility CSS framework
- `framer-motion` - Animation library
- `@supabase/supabase-js` - Supabase client
- `lucide-react` - Icon library

---

## 🎯 Important Paths

### Development
```
Start here: frontend/
Run: npm run dev
Environment: frontend/.env.local
```

### Database
```
Schema: backend/supabase-schema.md
Sample data: backend/sample-data-tracks.sql
```

### Documentation
```
Quick setup: QUICK-START.md
Full guide: GETTING-STARTED.md
Deploy: DEPLOYMENT.md
Help: TROUBLESHOOTING.md
```

---

## 🚀 Typical Workflow

1. **Install** (once)
   ```
   cd frontend/
   npm install
   ```

2. **Configure** (once)
   ```
   Create frontend/.env.local
   Add API keys
   ```

3. **Develop** (daily)
   ```
   cd frontend/
   npm run dev
   Edit files in src/
   ```

4. **Deploy** (when ready)
   ```
   Push to GitHub
   Deploy on Vercel
   ```

---

## 💡 Pro Tips

### File Organization
- All **pages** go in `src/app/*/page.tsx`
- All **components** go in `src/components/`
- All **utilities** go in `src/lib/`

### Adding New Pages
1. Create folder: `src/app/newpage/`
2. Create file: `src/app/newpage/page.tsx`
3. Export component
4. Access at: `/newpage`

### Adding New Components
1. Create file: `src/components/NewComponent.tsx`
2. Export component
3. Import where needed

### Modifying Styles
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes

---

This file structure is designed for:
- ✅ Easy navigation
- ✅ Clear organization
- ✅ Scalability
- ✅ Maintainability

**Everything you need is here! 🎉**
