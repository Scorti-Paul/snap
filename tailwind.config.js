/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      almostWhite: 'hsl(0, 0%, 98%)',
      mediumGray: 'hsl(0, 0%, 41%)',
      almostBlack: 'hsl(0, 0%, 8%)',
    },
    extend: {},
  },
  plugins: [],
}