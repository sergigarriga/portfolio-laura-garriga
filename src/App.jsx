import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // <-- AÑADE IMPORT
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Awards from './components/Awards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import { CustomCursor, CursorContext } from './components/CustomCursor';

function App() {
  const [isHovering, setIsHovering] = useState(false);
  const siteUrl = "https://sergigarriga.github.io/portfolio-laura-garriga/"; // Tu URL final
  const siteTitle = "Laura Garriga | Portfolio de Animación y Arte Digital";
  const siteDescription = "Portfolio de Laura Garriga, artista especializada en animación 2D, diseño de personajes y fondos.";

  return (
    <ThemeProvider>
      <CursorContext.Provider value={{ isHovering, setIsHovering }}>
        {/* --- NUEVO: Metadatos con Helmet --- */}
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:description" content={siteDescription} />
          <meta property="og:image" content={`${siteUrl}og-image.jpg`} />
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={siteUrl} />
          <meta property="twitter:title" content={siteTitle} />
          <meta property="twitter:description" content={siteDescription} />
          <meta property="twitter:image" content={`${siteUrl}og-image.jpg`} />
        </Helmet>
        <div className="w-screen h-screen relative overflow-hidden">
          <CustomCursor />
          <AnimatedBackground />
          <motion.div
            className="font-sans h-full w-full overflow-y-auto absolute top-0 left-0 z-10"
          >
            <div className="w-full">
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
        </div>
      </CursorContext.Provider>
    </ThemeProvider>
  );
}

export default App;