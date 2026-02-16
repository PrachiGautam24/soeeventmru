# SOE Events MRU

SOE Events MRU is a mobile-first event platform for Manav Rachna University’s School of Engineering. It is built as a Next.js App Router frontend with Supabase as the data layer. The current event focus is ICASS 2026, with a structure that supports adding more events later.

## Architecture Overview
- **Frontend**: Next.js 14 App Router (TypeScript, Tailwind CSS, Framer Motion). Most event pages are client components and fetch data directly from Supabase where required.
- **Backend**: Supabase Postgres schema in `backend/SCHEMA.sql`, with Row Level Security enabled and public read policies for core tables.
- **Data flow**: The browser talks to Supabase using the public URL + anon key from `.env.local`. Typed access is enforced via `src/lib/types/database.ts`.
- **Design system**: Tailwind CSS theme is customized for MRU brand colors in `tailwind.config.ts`.

## Repository Layout (Root)
- **backend/**
  - **SCHEMA.sql**: Canonical SQL schema for core tables, RLS policies, and indexes.
- **frontend/**
  - **public/**: Static assets (images, favicons, web manifest).
  - **src/**: Application source code.
  - **next.config.js**: Remote image host allowlist for Next Image.
  - **tailwind.config.ts**: Theme and color tokens.
  - **tsconfig.json**: TypeScript config and path alias `@/*`.
  - **package.json**: Scripts and dependencies.

## Frontend Structure (frontend/src)
### app/ (Next.js App Router)
- **layout.tsx**: App shell, fonts, metadata, and viewport settings. Wraps pages with `MobileOnly`.
- **globals.css**: Tailwind layers, base styles, and shared animations.
- **page.tsx**: Splash screen that redirects to `/home`.
- **home/page.tsx**: SOE Events landing page listing events (currently ICASS 2026).
- **not-found.tsx**: Global 404 screen.
- **icass-2026/**: Event-specific routes (ICASS 2026).

### components/
- **AppLayout.tsx**: Mobile card layout wrapper and bottom navigation.
- **BottomNav.tsx**: Fixed footer nav that adapts links based on event context.
- **MobileOnly.tsx**: Wrapper for mobile-first rendering.
- **home/**: UI blocks for ICASS 2026 home page.
  - **HeroSection.tsx**: Poster and hero banner.
  - **QuickActions.tsx**: Grid of ICASS 2026 shortcuts.
  - **AboutSection.tsx**: Expandable about content and academic partner logos.

### lib/
- **supabase.ts**: Typed Supabase client initialized from `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- **types/database.ts**: Full Supabase schema types used throughout the app.
- **types/index.ts**: Application-friendly type exports mapped to database tables.
- **utils.ts**: Helpers for Google Drive image URLs and avatar fallback.

## ICASS 2026 Route Map
The ICASS pages are split into **Supabase-backed** screens (data fetched from tables) and **static** screens (hard-coded content).

### Supabase-backed pages
- **/icass-2026/speakers** → `speakers` table: keynote and session speaker list.
- **/icass-2026/chief-guest** → `chief_guest` table.
- **/icass-2026/guest-of-honor** → `guest_of_honor` table.
- **/icass-2026/authors** → `authors` table with expanded author session metadata.
- **/icass-2026/tracks** → `tracks` table.
- **/icass-2026/patrons** → `patrons` table.
- **/icass-2026/organisers** → `organisers` table.
- **/icass-2026/schedule** → `schedule_events` and `session_papers` tables.
- **/icass-2026/session-tracker** → `sessions` table (used to classify upcoming vs completed).
- **/icass-2026/attendance** → `attendance` table (insert-only from client UI).

### Static content pages
- **/icass-2026/home**: ICASS home screen (hero, quick actions, about).
- **/icass-2026/location**: Venue address and contact details.
- **/icass-2026/more**: Link hub for ICASS pages and external resources.
- **/icass-2026/workshop**: Pre-conference workshop details.
- **/icass-2026/poster-presentation**: Poster presentation information.
- **/icass-2026/cultural-performances**: Cultural schedule and performance info.
- **/icass-2026/supporters**: Event supporters (static list + logos).
- **/icass-2026/loading**: Loading screen.

## Database (Supabase)
The schema in `backend/SCHEMA.sql` defines core tables and security:
- **speakers, tracks, sessions, patrons, organisers, workshop, authors, sponsors, attendance**
- RLS is enabled on all tables with public read policies.
- Indexes exist for ordering and common lookups.

The frontend type file `frontend/src/lib/types/database.ts` includes additional tables used by the UI such as `chief_guest`, `guest_of_honor`, `schedule_events`, and `session_papers`. Ensure your Supabase database contains these tables to match the frontend types and route expectations.

## Environment Variables (frontend/.env.local)
The frontend expects:
```
NEXT_PUBLIC_SUPABASE_URL="https://<project>.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="<anon-key>"
```

## Scripts (frontend/package.json)
- **npm run dev**: Start Next.js dev server.
- **npm run build**: Production build.
- **npm run start**: Start production server.
- **npm run lint**: Run ESLint.

## How Data Is Rendered
- **Static pages** render content directly from the component files.
- **Supabase pages** fetch data on the client using the typed client in `src/lib/supabase.ts`.
- **Images** come from `/public` or from allowed remote hosts configured in `next.config.js` (UI avatars, Google Drive, and Google user content).

## Adding New Events
1. Create a new folder under `src/app/<event-slug>`.
2. Add routes and data-fetching pages (copy patterns from `icass-2026`).
3. Add any new tables to Supabase and update `src/lib/types/database.ts`.
4. Add the event card in `src/app/home/page.tsx`.
