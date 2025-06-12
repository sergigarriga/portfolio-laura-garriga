// src/components/About.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// Crea una carpeta 'images' en 'assets' y pon ahí una foto tuya o una obra que te represente.
import artistImage from '../assets/images/laura-profile.jpg'; 

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-4 container mx-auto overflow-hidden bg-cream">
      <motion.div
        className="grid md:grid-cols-5 gap-16 items-center"
        // La animación hará que el contenido aparezca desde abajo al ser visible
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Columna de la Imagen (ocupa 2 de 5 columnas) */}
        <div className="md:col-span-2 w-full h-auto flex justify-center">
          <img 
            src={artistImage} 
            alt="Retrato de la artista Laura Garriga" 
            className="rounded-lg shadow-xl object-cover w-full max-w-sm aspect-[4/5]" 
          />
        </div>

        {/* Columna del Texto (ocupa 3 de 5 columnas) */}
        <div className="md:col-span-3">
          <h2 className="text-5xl lg:text-6xl font-display text-accent mb-6">
            {t('about_title')}
          </h2>
          <div className="space-y-4 text-base lg:text-lg text-stone/90">
            <p>{t('about_p1')}</p>
            <p>{t('about_p2')}</p>
            <p>{t('about_p3')}</p>
            <p>{t('about_p4')}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;