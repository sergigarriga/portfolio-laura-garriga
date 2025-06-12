import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const Header = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroller = document.querySelector('.overflow-y-auto');
    const handleScroll = () => {
      if (scroller) {
        setScrolled(scroller.scrollTop > 50);
      }
    };
    if (scroller) scroller.addEventListener('scroll', handleScroll);
    return () => {
      if (scroller) scroller.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-cream/80 dark:bg-navy-dark/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`font-display text-3xl transition-colors ${scrolled ? 'text-accent' : 'text-white drop-shadow-lg'}`}>
        Laura Garriga
      </div>
      <nav className="flex items-center gap-2 md:gap-4">
        <a href="#about" aria-label={t('nav_about')} className={`transition-colors text-sm md:text-base hover:text-accent dark:hover:text-accent ${scrolled ? 'text-stone dark:text-cream' : 'text-white drop-shadow-md'}`}>{t('nav_about')}</a>
        <a href="#portfolio" aria-label={t('nav_portfolio')} className={`transition-colors text-sm md:text-base hover:text-accent dark:hover:text-accent ${scrolled ? 'text-stone dark:text-cream' : 'text-white drop-shadow-md'}`}>{t('nav_portfolio')}</a>
        <a href="#contact" aria-label={t('nav_contact')} className={`transition-colors text-sm md:text-base hover:text-accent dark:hover:text-accent ${scrolled ? 'text-stone dark:text-cream' : 'text-white drop-shadow-md'}`}>{t('nav_contact')}</a>
        
        {/* --- NUEVO: Botón de Descargar CV --- */}
        <a 
          href="/CV-Laura-Garriga.pdf" // Asegúrate de que este nombre coincide con tu archivo en la carpeta 'public'
          download
          className="ml-2 text-sm md:text-base font-semibold border-2 rounded-full px-4 py-1 transition-all duration-300
                     border-accent text-accent hover:bg-accent hover:text-white
                     dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-navy-dark"
        >
          CV
        </a>
        
        <div className="h-6 w-px bg-stone/30 dark:bg-cream/30 mx-2"></div>
        
        <LanguageSwitcher />
        <ThemeToggle />
      </nav>
    </motion.header>
  );
};

export default Header;