/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#4F46E5',   // Indigo-600
          slate: '#0F172A',    // Slate-900 (Deep Navy)
          midnight: '#020617', // Midnight-950 (True Dark)
          accent: '#818CF8',   // Indigo-400 (Glow color)
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'slow-float': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
