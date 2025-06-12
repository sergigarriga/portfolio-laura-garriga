// src/components/Hero.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import HeroBackground from '../assets/images/portfolio-cover.jpg'; // <-- Pon aquí tu imagen de portada

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${HeroBackground})` }}>
      <motion.div 
        className="text-center text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-7xl md:text-9xl font-display drop-shadow-lg">{t('hero_title')}</h1>
        <p className="text-5xl md:text-7xl font-display drop-shadow-lg">Laura Garriga</p>
      </motion.div>
    </section>
  );
};

export default Hero;