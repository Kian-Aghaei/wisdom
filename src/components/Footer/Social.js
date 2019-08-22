import React from 'react';

const Social = () => {
  const list = () => {
    const items = ['Facebook', 'Instagram', 'Twitter', 'Pinterest',
      'Google+', 'LinkedIn'];
    return items.map(item => <li><a href="#0">{item}</a></li>);
  };
  return (
    <div className="col-two md-four mob-full s-footer__social">
      <h4>Social</h4>
      <ul className="s-footer__linklist">
        {list()}
      </ul>
    </div>
  );
};

export default Social;
