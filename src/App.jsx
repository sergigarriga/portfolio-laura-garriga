// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Awards from './components/Awards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    // La clase 'bg-cream' y otras deberían funcionar si Tailwind está bien configurado
    <div className="bg-cream text-stone font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Awards />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

// ESTA ES LA LÍNEA MÁS IMPORTANTE PARA SOLUCIONAR EL ERROR
export default App;