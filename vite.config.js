// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Añade esta línea. Reemplaza 'portfolio-laura-garriga' con el nombre de tu repositorio.
  base: '/portfolio-laura-garriga/',
})