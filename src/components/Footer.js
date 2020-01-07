import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import footerStyle from '../styles/footer.module.sass'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyle.footer}>
      <p>Created by {data.site.siteMetadata.author}, © 2020</p>
    </footer>
  )
}