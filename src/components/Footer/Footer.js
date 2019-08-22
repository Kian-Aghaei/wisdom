import React from 'react';
import Links from './Links';
import Archives from './Archives';
import Social from './Social';
import Newsletter from './Newsletter';
import FooterBottom from './FooterBottom';

const Footer = () => (
  <footer className="s-footer">
    <div className="s-footer__main">
      <div className="row">
        <Links />
        <Archives />
        <Social />
        <Newsletter />
      </div>
    </div>
    <FooterBottom />
  </footer>
);

export default Footer;
