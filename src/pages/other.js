import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHobby {
        description {
          description
        }
        title
        url
        embed {
          embed
        }
      }
    }
  `);

  console.log(data);

  return (
    <Layout>
      <Head title={'Other'} />
      <h1>Hii</h1>
    </Layout>
  );
};
