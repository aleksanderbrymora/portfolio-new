import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import footerStyle from '../styles/footer.module.sass';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulMetadata {
        footer
        builtWith {
          file {
            url
            fileName
          }
        }
      }
    }
  `);

  return (
    <footer className={footerStyle.footer}>
      <p>{data.contentfulMetadata.footer}</p>
      <div className={footerStyle.small}>
        <small>
          Proudly built with
          {data.contentfulMetadata.builtWith.map(logo => (
            <img
              src={`https:${logo.file.url}`}
              alt={logo.file.fileName.split('.')[0]}
              key={logo.file.fileName.split('.')[0]}
            ></img>
          ))}
        </small>
      </div>
    </footer>
  );
};
