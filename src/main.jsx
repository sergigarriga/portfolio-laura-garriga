// src/main.jsx

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// 1. Importa el archivo de estilos principal donde se carga Tailwind CSS.
import './styles/index.css';

// 2. Importa la configuración de i18n para que se inicialice.
import './i18n';

// (Opcional) Un componente visualmente agradable para la pantalla de carga.
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh', 
    backgroundColor: '#fbf5e9', // Usa el color de fondo 'cream' de tu tema
    fontFamily: 'Montserrat, sans-serif', // Usa la fuente principal de tu tema
    color: '#4b4237', // Usa el color de texto 'stone'
    fontSize: '1.2rem'
  }}>
    Cargando portfolio...
  </div>
);

// 3. Renderiza la aplicación principal.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 4. Suspense se encarga de mostrar 'fallback' mientras i18n carga las traducciones. */}
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </React.StrictMode>
);