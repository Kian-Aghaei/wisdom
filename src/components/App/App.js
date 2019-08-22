import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import SideMenu from './SideMenu';
import Footer from '../Footer/Footer';
import Extra from '../Extra/Extra';

function App() {
  return (
    <div id="outer-container">
      <SideMenu className="side-menu" htmlClassName="side-class" bodyClassName="side-class" />
      <main id="page-wrap">
        <Header />
        <Content />
        <Extra />
        <Footer />
      </main>
    </div>
  );
}

export default App;
