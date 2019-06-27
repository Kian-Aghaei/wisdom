import React from 'react';
import Header from '../Header/Header';
import SideMenu from './SideMenu';

function App() {
  return (
    <div id="outer-container">
      <SideMenu className="side-menu" htmlClassName="side-class" bodyClassName="side-class" />
      <main id="page-wrap">
        <Header />
      </main>
    </div>
  );
}

export default App;
