// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

// --- INICIO DE LA SOLUCIÓN ---
// Vite nos da la ruta base correcta del proyecto a través de esta variable.
// En tu ordenador (local) será "/"
// En GitHub Pages será "/portfolio-laura-garriga/"
const basePath = import.meta.env.BASE_URL;
// --- FIN DE LA SOLUCIÓN ---

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'es', 'ca'],
    fallbackLng: 'es',
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      // --- AQUÍ USAMOS LA RUTA BASE QUE HEMOS CONSTRUIDO ---
      // Esto crea dinámicamente la ruta correcta en cualquier entorno.
      loadPath: `${basePath}locales/{{lng}}/translation.json`,
    },
    // Dejamos Suspense en main.jsx, por lo que esto es un seguro adicional.
    react: { useSuspense: false },
  });

export default i18n;