import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostList from '../components/PostList';

export const query = graphql`
  {
    posts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "Do MMMM, YYYY")
            slug
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;

const HomePage = props => {
  const {
    data: {
      posts: { edges: posts },
    },
  } = props;

  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
};

export default HomePage;
