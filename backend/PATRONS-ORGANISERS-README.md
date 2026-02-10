# PATRONS AND ORGANIZING COMMITTEE SETUP - ICASS 2026

This folder contains SQL scripts to set up and populate the patrons and organizing committee tables for ICASS 2026.

## 📋 Overview

### Patrons Table
Stores conference patrons and top-level chairs including:
- Chief Patrons
- Patrons
- General Chair
- Conference Chair
- Executive Chairs

### Organisers Table
Stores detailed organizing committee members organized by committees (12 committees total).

## 📦 Files Included

### 1. `patrons-chairs-data.sql`
Updates the patrons table with:
- 2 Chief Patrons
- 4 Patrons
- 1 General Chair
- 1 Conference Chair
- 3 Executive Chairs
**Total: 11 entries**

### 2. `organisers-committee-data.sql`
Contains INSERT statements for all 80 organizing committee members across 12 committees:
- Conference Oversight Committee (4 members)
- Registration Committee (5 members)
- Finance Committee (5 members)
- Publication Committee (14 members)
- Logistic Committee (7 members)
- Website and Social Media Committee (8 members)
- Hospitality/Accommodation/Transport Committee (7 members)
- Industry Collaboration and Sponsorship Committee (3 members)
- Stage Handling, Cultural and Decoration Committee (15 members)
- Technical Report and Content Writing Committee (5 members)
- Graphics and Printing Committee (5 members)
- IT and Audio Visual Committee (2 members)

### 3. `COMPLETE-PATRONS-ORGANISERS-SETUP.sql`
All-in-one file that combines patrons and organizers data insertion.
Use this for quick setup in a single step.

## 🚀 Installation

### Option 1: Quick Setup (Recommended)
Execute the complete setup file in one go:

```sql
-- Run this single file in Supabase SQL Editor
\i COMPLETE-PATRONS-ORGANISERS-SETUP.sql
```

### Option 2: Step-by-Step Setup
Execute files in this order:

**Step 1:** Insert patrons
```sql
-- Inserts 11 patrons and top-level chairs
\i patrons-chairs-data.sql
```

**Step 2:** Insert organizing committee
```sql
-- Inserts 80 committee members
\i organisers-committee-data.sql
```

## 📊 Data Summary

### Patrons Summary (11 total)
- **Chief Patrons (2):**
  - Dr. Prashant Bhalla (Hon'ble Chancellor, MRU)
  - Dr. Amit Bhalla (Hon'ble Vice President, MREI)

- **Patrons (4):**
  - Prof. (Dr.) Deependra Kumar Jha (Hon'ble Vice Chancellor)
  - Prof. (Dr.) Sangita Banga (Pro-Vice-Chancellor)
  - Prof. (Dr.) Shruti Vashist (Dean Academics)
  - Shri. Ramesh Nair (Registrar)

- **General Chair (1):**
  - Prof. (Dr.) Dipali Bansal (Dean, SoE)

- **Conference Chair (1):**
  - Prof. (Dr.) Manpreet Kaur (Director E-Learning)

- **Executive Chairs (3):**
  - Prof. (Dr.) Jyotsna Pandit (Dean & HOD Sciences)
  - Prof. (Dr.) Deepa Arora (Director QAA)
  - Prof. (Dr.) Meena Kapahi (Director International Relations)

### Organizing Committee Summary (80 total)

| Committee Name | Member Count |
|---|---|
| Conference Oversight Committee | 4 |
| Registration Committee | 5 |
| Finance Committee | 5 |
| Publication Committee | 14 |
| Logistic Committee | 7 |
| Website and Social Media Committee | 8 |
| Hospitality/Accommodation/Transport Committee | 7 |
| Industry Collaboration and Sponsorship Committee | 3 |
| Stage Handling, Cultural and Decoration Committee | 15 |
| Technical Report and Content Writing Committee | 5 |
| Graphics and Printing Committee | 5 |
| IT and Audio Visual Committee | 2 |
| **TOTAL** | **80** |

## ✅ Verification

After installation, run these queries to verify:

### Check total counts
```sql
SELECT 'Patrons' as table_name, COUNT(*) as total FROM public.patrons
UNION ALL
SELECT 'Organisers' as table_name, COUNT(*) as total FROM public.organisers;
-- Expected: 11 patrons, 80 organisers
```

### View all patrons by category
```sql
SELECT 
    category,
    name,
    title,
    organization
FROM public.patrons
ORDER BY order_index;
```

### Count patrons by category
```sql
SELECT 
    category,
    COUNT(*) as count
FROM public.patrons
GROUP BY category
ORDER BY MIN(order_index);
```

### View all organisers by committee
```sql
SELECT 
    role as committee,
    name,
    organization
FROM public.organisers
ORDER BY order_index;
```

### Count organisers by committee
```sql
SELECT 
    role as committee,
    COUNT(*) as member_count
FROM public.organisers
GROUP BY role
ORDER BY MIN(order_index);
```

### Find specific committee members
```sql
-- Example: Find all Registration Committee members
SELECT 
    name,
    organization
FROM public.organisers
WHERE role = 'Registration Committee'
ORDER BY order_index;
```

## 🔍 Schema Details

### Patrons Table Structure
```sql
CREATE TABLE public.patrons (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    title TEXT,                          -- Job title/designation
    organization TEXT,
    category TEXT NOT NULL,              -- Chief Patron, Patron, General Chair, etc.
    image_url TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

### Organisers Table Structure
```sql
CREATE TABLE public.organisers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,                  -- Committee name
    organization TEXT,
    email TEXT,
    phone TEXT,
    image_url TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

## 🛠️ Troubleshooting

### Issue: Duplicate entries
If you need to clear existing data before re-running:
```sql
-- Clear patrons
DELETE FROM public.patrons;

-- Clear organisers
DELETE FROM public.organisers;

-- Then run the setup scripts again
```

### Issue: Missing indexes
Indexes should exist from the main schema file. If not:
```sql
-- Patrons indexes
CREATE INDEX IF NOT EXISTS patrons_name_idx ON public.patrons(name);
CREATE INDEX IF NOT EXISTS patrons_category_idx ON public.patrons(category);
CREATE INDEX IF NOT EXISTS patrons_order_idx ON public.patrons(order_index);

-- Organisers indexes
CREATE INDEX IF NOT EXISTS organisers_name_idx ON public.organisers(name);
CREATE INDEX IF NOT EXISTS organisers_role_idx ON public.organisers(role);
CREATE INDEX IF NOT EXISTS organisers_order_idx ON public.organisers(order_index);
```

## 📱 Frontend Integration

### Displaying Patrons
```typescript
// frontend/src/app/icass-2026/patrons/page.tsx

import { createClient } from '@/lib/supabase';

interface Patron {
  id: string;
  name: string;
  title: string;
  organization: string;
  category: string;
}

export default async function PatronsPage() {
  const supabase = createClient();
  
  const { data: patrons } = await supabase
    .from('patrons')
    .select('*')
    .order('order_index');

  // Group by category
  const groupedPatrons = patrons?.reduce((acc, patron) => {
    if (!acc[patron.category]) {
      acc[patron.category] = [];
    }
    acc[patron.category].push(patron);
    return acc;
  }, {} as Record<string, Patron[]>);

  return (
    <div>
      {Object.entries(groupedPatrons || {}).map(([category, members]) => (
        <section key={category}>
          <h2>{category}</h2>
          {members.map(patron => (
            <div key={patron.id}>
              <h3>{patron.name}</h3>
              <p>{patron.title}</p>
              <p>{patron.organization}</p>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
```

### Displaying Organizing Committee
```typescript
// frontend/src/app/icass-2026/organisers/page.tsx

import { createClient } from '@/lib/supabase';

interface Organiser {
  id: string;
  name: string;
  role: string;
  organization: string;
}

export default async function OrganisersPage() {
  const supabase = createClient();
  
  const { data: organisers } = await supabase
    .from('organisers')
    .select('*')
    .order('order_index');

  // Group by committee (role)
  const groupedCommittees = organisers?.reduce((acc, org) => {
    if (!acc[org.role]) {
      acc[org.role] = [];
    }
    acc[org.role].push(org);
    return acc;
  }, {} as Record<string, Organiser[]>);

  return (
    <div>
      <h1>Organizing Committee</h1>
      {Object.entries(groupedCommittees || {}).map(([committee, members]) => (
        <section key={committee}>
          <h2>{committee}</h2>
          <ul>
            {members.map(member => (
              <li key={member.id}>
                <strong>{member.name}</strong> - {member.organization}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
```

## 📝 Notes

- **ORDER_INDEX**: Used for maintaining specific display order within each category/committee
- **ROLE vs CATEGORY**: 
  - Patrons use `category` field (Chief Patron, Patron, General Chair, etc.)
  - Organisers use `role` field (Committee names)
- **IEEE Members**: Conference Oversight Committee members have IEEE-specific designations
- **Duplicate Names**: Some members appear in multiple committees (e.g., Dr. Bhanu Pratap Chaudhary)

## 🔐 Security

- Row Level Security (RLS) is enabled on both tables
- Public read access is granted via policy
- Email and phone fields are available in organisers table for internal contact

## 📧 Committee Breakdown

### Conference Oversight Committee (4 members)
IEEE Delhi Section representatives providing conference oversight.

### Registration Committee (5 members)
Handles participant registration and coordination.

### Finance Committee (5 members)
Manages conference finances and budgeting.

### Publication Committee (14 members)
Largest committee - handles paper publication, proceedings, and documentation.

### Logistic Committee (7 members)
Manages venue, logistics, and on-site arrangements.

### Website and Social Media Committee (8 members)
Manages online presence, website, and social media outreach.

### Hospitality/Accommodation/Transport Committee (7 members)
Handles guest accommodation, hospitality, and transportation.

### Industry Collaboration and Sponsorship Committee (3 members)
Manages industry partnerships and sponsorships.

### Stage Handling, Cultural and Decoration Committee (15 members)
Second largest committee - manages stage setup, cultural events, and venue decoration.

### Technical Report and Content Writing Committee (5 members)
Handles technical reports and conference content writing.

### Graphics and Printing Committee (5 members)
Manages design, graphics, and printing materials.

### IT and Audio Visual Committee (2 members)
Handles technical infrastructure and AV equipment.

---

**Last Updated:** February 10, 2026
**Total Patrons:** 11
**Total Organizers:** 80 (across 12 committees)
**Conference:** ICASS 2026
