// src/components/Portfolio.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../data/portfolioData'; // <-- Datos de tus proyectos
import PortfolioModal from './PortfolioModal';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = [...new Set(portfolioData.map(p => p.category))];

  return (
    <section id="portfolio" className="py-20 px-4 container mx-auto">
      <h2 className="text-5xl font-display text-center mb-12 text-accent">{t('portfolio_title')}</h2>
      
      {/* Puedes agregar filtros por categoría aquí si lo deseas */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((project) => (
          <motion.div
            key={project.id}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg group"
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            layoutId={`card-container-${project.id}`}
          >
            <img src={project.thumbnail} alt={project.title} className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="p-4 bg-white">
              <h3 className="font-bold text-xl">{project.title}</h3>
              <p className="text-sm text-gray-600">{t(`category_${project.category}`)}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <PortfolioModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Portfolio;