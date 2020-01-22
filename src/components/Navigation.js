import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import navigationStyles from '../styles/navigation.module.sass';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulMetadata {
        profilePicture {
          image {
            fixed(
              resizingBehavior: THUMB
              cropFocus: CENTER
              width: 100
              height: 100
            ) {
              src
            }
          }
        }
      }
    }
  `);

  return (
    <div className={navigationStyles.navigation}>
      <div>
        <Link to={'/'}>
          <img
            src={`https:${data.contentfulMetadata.profilePicture.image.fixed.src}`}
            alt="profile"
          />
        </Link>
      </div>
      <nav className={navigationStyles.navLinks}>
        <Link
          to={'/'}
          className={navigationStyles.navItem}
          activeClassName={navigationStyles.activeNavItem}
        >
          Home
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
          Hobbies
        </Link>
      </nav>
    </div>
  );
};
