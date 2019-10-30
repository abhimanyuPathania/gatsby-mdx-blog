const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Query all markdown posts
  const result = await graphql(`
    {
      posts: allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while building pages.`);
    return;
  }

  const postDetailPageTemplate = path.resolve(
    `src/templates/PostDetailPage/index.js`
  );

  result.data.posts.edges.forEach(({ node }) => {
    const {
      frontmatter: { slug },
    } = node;
    createPage({
      path: slug,
      component: postDetailPageTemplate,
      // In the post detail template's graphql query, use slug
      // as a GraphQL variable to query for the Markdown file.
      context: {
        slug,
      },
    });
  });
};
