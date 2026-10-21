/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      colors: {
        cafe: {
          dark: '#08090a',
          card: '#121417',
          charcoal: '#181b20',
          blue: {
            DEFAULT: '#2563eb',
            glow: '#3b82f6',
            electric: '#0066ff',
            deep: '#1d4ed8'
          },
          amber: {
            DEFAULT: '#f59e0b',
            light: '#fbbf24',
            dark: '#d97706'
          }
        }
      },
      fontFamily: {
        display: ['Anton', 'Oswald', 'Impact', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
