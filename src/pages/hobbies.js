import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from '../components/Seo';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHobby {
        edges {
          node {
            description {
              json
            }
            embed {
              embed
            }
            title
            url
            id
          }
        }
      }
    }
  `);

  console.log(data);
  console.log(data.allContentfulHobby.edges[0].node.embed.embed);

  return (
    <Layout>
      <SEO title={'Hobbies'} description={'A showcase of projects'} />
      <Head title={'Hobbies'} />
      {data.allContentfulHobby.edges.map(edge => (
        <div key={edge.node.id}>
          <h1>{edge.node.title}</h1>
          <div>{documentToReactComponents(edge.node.description.json)}</div>
          {edge.node.embed ? (
            <div dangerouslySetInnerHTML={{ __html: edge.node.embed.embed }} />
          ) : (
            ''
          )}
        </div>
      ))}
    </Layout>
  );
};
