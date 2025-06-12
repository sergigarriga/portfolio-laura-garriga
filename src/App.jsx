// src/App.jsx

import React from 'react';
// CAMBIO: Importamos 'motion' además de 'useScroll'
import { motion, useScroll } from 'framer-motion';
import { ArtThread } from './components/ArtThread';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Awards from './components/Awards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    // CAMBIO: El div principal ahora es un motion.div para asegurar la conexión con useScroll
    <motion.div className="bg-cream text-stone font-sans">
      <ArtThread scrollYProgress={scrollYProgress} />
      
      <div className="relative z-10">
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
    </motion.div>
  );
}

export default App;