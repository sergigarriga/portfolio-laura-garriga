// src/components/About.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import artistImage from '../assets/images/laura-profile.jpg'; 

const About = () => {
  const { t } = useTranslation();

  return (
    // CAMBIO: Hemos eliminado la clase 'bg-cream' de aquí.
    <section id="about" className="py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="relative grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Columna de la Imagen */}
          <motion.div 
            className="relative z-10 flex justify-center md:justify-start"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src={artistImage} 
              alt="Retrato de la artista Laura Garriga" 
              className="rounded-lg shadow-2xl object-cover w-full max-w-sm aspect-[4/5] border-8 border-cream" 
            />
          </motion.div>

          {/* Columna del Texto */}
          <div className="md:-ml-16 z-0">
             <motion.div 
                className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
             >
                <h2 className="text-6xl lg:text-7xl font-display text-accent mb-6">
                  {t('about_title')}
                </h2>
                <div className="space-y-4 text-base lg:text-lg text-stone-light">
                  <p>{t('about_p1')}</p>
                  <p>{t('about_p2')}</p>
                  <p>{t('about_p3')}</p>
                  <p>{t('about_p4')}</p>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;