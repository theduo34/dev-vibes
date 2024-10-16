/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dev: {
          50: "#e8e6ff",
          400: "#574cff",
          950: 'rgba(4,12,37,0.98)',
        },
        devBtn: {
          50: '#fff6ed',
          100: '#ffead5',
          200: '#fdc695',
          300: '#fcb175',
          400: '#fa863d',
          500: '#f76518',
          600: '#f76518',
          700: '#c1360d',
          800: '#992b13',
          900: '#7b2613',
          950: '#431007'
        },
      }
    }
  },
  plugins: [],
}

