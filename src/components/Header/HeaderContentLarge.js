import React from 'react';
import PropTypes from 'prop-types';

const HeaderContentLarge = (props) => {
  const {
    image, category, href, date, title, author, authorPage, avatar,
  } = props;
  const divStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className="entry" style={divStyle}>
      <div className="entry__content">
        <span className="entry__category"><a href={href}>{category}</a></span>
        <h1><a href={href} title={title}>{title}</a></h1>
        <div className="entry__info">
          <a href={href} className="entry__profile-pic">
            <img className="avatar" src={avatar} alt="" />
          </a>
          <ul className="entry__meta">
            <li><a href={authorPage}>{author}</a></li>
            <li>{date}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

HeaderContentLarge.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorPage: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default HeaderContentLarge;
