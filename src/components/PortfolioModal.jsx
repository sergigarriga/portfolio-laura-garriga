// src/components/PortfolioModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // Evita que el clic se propague al fondo
          layoutId={`card-container-${project.id}`}
        >
          {project.mediaType === 'video' ? (
            <video src={project.mediaUrl} controls autoPlay className="w-full rounded-t-lg" />
          ) : (
            <img src={project.mediaUrl} alt={project.title} className="w-full rounded-t-lg" />
          )}
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-stone">{project.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioModal;