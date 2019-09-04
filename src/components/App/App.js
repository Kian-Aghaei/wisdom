import React from 'react';
import { Header } from '../Header';
import { Content } from '../Content';
import SideMenu from './SideMenu';
import { Footer } from '../Footer';
import { Extra } from '../Extra';

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
