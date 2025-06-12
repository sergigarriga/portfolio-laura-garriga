/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'navy-light': '#809bce', // Un azul suave del cielo de tu imagen
        'cream': '#fbf5e9',      // Un fondo cremoso
        'stone': '#4b4237',      // Texto oscuro pero no negro puro
        'accent': '#e56b6f',      // Un acento rojizo como en tus diseños
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Caveat', 'cursive'], // Fuente artística para títulos
      },
    },
  },
  plugins: [],
};