import React from 'react';
import Logo from '../../atoms/logo/logo';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <Logo />
      </a>
    </div>
  );
};

export default Header;
