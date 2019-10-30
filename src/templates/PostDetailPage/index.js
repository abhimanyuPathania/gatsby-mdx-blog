import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../../components/Layout';

import styles from './styles.module.css';

const PostDetailPage = props => {
  const {
    data: {
      post: {
        frontmatter: {
          title,
          author,
          date,
          image: {
            childImageSharp: { fluid: postImage },
          },
        },
        body,
      },
    },
  } = props;

  return (
    <Layout>
      <section className={styles.template}>
        <Link className={styles.link} to="/">
          back to all posts
        </Link>
        <div className={styles.info}>
          <h1>{title}</h1>
          <h4>
            <span>By {author}</span>
            <span> / {date}</span>
          </h4>
        </div>
        <Image fluid={postImage} />
        <div className={styles.content}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getPostDetail($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
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
      body
    }
  }
`;

export default PostDetailPage;
