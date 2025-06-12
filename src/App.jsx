import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

  return (
    <ThemeProvider>
      <CursorContext.Provider value={{ isHovering, setIsHovering }}>
          {/* El div base no necesita clases de color, se aplican en el body via CSS */}
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