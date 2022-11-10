/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {fontFamily: {
      'lobster': ['cursive', 'lobster'],
      'manrope': ['sans-serif', 'Manrope']},
  },
  plugins: [],
  }
}