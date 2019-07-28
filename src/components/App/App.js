import React from 'react';
import Header from '../Header/Header';
import SideMenu from './SideMenu';
import Extra from '../Extra/Extra';

function App() {
  return (
    <div id="outer-container">
      <SideMenu className="side-menu" htmlClassName="side-class" bodyClassName="side-class" />
      <main id="page-wrap">
        <Header />
        <Extra />
      </main>
    </div>
  );
}

export default App;
