import React, { useState, useCallback } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';
import style from '../styles/projects.module.sass';
import Project from '../components/Project';
import SEO from '../components/Seo';

export default () => {
  const data = useStaticQuery(
    graphql`
      query projects {
        allContentfulProject(sort: { fields: created, order: DESC }) {
          edges {
            node {
              createdAt(formatString: "MMMM YYYY")
              description {
                json
              }
              hostedAt
              github
              slug
              title
              projectShowcase {
                fluid(maxHeight: 400) {
                  src
                }
              }
              featured
              technologies {
                file {
                  url
                }
                title
              }
            }
          }
        }
      }
    `
  );

  const featured = data.allContentfulProject.edges.find(
    edge => edge.node.featured
  );
  const all = data.allContentfulProject.edges;
  const [active, setActive] = useState(featured.node);

  const projectChange = useCallback(
    slug => {
      const newProject = all.find(edge => edge.node.slug === slug);
      setActive(newProject.node);
    },
    [all]
  );

  return (
    <Layout>
      <SEO title={'Projects'} description={'A showcase of projects'} />
      <Head title={'Projects'} />
      <div className={style.projects}>
        <div>
          {all.map(edge => (
            <div
              key={edge.node.slug}
              className={style.titles}
              onClick={() => projectChange(edge.node.slug)}
              onKeyDown={() => projectChange(edge.node.slug)}
              role="button"
              tabIndex="0"
            >
              <p className={style.indicator}>
                {active.slug === edge.node.slug ? '♦' : ''}
              </p>
              <div>
                <p
                  className={
                    style.text +
                    ' ' +
                    (active.slug === edge.node.slug ? style.activeTitle : '')
                  }
                >
                  {edge.node.title}
                </p>
                {edge.node.technologies ? (
                  <div className={style.showcaseProject}>
                    {edge.node.technologies.map(tech => (
                      <img
                        className={style.showcaseProjectIcon}
                        alt={tech.title}
                        src={tech.file.url}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <Project {...active} />
      </div>
    </Layout>
  );
};
