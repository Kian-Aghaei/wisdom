import React from 'react';
import Image from '../../images/thumbs/small/wheel-150.jpg';

const Article = () => (
  <article className="col-block popular__post">
    <a href="#0" className="popular__thumb">
      <img src={Image} alt="" />
    </a>
    <h5><a href="#0">Visiting Theme Parks Improves Your Health.</a></h5>
    <section className="popular__meta">
      <span className="popular__author">
        <span>By</span>
        {' '}
        <a href="#0"> John Doe</a>
      </span>
      <span className="popular__date">
        <span>on</span>
        {' '}
        <time dateTime="2017-12-19">Dec 19, 2017</time>
      </span>
    </section>
  </article>
);

export default Article;
