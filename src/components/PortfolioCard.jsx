// src/components/PortfolioCard.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Este componente recibe los datos de un proyecto y maneja su propia animación
export function PortfolioCard({ project, index, onCardClick, t }) {
  const ref = useRef(null);
  
  // Medimos el scroll SÓLO cuando este elemento pasa por la pantalla
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Empieza cuando entra por abajo, termina cuando sale por arriba
  });

  // Creamos un efecto de parallax para la imagen
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer overflow-hidden rounded-lg shadow-2xl group h-96"
      onClick={() => onCardClick(project)}
      layoutId={`card-container-${project.id}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* La imagen interior se mueve con el scroll, creando el parallax */}
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ y: imageY }}
        />
      </div>
      
      {/* El contenido se mantiene estático, mejorando el efecto de profundidad */}
      <div className="absolute top-0 right-0 text-[120px] font-bold text-white/20 -translate-y-4 translate-x-4 z-10">
        {String(index + 1).padStart(2, '0')}.
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
        <h3 className="font-bold text-2xl text-white drop-shadow-lg">{project.title}</h3>
        <p className="text-md text-white/80">{t(`category_${project.category}`)}</p>
      </div>
    </motion.div>
  );
}