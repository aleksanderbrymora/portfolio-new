const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'ContentfulProject') {
    console.log('slug:', node.slug);
    createNodeField({
      node,
      name: 'slug',
      value: node.slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve('./src/templates/project.js');
  const res = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  res.data.allContentfulProject.edges.map(edge => {
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};
