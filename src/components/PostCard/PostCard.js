import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import styles from './styles.module.css';

const PostCard = ({ post }) => {
  const {
    frontmatter: {
      title,
      author,
      slug,
      date,
      image: {
        childImageSharp: { fluid: postImage },
      },
    },
    excerpt,
  } = post;
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image fluid={postImage} />
      </div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          <h6>
            <span>By {author}</span>
            <span> / {date}</span>
          </h6>
          <p>{excerpt}</p>
          <Link to={`/${slug}`} className={styles.link}>
            read more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
