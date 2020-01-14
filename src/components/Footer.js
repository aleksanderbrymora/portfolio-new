import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import footerStyle from '../styles/footer.module.sass';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulMetadata {
        footer
      }
    }
  `);

  return (
    <footer className={footerStyle.footer}>
      <p>{data.contentfulMetadata.footer}</p>
    </footer>
  );
};
