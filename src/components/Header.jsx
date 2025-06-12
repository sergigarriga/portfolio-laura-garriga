// src/components/Header.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { motion } from 'framer-motion';

const Header = () => {
  const { t } = useTranslation();

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center bg-cream/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-display text-2xl text-accent">Laura Garriga</div>
      <nav className="flex items-center gap-6">
        <a href="#about" className="hover:text-accent transition-colors">{t('nav_about')}</a>
        <a href="#portfolio" className="hover:text-accent transition-colors">{t('nav_portfolio')}</a>
        <a href="#contact" className="hover:text-accent transition-colors">{t('nav_contact')}</a>
        <LanguageSwitcher />
      </nav>
    </motion.header>
  );
};

export default Header;