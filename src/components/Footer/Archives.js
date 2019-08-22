import React from 'react';

const Archives = () => {
  const list = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    const newDate = new Date();
    const dates = [];
    for (let i = 0; i < 6; i += 1) {
      dates.push(
        <li>
          <a href="#0">
            {months[newDate.getMonth() - i]}
            {' '}
            {newDate.getFullYear()}
          </a>
        </li>,
      );
    }
    return dates;
  };
  return (
    <div className="col-two md-four mob-full s-footer__archives">
      <h4>Archives</h4>
      <ul className="s-footer__linklist">
        {list()}
      </ul>
    </div>
  );
};

export default Archives;
