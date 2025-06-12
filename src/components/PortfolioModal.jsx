import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        >
          {project.mediaType === 'video' ? (
            <video src={project.mediaUrl} controls autoPlay muted loop className="w-full rounded-t-lg" />
          ) : (
            <img src={project.mediaUrl} alt={project.title} className="w-full rounded-t-lg" />
          )}
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-stone-light dark:text-cream/80">{project.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioModal;