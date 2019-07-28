import React from 'react';
import AboutSection from './AboutSection';
import PopularArticles from './PopularArticles';

const Extra = () => (
  <div className="s-extra">
    <div className="row top">
      <PopularArticles />
      <AboutSection />
    </div>
  </div>
);

export default Extra;
