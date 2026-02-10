# Schedule Setup Guide

## Database Tables

The schedule system uses two new tables:

### 1. `schedule_events`
Stores all schedule items - registration, ceremonies, breaks, technical sessions, talks, etc.

### 2. `session_papers`  
Stores individual papers within technical sessions, linked to their parent event.

## Setup Instructions

### Step 1: Create Tables
Run the schema SQL in your Supabase SQL Editor:
```
backend/schedule-schema.sql
```

### Step 2: Insert Data
Run the data SQL in your Supabase SQL Editor:
```
backend/schedule-data.sql
```

### Important Notes
- Run `schedule-schema.sql` **FIRST** (creates tables + RLS policies)
- Run `schedule-data.sql` **SECOND** (inserts all event + paper data)
- The schema includes RLS policies for public read access
- Total: 42 schedule events + ~170 session papers across 2 days

## Data Structure

### Day 1 (Feb 12, 2026)
- Registration, Inaugural Ceremony, High Tea
- Technical Session I (10 rooms, ~56 papers)
- Lunch Break
- Technical Session II (9 rooms, ~59 papers)
- Tea Break, Industry Talk, Cultural Event + Gala Dinner

### Day 2 (Feb 13, 2026)
- Registration, Plenary Session, High Tea
- Technical Session III (9 rooms, ~55 papers)
- Lunch Break, Valedictory Session, High Tea, Certificate Distribution
