// src/components/Portfolio.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../data/portfolioData';
import PortfolioModal from './PortfolioModal';
import { PortfolioCard } from './PortfolioCard'; // <-- Importamos la nueva tarjeta

const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-24 px-4 container mx-auto relative z-10">
      <h2 className="font-display text-7xl lg:text-8xl text-center mb-4 text-navy-dark">
        Proyectos
      </h2>
      <p className="text-center text-stone-light max-w-2xl mx-auto mb-16">
        Cada proyecto es un mundo nuevo. Aquí te muestro algunos de los universos que he tenido el placer de crear, desde el concepto inicial hasta la animación final.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {portfolioData.map((project, index) => (
          <PortfolioCard
            key={project.id}
            project={project}
            index={index}
            t={t}
            onCardClick={setSelectedProject}
          />
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