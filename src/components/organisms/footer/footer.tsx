import React from 'react';
import Logo from '../../atoms/logo/logo';

const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <h3>Nuestra Oficina</h3>
      <ul>
        <li>Dirección</li>
        <li>Teléfono</li>
        <li>Correo</li>
      </ul>
      <h3>Información</h3>
      <ul>
        <li>Sobre Nosotros</li>
        <li>Contáctenos</li>
        <li>Políticas de Privacidad</li>
      </ul>
    </div>
  );
};

export default Footer;
