// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { motion } from 'framer-motion';

const Header = () => {
  const { t } = useTranslation();
  // CAMBIO: Hook de estado para detectar el scroll
  const [scrolled, setScrolled] = useState(false);

  // CAMBIO: Efecto para añadir y quitar el listener del scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      // CAMBIO: Las clases de fondo ahora son condicionales
      className={`fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-cream/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`font-display text-3xl transition-colors ${scrolled ? 'text-accent' : 'text-white drop-shadow-lg'}`}>
        Laura Garriga
      </div>
      <nav className="flex items-center gap-6">
        {/* CAMBIO: Color de texto condicional */}
        <a href="#about" className={`hover:text-accent transition-colors ${scrolled ? 'text-stone' : 'text-white drop-shadow-md'}`}>{t('nav_about')}</a>
        <a href="#portfolio" className={`hover:text-accent transition-colors ${scrolled ? 'text-stone' : 'text-white drop-shadow-md'}`}>{t('nav_portfolio')}</a>
        <a href="#contact" className={`hover:text-accent transition-colors ${scrolled ? 'text-stone' : 'text-white drop-shadow-md'}`}>{t('nav_contact')}</a>
        <LanguageSwitcher />
      </nav>
    </motion.header>
  );
};

export default Header;