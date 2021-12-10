import React from 'react';
import Logo from '../../atoms/logo/logo';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrap">
        <Logo />
        <div className="footer__description">
          <h3>Nuestra Oficina</h3>
          <ul>
            <li>Dirección</li>
            <li>Teléfono</li>
            <li>Correo</li>
          </ul>
        </div>
        <div className="footer__description">
          <h3>Información</h3>
          <ul>
            <li>Sobre Nosotros</li>
            <li>Contáctenos</li>
            <li>Políticas de Privacidad</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
