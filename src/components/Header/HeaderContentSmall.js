import React from 'react';
import backImage from '../../images/thumbs/featured/featured-leni.jpg';
import avatar from '../../images/avatars/user-06.jpg';

const HeaderContentSmall = () => {
  const divStyle = {
    backgroundImage: `url(${backImage})`,
  };

  const postDetails = {
    category: 'Story',
    href: '#0',
    date: 'July 4, 2019',
    title: 'Beauty versus Evil',
  };

  const userDetails = {
    name: 'Kian',
    href: '#0',
    icon: avatar,
  };

  return (
    <div className="entry" style={divStyle}>
      <div className="entry__content">
        <span className="entry__category"><a href={postDetails.href}>{postDetails.category}</a></span>
        <h1><a href={postDetails.href} title={postDetails.title}>{postDetails.title}</a></h1>
        <div className="entry__info">
          <a href={postDetails.href} className="entry__profile-pic">
            <img className="avatar" src={userDetails.icon} alt="" />
          </a>
          <ul className="entry__meta">
            <li><a href={userDetails.href}>{userDetails.name}</a></li>
            <li>{postDetails.date}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HeaderContentSmall;
