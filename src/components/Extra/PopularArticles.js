import React from 'react';
import Article from './Article';

const PopularArticles = () => (
  <div className="col-eight md-six tab-full popular">
    <h3>Popular Articles</h3>

    <div className="block-1-2 block-m-full popular__posts">
      <Article />
      <article className="col-block popular__post">
        <a href="#0" className="popular__thumb">
          <img src="images/thumbs/small/shutterbug-150.jpg" alt="" />
        </a>
        <h5><a href="#0">Key Benefits Of Family Photography.</a></h5>
        <section className="popular__meta">
          <span className="popular__author">
            <span>By</span>
            {' '}
            <a href="#0"> John Doe</a>
          </span>
          <span className="popular__date">
            <span>on</span>
            {' '}
            <time dateTime="2017-12-18">Dec 18, 2017</time>
          </span>
        </section>
      </article>
      <article className="col-block popular__post">
        <a href="#0" className="popular__thumb">
          <img src="images/thumbs/small/cookies-150.jpg" alt="" />
        </a>
        <h5><a href="#0">Absolutely No Sugar Oatmeal Cookies.</a></h5>
        <section className="popular__meta">
          <span className="popular__author">
            <span>By</span>
            {' '}
            <a href="#0"> John Doe</a>
          </span>
          <span className="popular__date">
            <span>on</span>
            {' '}
            <time dateTime="2017-12-16">Dec 16, 2017</time>
          </span>
        </section>
      </article>
      <article className="col-block popular__post">
        <a href="#0" className="popular__thumb">
          <img src="images/thumbs/small/beetle-150.jpg" alt="" />
        </a>
        <h5><a href="#0">Throwback To The Good Old Days.</a></h5>
        <section className="popular__meta">
          <span className="popular__author">
            <span>By</span>
            {' '}
            <a href="#0"> John Doe</a>
          </span>
          <span className="popular__date">
            <span>on</span>
            {' '}
            <time dateTime="2017-12-16">Dec 16, 2017</time>
          </span>
        </section>
      </article>
      <article className="col-block popular__post">
        <a href="#0" className="popular__thumb">
          <img src="images/thumbs/small/tulips-150.jpg" alt="" />
        </a>
        <h5><a href="#0">10 Interesting Facts About Caffeine.</a></h5>
        <section className="popular__meta">
          <span className="popular__author">
            <span>By</span>
            {' '}
            <a href="#0"> John Doe</a>
          </span>
          <span className="popular__date">
            <span>on</span>
            {' '}
            <time dateTime="2017-12-14">Dec 14, 2017</time>
          </span>
        </section>
      </article>
      <article className="col-block popular__post">
        <a href="#0" className="popular__thumb">
          <img src="images/thumbs/small/salad-150.jpg" alt="" />
        </a>
        <h5><a href="#0">Healthy Mediterranean Salad Recipes</a></h5>
        <section className="popular__meta">
          <span className="popular__author">
            <span>By</span>
            {' '}
            <a href="#0"> John Doe</a>
          </span>
          <span className="popular__date">
            <span>on</span>
            {' '}
            <time dateTime="2017-12-12">Dec 12, 2017</time>
          </span>
        </section>
      </article>
    </div>
  </div>
);

export default PopularArticles;
