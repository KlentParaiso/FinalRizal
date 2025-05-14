/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'crimson': ['"Crimson Text"', 'serif'],
      },
      colors: {
        parchment: {
          50: '#f9f6ef',
          100: '#f3ecd9',
          200: '#e9ddbb',
          300: '#e0cfa0',
        },
        ink: {
          900: '#3a2c1a', // deep brown
        },
        brick: {
          500: '#a24d3a', // muted red/brick
          600: '#8b3e2c',
        },
        moss: {
          400: '#7a8c4a', // moss green
          500: '#5c6e2f',
        },
        gold: {
          400: '#c9a14a', // gold
          500: '#b08a36',
        },
      },
      boxShadow: {
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};