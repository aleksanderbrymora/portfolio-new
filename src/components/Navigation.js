import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby';

import navigationStyles from '../styles/navigation.module.sass';

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
      <h1>
        <Link to={'/'}>
          {data.site.siteMetadata.logo}
        </Link>
      </h1>
      <nav>
        <Link
          to={'/'}
          className={navigationStyles.navItem}
          activeClassName={navigationStyles.activeNavItem}
        >
          Me Me Me</Link>
        <Link
          to={'/projects'}
          className={navigationStyles.navItem}
          activeClassName={navigationStyles.activeNavItem}
        >
          Projects</Link>
        <Link
          to={'/other'}
          className={navigationStyles.navItem}
          activeClassName={navigationStyles.activeNavItem}
        >
          Other things I do</Link>
      </nav>
    </header>
  )
}