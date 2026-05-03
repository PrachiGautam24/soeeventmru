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
          DEFAULT: '#1e4ba9', // University Blue
          light: '#4a6fc7',
          dark: '#163a8a',
        },
        secondary: {
          DEFAULT: '#b12a2e', // University Red
          light: '#c74448',
          dark: '#8f2125',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1e4ba9 0%, #4a6fc7 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #b12a2e 0%, #c74448 100%)',
        'gradient-mixed': 'linear-gradient(135deg, #1e4ba9 0%, #b12a2e 100%)',
      },
    },
  },
  plugins: [],
}
export default config
