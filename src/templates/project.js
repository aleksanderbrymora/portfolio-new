import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    contentfulProject(fields: { slug: { eq: $slug } }) {
      created(formatString: "MMMM YYYY")
      description {
        json
      }
      github
      hostedAt
      title
      projectShowcase {
        file {
          url
        }
      }
    }
  }
`;

export default props => {
  const data = props.data.contentfulProject;
  return (
    <Layout>
      <h1>{data.title}</h1>
      <h5>{data.created}</h5>
    </Layout>
  );
};
