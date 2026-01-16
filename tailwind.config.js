
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eum-bg': '#F0F0EB',
        'eum-dark': '#1C1C1C',
        'eum-accent': '#8E7F70',
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'],
        eng: ['"Syncopate"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
