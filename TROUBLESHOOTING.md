# Troubleshooting Guide - ICASS 2026

## 🔍 Common Issues and Solutions

### Installation Issues

#### ❌ Error: `npm install` fails

**Problem**: Node modules installation errors

**Solutions**:
```bash
# Clear npm cache
npm cache clean --force

# Delete existing modules and reinstall
rm -rf node_modules package-lock.json
npm install

# If still failing, try with legacy peer deps
npm install --legacy-peer-deps
```

#### ❌ Error: "Module not found"

**Problem**: Missing dependencies

**Solution**:
```bash
cd frontend
npm install
```

---

### Development Server Issues

#### ❌ Error: `npm run dev` fails

**Problem**: Port 3000 already in use

**Solutions**:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or run on different port
PORT=3001 npm run dev
```

#### ❌ Error: "Cannot find module 'next'"

**Problem**: Dependencies not installed in correct directory

**Solution**:
```bash
# Make sure you're in the frontend directory
cd frontend
npm install
npm run dev
```

---

### Environment Variables Issues

#### ❌ Error: "supabaseUrl is required"

**Problem**: Missing environment variables

**Solutions**:
1. Check if `.env.local` exists in `frontend` directory
2. Verify environment variable names:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIza...
   ```
3. Restart dev server after adding env vars:
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

#### ❌ Error: Environment variables not working

**Checklist**:
- [ ] File is named `.env.local` (not `.env.local.txt`)
- [ ] File is in `frontend` directory (not root)
- [ ] Variables start with `NEXT_PUBLIC_`
- [ ] No spaces around `=` sign
- [ ] No quotes needed (usually)
- [ ] Server was restarted after changes

---

### Supabase Issues

#### ❌ Error: "Failed to fetch data from Supabase"

**Problem**: Database connection issues

**Solutions**:

1. **Check Supabase URL and Key**:
   ```bash
   # In Supabase Dashboard:
   # Settings → API → Copy Project URL and anon key
   ```

2. **Verify tables exist**:
   - Go to Supabase → Table Editor
   - Check if all tables are created
   - Run schema SQL if missing

3. **Check RLS policies**:
   ```sql
   -- In SQL Editor, verify policies exist
   SELECT * FROM pg_policies;
   
   -- If missing, create them
   CREATE POLICY "Enable read access for all users" 
   ON speakers FOR SELECT USING (true);
   ```

4. **Test connection**:
   ```typescript
   // Add this temporarily to test
   console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
   console.log('Has key:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
   ```

#### ❌ Error: "No data showing in app"

**Problem**: Empty database tables

**Solution**:
```sql
-- Check if data exists
SELECT COUNT(*) FROM speakers;
SELECT COUNT(*) FROM tracks;

-- If zero, insert sample data
-- Use SQL from backend/sample-data-tracks.sql
```

---

### Google Maps Issues

#### ❌ Error: "Google Maps failed to load"

**Solutions**:

1. **Check API key**:
   - Verify key in `.env.local`
   - No extra spaces or quotes

2. **Enable required APIs**:
   - Go to Google Cloud Console
   - Enable "Maps JavaScript API"
   - Enable "Maps Embed API"

3. **Check API restrictions**:
   - Go to Credentials in Google Cloud
   - Edit API key
   - Under "Application restrictions":
     - For development: Choose "None"
     - For production: Add your domain

4. **Check billing**:
   - Maps API requires billing enabled
   - (Free tier is generous - $200/month credit)

#### ❌ Map shows gray/blank

**Problem**: API key restrictions or billing

**Quick test**:
```javascript
// Open browser console and try:
fetch(`https://maps.googleapis.com/maps/api/js?key=YOUR_KEY`)
  .then(r => r.text())
  .then(console.log)
// Should not show error message
```

---

### TypeScript Issues

#### ❌ Error: Type errors during build

**Solutions**:

1. **Check imports**:
   ```typescript
   // Use @/ alias for imports
   import { supabase } from '@/lib/supabase'
   // Not '../lib/supabase'
   ```

2. **Clear Next.js cache**:
   ```bash
   rm -rf .next
   npm run dev
   ```

3. **Verify tsconfig.json**:
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@/*": ["./src/*"]
       }
     }
   }
   ```

---

### Build Issues

#### ❌ Error: Build fails with TypeScript errors

**Solutions**:
```bash
# Check for errors
npm run build

# If type errors, add to next.config.js temporarily:
typescript: {
  ignoreBuildErrors: true,
}

# Better: Fix the actual errors shown
```

#### ❌ Error: "Module parse failed" during build

**Problem**: Usually CSS or import issues

**Solution**:
```bash
# Clear everything and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

---

### Deployment Issues

#### ❌ Vercel deployment fails

**Checklist**:
- [ ] Root directory set to `frontend`
- [ ] Build command is `npm run build`
- [ ] Environment variables added in Vercel dashboard
- [ ] All env vars start with `NEXT_PUBLIC_`

**Check build logs**:
1. Go to Vercel → Your project → Deployments
2. Click on failed deployment
3. View "Building" logs for errors

#### ❌ App works locally but not in production

**Common causes**:

1. **Missing environment variables**:
   - Add in Vercel/Netlify dashboard
   - Redeploy after adding

2. **API URLs hardcoded**:
   ```typescript
   // Wrong
   const url = 'http://localhost:3000'
   
   // Right
   const url = process.env.NEXT_PUBLIC_API_URL || window.location.origin
   ```

3. **Image paths wrong**:
   ```typescript
   // Use Next.js Image component
   import Image from 'next/image'
   ```

---

### Performance Issues

#### ❌ App is slow

**Solutions**:

1. **Check network tab**:
   - Open DevTools → Network
   - Look for slow requests
   - Check response sizes

2. **Optimize images**:
   ```typescript
   // Use Next.js Image
   <Image 
     src="/image.jpg" 
     width={400} 
     height={300}
     loading="lazy"
   />
   ```

3. **Add loading states**:
   ```typescript
   {loading ? (
     <div>Loading...</div>
   ) : (
     <YourComponent />
   )}
   ```

4. **Check Supabase queries**:
   ```typescript
   // Limit results
   .select('*')
   .limit(50)
   
   // Select only needed columns
   .select('id, name, title')
   ```

---

### Mobile Issues

#### ❌ Layout broken on mobile

**Solutions**:

1. **Check viewport meta tag** (in layout.tsx):
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
   ```

2. **Test responsive classes**:
   ```tsx
   // Use Tailwind responsive prefixes
   <div className="w-full md:w-1/2 lg:w-1/3">
   ```

3. **Check max-width**:
   ```tsx
   // Should be max-w-md for mobile-first
   <div className="max-w-md mx-auto">
   ```

#### ❌ Touch events not working

**Solution**:
```css
/* Add to globals.css if needed */
* {
  touch-action: manipulation;
}
```

---

### Data Issues

#### ❌ Speakers/Sessions not showing

**Debug steps**:

1. **Check data in Supabase**:
   - Go to Table Editor
   - Verify data exists
   - Check column names match code

2. **Add console logs**:
   ```typescript
   const { data, error } = await supabase
     .from('speakers')
     .select('*')
   
   console.log('Data:', data)
   console.log('Error:', error)
   ```

3. **Check browser console**:
   - Open DevTools (F12)
   - Look for error messages
   - Check Network tab for failed requests

4. **Verify RLS policies**:
   ```sql
   -- Check policies
   SELECT * FROM pg_policies WHERE tablename = 'speakers';
   
   -- Should have SELECT policy for all users
   ```

---

### Browser-Specific Issues

#### ❌ Works in Chrome but not Safari

**Common causes**:
- Date formatting issues
- CSS features not supported
- JavaScript features need polyfills

**Solutions**:
```typescript
// Use compatible date formatting
new Date(dateString).toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})
```

---

## 🛠️ Debugging Tools

### 1. Browser DevTools
```
F12 or Cmd+Opt+I (Mac)

Tabs to check:
- Console: JavaScript errors
- Network: API requests
- Application: LocalStorage, Cookies
- Elements: HTML/CSS inspection
```

### 2. React DevTools
```bash
# Install browser extension
# Chrome/Edge: React Developer Tools
# Firefox: React Developer Tools
```

### 3. Supabase Dashboard
```
Project → Table Editor → View data
Project → API → Test endpoints
Project → Logs → View errors
```

### 4. Vercel Logs
```
Project → Deployments → Click deployment → Logs
```

---

## 📞 Getting Help

### Before asking for help:

1. ✅ Check error message in console
2. ✅ Search error on Google/Stack Overflow
3. ✅ Review this troubleshooting guide
4. ✅ Check if issue exists in minimal reproduction
5. ✅ Read relevant documentation

### When asking for help, provide:

1. **Error message** (full text)
2. **Code snippet** (relevant part)
3. **Steps to reproduce**
4. **Expected vs actual behavior**
5. **Environment** (OS, Node version, etc.)

### Useful commands for diagnostics:

```bash
# Node version
node --version

# npm version
npm --version

# Check if port is in use
lsof -i :3000

# Environment variables (sanitized)
env | grep NEXT_PUBLIC

# Build logs
npm run build 2>&1 | tee build.log
```

---

## ✅ Quick Fixes Checklist

When something isn't working:

- [ ] Restart dev server
- [ ] Clear browser cache (Cmd+Shift+R)
- [ ] Check `.env.local` exists and is correct
- [ ] Verify in correct directory (`frontend/`)
- [ ] Check browser console for errors
- [ ] Verify Supabase connection
- [ ] Check if data exists in database
- [ ] Review recent code changes
- [ ] Try in incognito/private window
- [ ] Clear Next.js cache (`rm -rf .next`)

---

**Still stuck? Check the main [README.md](./README.md) or [PROJECT-SUMMARY.md](./PROJECT-SUMMARY.md) for more information!**
