import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} GBStore.com - Todos los derechos reservados</p>
      <p>Desarrollado por TheLabCompany℗</p>
    </footer>
  );
};

export default Footer;
