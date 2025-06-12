// src/components/Awards.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Importa las imágenes de tus premios y ponlas en la carpeta de assets
import awardFish from '../assets/images/award-fish.jpg';
import awardRey from '../assets/images/award-rey-torre.jpg';

const awardsData = [
  {
    image: awardFish,
    title: 'AWARD IN THE OCEAN OF IDEAS CATEGORY',
    description: 'III "OCEAN OF IDEAS" SUSTAINABLE SHORT FILM COMPETITION',
  },
  {
    image: awardRey,
    title: 'PREMI MILLOR ANIMACIÓ 2D / BEST 2D ANIMATION AWARD',
    description: 'CITM ANIMATION COMPETITION - EL REY DE LA TORRE',
  },
];

const Awards = () => {
  return (
    <section id="awards" className="py-24 bg-navy-light/20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-display text-center mb-12 text-accent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Awards
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {awardsData.map((award, index) => (
            <motion.div 
              key={index}
              className="bg-cream rounded-lg shadow-xl overflow-hidden text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={award.image} alt={award.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-stone text-lg">{award.title}</h3>
                <p className="text-stone/80 text-sm mt-2">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;