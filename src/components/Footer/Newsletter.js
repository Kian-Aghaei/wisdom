import React from 'react';

const Newsletter = () => (
  <div className="col-five md-full end s-footer__subscribe">
    <h4>Our Newsletter</h4>
    <p>
      Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi
      et fuga et enim exercitationem ipsam. Culpa consequatur occaecati.
    </p>
    <div className="subscribe-form">
      <form id="mc-form" className="group">
        <label htmlFor="mc-email" className="subscribe-message">
          <input type="email" value="" name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required="" />
        </label>
        <input type="submit" name="subscribe" value="Send" />
      </form>
    </div>
  </div>
);

export default Newsletter;
