// src/components/CustomCursor.jsx
import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

// Este es el estado global del cursor, para no pasarlo por props
export const CursorContext = React.createContext({ isHovering: false, setIsHovering: () => {} });

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isHovering } = React.useContext(CursorContext);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  
  // Usamos useSpring para un movimiento más suave y orgánico
  const springConfig = { damping: 25, stiffness: 400, mass: 0.1 };
  const smoothMouseX = useSpring(mousePosition.x, springConfig);
  const smoothMouseY = useSpring(mousePosition.y, springConfig);

  const cursorVariants = {
    default: {
      scale: 1,
      width: 32,
      height: 32,
      backgroundColor: "rgba(229, 107, 111, 0.2)",
    },
    hovering: {
      scale: 2.5,
      width: 60,
      height: 60,
      backgroundColor: "rgba(229, 107, 111, 0.4)",
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      style={{
        translateX: smoothMouseX,
        translateY: smoothMouseY,
        x: "-50%",
        y: "-50%",
        filter: 'blur(10px)'
      }}
      variants={cursorVariants}
      animate={isHovering ? "hovering" : "default"}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
};