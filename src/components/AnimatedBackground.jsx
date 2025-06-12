// src/components/AnimatedBackground.jsx
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="relative w-full h-full">
        {/* CAMBIO: Reducimos la duración de la animación de 15s a 10s */}
        <div
          className="absolute w-[400px] h-[400px] bg-accent/30 rounded-full -top-40 -left-40"
          style={{ filter: 'blur(80px)', animation: 'float 10s ease-in-out infinite' }}
        ></div>

        {/* CAMBIO: Reducimos la duración de la animación de 20s a 12s */}
        <div
          className="absolute w-[500px] h-[500px] bg-navy-light/40 rounded-full -bottom-80 -right-20"
          style={{ filter: 'blur(100px)', animation: 'float-reverse 12s ease-in-out infinite' }}
        ></div>

        {/* CAMBIO: Reducimos la duración de la animación de 18s a 9s */}
        <div
          className="absolute w-[350px] h-[350px] bg-navy-dark/30 rounded-full top-1/3 left-1/3"
          style={{ filter: 'blur(90px)', animation: 'float 9s ease-in-out infinite alternate' }}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;