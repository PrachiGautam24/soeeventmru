/**
 * Convert Google Drive sharing URL to direct image URL
 * Input: https://drive.google.com/file/d/FILE_ID/view
 * Output: https://drive.google.com/uc?export=view&id=FILE_ID
 */
export function convertGoogleDriveUrl(url: string): string {
  if (!url) return url;
  
  // Check if it's a Google Drive URL
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^\/]+)/);
  if (driveMatch) {
    const fileId = driveMatch[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  
  // Return original URL if it's not a Google Drive URL
  return url;
}

/**
 * Get image URL with fallback to initials avatar
 */
export function getImageUrl(imageUrl: string | null, name: string, size: number = 128): string {
  if (!imageUrl) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=${size}&background=1e4ba9&color=fff&bold=true`;
  }
  
  // Convert Google Drive URLs to direct image URLs
  return convertGoogleDriveUrl(imageUrl);
}
