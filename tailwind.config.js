/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#0d2d4f',
        navy2: '#0f3460',
        cream: '#f5f0e8',
        warm: '#c4a882',
        'warm-dark': '#a8896a',
        'orst-green': '#5a7a5a',
        ink: '#1a1612',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
