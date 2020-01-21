import React from 'react';

import Navigation from './Navigation';
import Footer from './Footer';
import Contact from './Contact';

import layoutStyle from '../styles/layout.module.sass';

export default props => (
  <div className={layoutStyle.container}>
    <div className={layoutStyle.content}>
      <Navigation />
      {props.children}
    </div>
    <Contact />
    <Footer />
  </div>
);
