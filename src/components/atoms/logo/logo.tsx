import React from 'react';
import logo from '../../../logo.svg';

const Logo = () => {
  return (
    <div className="logo">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;
