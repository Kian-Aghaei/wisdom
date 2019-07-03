import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const SideMenu = () => (
  <Menu>
    <li className="side-menu current-item"><a href="index.html" title="">Home</a></li>
    <li className="side-menu"><a href="#0" title="">Categories</a></li>
    <li className="side-menu"><a href="#0" title="">Blog</a></li>
    <li className="side-menu"><a href="style-guide.html" title="">Styles</a></li>
    <li className="side-menu"><a href="about.html" title="">About</a></li>
    <li className="side-menu"><a href="contact.html" title="">Contact</a></li>
  </Menu>
);
export default SideMenu;
