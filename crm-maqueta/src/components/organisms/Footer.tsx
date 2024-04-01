import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 absolute bottom-0 w-full">
      © {new Date().getFullYear()} Genius Perú. Todos los derechos reservados.
    </footer>
  );
};

export default Footer;