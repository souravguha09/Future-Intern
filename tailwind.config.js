/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        nikeRed: '#e53935',
        nikeBlack: '#111',
        nikeGray: '#f5f5f5'
      }
    }
  },
  plugins: [],
}