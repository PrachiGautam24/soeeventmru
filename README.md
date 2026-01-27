# ICASS 2026 Web Application

A modern, mobile-responsive web application for the International Conference on Intelligent Computing and Automation for Sustainable Solutions (ICASS-2026) at Manav Rachna University.

## 🚀 Features

- **Splash Screen Flow**: Beautiful onboarding experience with multiple splash screens
- **Home Page**: Conference information, quick actions, and about sections
- **Speakers**: Browse and search conference speakers with detailed profiles
- **Schedule**: View conference sessions by date with session details
- **Tracks**: Explore 12 conference tracks with topics
- **Patrons & Chairs**: View conference leadership and patrons
- **Organisers**: Browse organizing committee members
- **Workshop**: Pre-conference workshop details
- **Authors**: Search and view author information
- **Location**: Interactive Google Maps integration with venue details
- **More**: Additional resources and information

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Maps**: Google Maps API

## 📁 Project Structure

```
icass-2026-web-app/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx              # Splash screens
│   │   │   ├── home/                 # Home page
│   │   │   ├── speakers/             # Speakers page
│   │   │   ├── schedule/             # Schedule page
│   │   │   ├── tracks/               # Tracks page
│   │   │   ├── patrons/              # Patrons page
│   │   │   ├── organisers/           # Organisers page
│   │   │   ├── workshop/             # Workshop page
│   │   │   ├── authors/              # Authors page
│   │   │   ├── location/             # Location page
│   │   │   ├── more/                 # More page
│   │   │   ├── layout.tsx            # Root layout
│   │   │   └── globals.css           # Global styles
│   │   ├── components/
│   │   │   ├── AppLayout.tsx         # Main app layout
│   │   │   ├── BottomNav.tsx         # Bottom navigation
│   │   │   └── home/                 # Home page components
│   │   └── lib/
│   │       ├── supabase.ts           # Supabase client
│   │       └── types/                # TypeScript types
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   └── next.config.js
└── backend/
    ├── supabase-schema.md            # Database schema
    └── sample-data-tracks.sql        # Sample data for tracks
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works)
- Google Maps API key (for location page)

### 1. Clone the Repository

```bash
cd /Users/harshb/Documents/GitHub/icass-2026-web-app
```

### 2. Install Dependencies

```bash
cd frontend
npm install
```

### 3. Setup Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to the SQL Editor in your Supabase dashboard
3. Copy the contents of `backend/supabase-schema.md` and execute the SQL commands
4. Insert sample data using the SQL commands provided in the schema file
5. Insert tracks data using `backend/sample-data-tracks.sql`

### 4. Configure Environment Variables

Create a `.env.local` file in the `frontend` directory:

```bash
cd frontend
cp .env.local.example .env.local
```

Edit `.env.local` and add your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

**To find your Supabase credentials:**
- Go to your Supabase project
- Click on "Settings" → "API"
- Copy the "Project URL" and "anon/public" key

**To get a Google Maps API key:**
- Go to [Google Cloud Console](https://console.cloud.google.com)
- Create a new project or select existing one
- Enable "Maps JavaScript API" and "Maps Embed API"
- Create credentials (API key)

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 App Flow

1. **Splash Screen 1**: ICASS logo (2 seconds)
2. **Splash Screen 2**: QS Quacquarelli Symonds branding (2 seconds)
3. **Splash Screen 3**: Welcome loading screen (2 seconds)
4. **Splash Screen 4**: Conference poster (3 seconds)
5. **Home Page**: Main interface with bottom navigation

## 🎨 Theme Colors

The app uses Manav Rachna University's brand colors:

- **Primary Blue**: `#1E3A8A`
- **Secondary Red**: `#DC2626`
- **Accent Yellow**: `#F59E0B`
- **Accent Orange**: `#EA580C`

## 📊 Database Tables

- `speakers`: Conference speakers and their details
- `sessions`: Conference sessions and schedule
- `tracks`: Conference tracks and topics
- `patrons`: Patrons and chairs information
- `organisers`: Organizing committee members
- `workshop`: Pre-conference workshop details
- `authors`: Author information

## 🔧 Customization

### Adding New Speakers

1. Go to Supabase dashboard
2. Navigate to Table Editor → speakers
3. Click "Insert row" and fill in the details
4. Save

### Adding New Sessions

1. Go to Supabase dashboard
2. Navigate to Table Editor → sessions
3. Click "Insert row" and fill in the details
4. Save

### Updating Content

All content is dynamic and stored in Supabase. Simply update the database tables to reflect changes in the app.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy

### Environment Variables for Production

Make sure to add all environment variables in your deployment platform:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

## 📝 TODO

- [ ] Add authentication for admin panel
- [ ] Add speaker registration form
- [ ] Add paper submission functionality
- [ ] Add push notifications for schedule updates
- [ ] Add offline support with PWA
- [ ] Add dark mode support

## 🤝 Contributing

This is a private project for ICASS 2026. For any changes or issues, please contact the development team.

## 📄 License

© 2026 Manav Rachna University. All rights reserved.

## 👥 Contact

For any queries regarding the conference:
- **Email**: info@mru.edu.in
- **Phone**: +91-129-4198000
- **Website**: https://manavrachna.edu.in

## 🎯 Conference Details

**ICASS 2026**
International Conference on Intelligent Computing and Automation for Sustainable Solutions

**Theme**: Harnessing AI for a Digital Future

**Date**: February 12-13, 2026

**Venue**: Manav Rachna University, Faridabad, Haryana, India

**Organized by**: School of Engineering, Manav Rachna University
