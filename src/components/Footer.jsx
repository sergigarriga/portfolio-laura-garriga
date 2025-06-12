// src/components/Footer.jsx
import React from 'react';

// Un ícono simple de SVG para Instagram
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"></path>
    </svg>
);


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream py-6 text-center text-stone/70">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <a 
          href="https://www.instagram.com/yune__o/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          <InstagramIcon />
        </a>
        <p>© {currentYear} Laura Garriga. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;