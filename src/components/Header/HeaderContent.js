import React from 'react';
import content from '../../data/HeaderContent.json';
import HeaderContentLarge from './HeaderContentLarge';
import HeaderContentSmall from './HeaderContentSmall';

const HeaderContent = () => {
  const headerContentLargeProps = {
    image: content.postDetails.backImage[0],
    category: content.postDetails.category[0],
    href: content.postDetails.href,
    date: content.postDetails.date,
    title: content.postDetails.title[1],
    author: content.userDetails.name[0],
    authorPage: content.userDetails.href,
    avatar: content.userDetails.icon[5],
  };
  return (

    <div className="pageheader-content row">
      <div className="col-full">
        <div className="featured">
          <div className="featured__column featured__column--big">
            <HeaderContentLarge {...headerContentLargeProps} />
          </div>
          <div className="featured__column featured__column--small">
            <HeaderContentSmall />
            <HeaderContentSmall />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderContent;
