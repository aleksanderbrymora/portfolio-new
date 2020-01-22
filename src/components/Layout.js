import React from 'react';

import Navigation from './Navigation';
import Footer from './Footer';
import Contact from './Contact';

import layoutStyle from '../styles/layout.module.sass';
import SEO from './seo';

export default props => (
  <div className={layoutStyle.container}>
    <SEO />
    <div className={layoutStyle.content}>
      <Navigation />
      {props.children}
    </div>
    <Contact />
    <Footer />
  </div>
);
