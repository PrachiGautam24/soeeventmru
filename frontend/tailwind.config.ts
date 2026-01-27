import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // MRU Blue
          light: '#3B82F6',
          dark: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#DC2626', // MRU Red
          light: '#EF4444',
          dark: '#B91C1C',
        },
        accent: {
          yellow: '#F59E0B',
          orange: '#EA580C',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
        'gradient-mixed': 'linear-gradient(135deg, #1E3A8A 0%, #DC2626 100%)',
      },
    },
  },
  plugins: [],
}
export default config
