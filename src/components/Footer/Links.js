import React from 'react';

const Links = () => {
  const list = () => {
    const menuItems = ['Home', 'Blog', 'Styles', 'About',
      'Contact', 'Privacy Policy'];
    return menuItems.map(items => <li><a href="#0">{items}</a></li>);
  };
  return (
    <div className="col-two md-four mob-full s-footer__sitelinks">
      <h4>Quick Links</h4>
      <ul className="s-footer__linklist">
        {list()}
      </ul>
    </div>
  );
};

export default Links;
