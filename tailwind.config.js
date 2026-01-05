/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E50914',
          dark: '#B20710',
          light: '#ff1f1f',
        },
        dark: {
          bg: '#0F1014', // Very dark blue/black
          card: '#1A1C21',
          hover: '#252830',
        },
        gray: {
          400: '#9CA3AF',
          500: '#6B7280',
          800: '#1F2937',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
