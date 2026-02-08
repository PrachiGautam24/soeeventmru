-- Add image_url column to authors table
ALTER TABLE authors 
ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Add image_url column to organisers table
ALTER TABLE organisers 
ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Add comment for documentation
COMMENT ON COLUMN authors.image_url IS 'URL or path to the author profile image';
COMMENT ON COLUMN organisers.image_url IS 'URL or path to the organiser profile image';
