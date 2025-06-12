import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../data/portfolioData';
import PortfolioModal from './PortfolioModal';
import { PortfolioCard } from './PortfolioCard';
import AnimatedTitle from './AnimatedTitle';
import { CursorContext } from './CustomCursor';

const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const { setIsHovering } = useContext(CursorContext);

  return (
    <section id="portfolio" className="py-24 px-4 container mx-auto relative z-10">
      <AnimatedTitle 
          text="Proyectos"
          className="font-display text-7xl lg:text-8xl text-center mb-4"
      />
      <p className="text-center text-stone-light dark:text-cream/70 max-w-2xl mx-auto mb-16">
        Cada proyecto es un mundo nuevo. Aquí te muestro algunos de los universos que he tenido el placer de crear, desde el concepto inicial hasta la animación final.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 group">
        {portfolioData.map((project, index) => (
          <div 
            key={project.id} 
            className="transition-all duration-500 group-hover:scale-[0.97] group-hover:opacity-60 hover:!scale-105 hover:!opacity-100"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <PortfolioCard
              project={project}
              index={index}
              t={t}
              onCardClick={setSelectedProject}
            />
          </div>
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