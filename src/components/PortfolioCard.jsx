// src/components/PortfolioCard.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function PortfolioCard({ project, index, onCardClick, t }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    // CAMBIO: Añadimos 'transform-style-preserve-3d' para el efecto 3D
    <motion.div
      ref={ref}
      onClick={() => onCardClick(project)}
      layoutId={`card-container-${project.id}`}
      className="relative cursor-pointer group h-96 [transform-style:preserve-3d]"
      // CAMBIO: La animación inicial ahora incluye una rotación 3D
      initial={{ opacity: 0, y: 150, rotateX: -90 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.8,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* El contenido de la tarjeta se mantiene igual */}
      <div className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={project.thumbnail}
            alt={project.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ y: imageY }}
          />
        </div>
        <div className="absolute top-0 right-0 text-[120px] font-bold text-white/20 -translate-y-4 translate-x-4 z-10">
          {String(index + 1).padStart(2, '0')}.
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
          <h3 className="font-bold text-2xl text-white drop-shadow-lg">{project.title}</h3>
          <p className="text-md text-white/80">{t(`category_${project.category}`)}</p>
        </div>
      </div>
    </motion.div>
  );
}