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
      'white': '#FFF',
      'green': '#5ED5A8',
      'green-hover': '#00E890',
      'red': '#DD4B4B',
      'gray': '#F1F4F6',
    },
  },
  plugins: [],
}
