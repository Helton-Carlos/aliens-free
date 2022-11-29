/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#1B232A',
      'dark': '#161C22',
      'white': '#FFFFFF',
      'green': '#5ED5A8',
      'green-hover': '#00E890',
      'red': '#DD4B4B',
      'gray': '#E3E8ED',
      'gray-medio': '#A9A9A9',
      'gray-full': '#777777',
    },
  },
  plugins: [],
}
