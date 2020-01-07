import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import navigationStyles from '../styles/navigation.module.sass';
import profile from '../img/profile.jpg';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          logo
        }
      }
    }
  `);

  return (
    <header className={navigationStyles.navigation}>
      <div>
        <Link to={'/'}>
          <h1>{data.site.siteMetadata.logo}</h1>
          <img src={profile} alt="profile picture" />
        </Link>
      </div>
      <nav className={navigationStyles.navLinks}>
        <Link
          to={'/'}
          className={navigationStyles.navItem}
          activeClassName={navigationStyles.activeNavItem}
        >
          Me Me Me
        </Link>
        <Link
          to={'/projects'}
          className={navigationStyles.navItem}
          activeClassName={navigationStyles.activeNavItem}
        >
          Projects
        </Link>
        <Link
          to={'/other'}
          className={navigationStyles.navItem}
          activeClassName={navigationStyles.activeNavItem}
        >
          Other things I do
        </Link>
      </nav>
    </header>
  );
};
