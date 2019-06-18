import React from 'react';
import Logo from '../../images/logo.svg';

const HeaderLogo = () => (
  <div className="header__logo">
    <a className="logo" href="index.html">
      <img
        src={Logo}
        alt="Homepage"
      />
    </a>
  </div>
);

export default HeaderLogo;
