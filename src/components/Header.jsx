import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const Header = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Usamos el scroll del div de la app, no de window
      const scroller = document.querySelector('.overflow-y-auto');
      if (scroller) {
        setScrolled(scroller.scrollTop > 50);
      }
    };
    const scroller = document.querySelector('.overflow-y-auto');
    if (scroller) {
        scroller.addEventListener('scroll', handleScroll);
    }
    return () => {
        if (scroller) {
            scroller.removeEventListener('scroll', handleScroll);
        }
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
      <nav className="flex items-center gap-4 md:gap-6 pr-2 md:pr-6">
        <a href="#about" className={`transition-colors hover:text-accent dark:hover:text-accent ${scrolled ? 'text-stone dark:text-cream' : 'text-white drop-shadow-md'}`}>{t('nav_about')}</a>
        <a href="#portfolio" className={`transition-colors hover:text-accent dark:hover:text-accent ${scrolled ? 'text-stone dark:text-cream' : 'text-white drop-shadow-md'}`}>{t('nav_portfolio')}</a>
        <a href="#contact" className={`transition-colors hover:text-accent dark:hover:text-accent ${scrolled ? 'text-stone dark:text-cream' : 'text-white drop-shadow-md'}`}>{t('nav_contact')}</a>
        <LanguageSwitcher />
        <ThemeToggle />
      </nav>
    </motion.header>
  );
};

export default Header;