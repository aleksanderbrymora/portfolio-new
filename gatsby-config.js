const path = require(`path`);
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    logo: 'AB',
    title: 'Aleks Brymora - Portfolio',
    description: 'Hi, Im Aleks and this is my web development portfolio!',
    author: 'Aleks Brymora',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: path.join(__dirname, `src`, `img`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `02g4788riobs`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: `preview.contentful.com`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aleks Brymora - Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#161519`,
        theme_color: `#FFCCCC`,
        display: `standalone`,
        icon: `src/img/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/projects`, `/hobbies`],
      },
    },
  ],
};
