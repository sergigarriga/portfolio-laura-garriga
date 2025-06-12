/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilitamos el modo oscuro
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'navy-light': '#809bce',
        'navy-dark': '#3a4a6b', 
        'cream': '#fbf5e9',
        'stone': '#4b4237',
        'stone-light': '#8a7d6e',
        'accent': '#e56b6f',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Caveat', 'cursive'], 
      },
    },
  },
  plugins: [],
};