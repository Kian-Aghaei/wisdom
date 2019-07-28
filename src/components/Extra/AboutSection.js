import React from 'react';

const AboutSection = () => (
  <div className="col-four md-six tab-full about">
    <h3>About Our Portal</h3>
    <p>
        Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.
        Pellentesque in ipsum id orci porta dapibus.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        Quisque velit nisi,
        pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
    </p>
    <ul className="about__social">
      <li>
        <a href="#0">
          <i className="fa fa-facebook" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="#0">
          <i className="fa fa-twitter" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="#0">
          <i className="fa fa-instagram" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="#0">
          <i className="fa fa-pinterest" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </div>
);

export default AboutSection;
