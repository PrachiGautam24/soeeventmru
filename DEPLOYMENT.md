# Deployment Guide - ICASS 2026 Web App

## 📋 Pre-Deployment Checklist

- [ ] All environment variables are set
- [ ] Database is populated with content
- [ ] App runs without errors locally
- [ ] All pages load correctly
- [ ] Images and assets are optimized
- [ ] Google Maps API key is valid
- [ ] Supabase RLS policies are configured

---

## 🚀 Deploy to Vercel (Recommended - FREE)

Vercel is the easiest way to deploy Next.js apps and offers:
- ✅ Free SSL certificates
- ✅ Automatic deployments from Git
- ✅ Serverless functions
- ✅ Edge network (fast globally)
- ✅ FREE for personal projects

### Step-by-Step Deployment

#### 1. Prepare Your Code

```bash
# Make sure everything works locally
cd frontend
npm run build
npm start
```

Visit `http://localhost:3000` and test all features.

#### 2. Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - ICASS 2026 web app"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/icass-2026-web-app.git
git branch -M main
git push -u origin main
```

#### 3. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "Add New Project"
4. Import your `icass-2026-web-app` repository
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

6. Add Environment Variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_key
   ```

7. Click "Deploy"
8. Wait 2-3 minutes ⏳
9. Your app is live! 🎉

#### 4. Custom Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your domain: `icass2026.manavrachna.edu.in`
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

---

## 🌐 Deploy to Netlify (Alternative)

### Step-by-Step Deployment

#### 1. Build Configuration

Create `netlify.toml` in project root:

```toml
[build]
  base = "frontend"
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
```

#### 2. Deploy

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select your repository
5. Build settings are auto-detected from `netlify.toml`
6. Add environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_key
   ```
7. Click "Deploy site"

---

## 🐳 Deploy with Docker (Advanced)

### Create Dockerfile

Create `frontend/Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run

```bash
cd frontend

# Build image
docker build -t icass-2026 .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL=your_url \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key \
  -e NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key \
  icass-2026
```

---

## 📱 Progressive Web App (PWA) Setup

### Add PWA Support

1. Install dependencies:
```bash
npm install next-pwa
```

2. Update `next.config.js`:
```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // your existing config
})
```

3. Create `public/manifest.json`:
```json
{
  "name": "ICASS 2026",
  "short_name": "ICASS",
  "description": "International Conference on Intelligent Computing",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1E3A8A",
  "theme_color": "#1E3A8A",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

4. Add to `app/layout.tsx`:
```tsx
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#1E3A8A" />
```

---

## 🔒 Security Best Practices

### 1. Environment Variables

✅ **DO:**
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Never commit `.env.local` to Git
- Use different keys for production

❌ **DON'T:**
- Expose API secrets in client-side code
- Use same credentials across environments

### 2. Supabase Security

Enable Row Level Security (RLS) policies:

```sql
-- Already included in schema.md
ALTER TABLE speakers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enable read access for all users" 
  ON speakers FOR SELECT USING (true);
```

### 3. API Keys

- Restrict Google Maps API key to your domain
- Enable only required APIs
- Set usage quotas

---

## 📊 Performance Optimization

### 1. Image Optimization

Use Next.js Image component:

```tsx
import Image from 'next/image'

<Image 
  src="/speaker.jpg"
  width={200}
  height={200}
  alt="Speaker name"
/>
```

### 2. Enable Caching

Supabase queries with caching:

```typescript
const { data } = await supabase
  .from('speakers')
  .select('*')
  .cache(60) // Cache for 60 seconds
```

### 3. Lazy Loading

For heavy components:

```tsx
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Map'), {
  loading: () => <p>Loading map...</p>,
  ssr: false
})
```

---

## 📈 Analytics Setup

### Google Analytics

1. Create GA4 property
2. Get Measurement ID
3. Add to `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 🔄 Continuous Deployment

### GitHub Actions (Auto-deploy on push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 🐛 Debugging Production Issues

### View Logs

**Vercel:**
- Project → Deployments → Click deployment → Function Logs

**Netlify:**
- Site → Deploys → Click deployment → Deploy log

### Common Issues

**1. Environment variables not working**
```
Solution: Rebuild/redeploy after adding env vars
```

**2. 404 on page refresh**
```
Solution: Already handled by Next.js routing
```

**3. API calls failing**
```
Solution: Check CORS settings in Supabase
```

---

## ✅ Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all routes
- [ ] Database queries return data
- [ ] Google Maps loads properly
- [ ] Forms submit successfully
- [ ] Mobile responsive on all devices
- [ ] Performance score > 90 on Lighthouse
- [ ] SSL certificate is active
- [ ] Custom domain configured
- [ ] Analytics tracking works

---

## 📞 Support

If you encounter issues:

1. Check Vercel/Netlify deployment logs
2. Review browser console for errors
3. Verify environment variables
4. Check Supabase connection
5. Test API endpoints

---

**Congratulations! Your ICASS 2026 app is now live! 🎉**
