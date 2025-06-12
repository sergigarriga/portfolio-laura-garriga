// src/main.jsx

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import './i18n';
import { HelmetProvider } from 'react-helmet-async';

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* <-- ENVUELVE TODO */}
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>
);