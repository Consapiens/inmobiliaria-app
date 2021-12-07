import React from 'react';
import Logo from '../../atoms/logo/logo';
import Nav from '../../molecules/nav/nav';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
