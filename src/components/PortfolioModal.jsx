import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DetailSection = ({ title, children }) => (
  <div className="mt-6">
    <h3 className="font-display text-2xl text-accent mb-2">{title}</h3>
    <p className="text-stone-light dark:text-cream/80 whitespace-pre-wrap">{children}</p>
  </div>
);

const PortfolioModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-cream dark:bg-navy-dark text-stone dark:text-cream rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          layoutId={`card-container-${project.id}`}
          transition={{ type: "spring", stiffness: 150, damping: 25 }}
        >
          {project.mediaType === 'video' ? (
            <video src={project.mediaUrl} controls autoPlay muted loop className="w-full rounded-t-lg bg-black" />
          ) : (
            <img src={project.mediaUrl} alt={project.title} className="w-full rounded-t-lg" />
          )}
          <div className="p-6 md:p-10">
            <h2 className="text-4xl font-bold mb-4 animated-gradient-text">{project.title}</h2>
            
            {/* --- NUEVO: Renderizado del estudio de caso --- */}
            {project.challenge && <DetailSection title="El Reto">{project.challenge}</DetailSection>}
            {project.role && <DetailSection title="Mi Rol">{project.role}</DetailSection>}
            
            {project.processImages && project.processImages.length > 0 && (
              <div className="mt-6">
                <h3 className="font-display text-2xl text-accent mb-2">Proceso</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.processImages.map((img, index) => (
                    <img key={index} src={img} alt={`Proceso ${index + 1}`} className="rounded-md object-cover w-full h-full aspect-square" />
                  ))}
                </div>
              </div>
            )}
            
            {project.solution && <DetailSection title="La Solución">{project.solution}</DetailSection>}

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioModal;