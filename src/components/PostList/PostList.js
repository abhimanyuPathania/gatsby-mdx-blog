import React from 'react';

import PostCard from '../PostCard';

import styles from './styles.module.css';

const PostList = ({ posts }) => {
  console.log('PostList:', posts);

  return (
    <section className={styles.posts}>
      <h1>john doe</h1>
      <h4>personal blog</h4>
      <div className={styles.center}>
        {posts.map(({ node }, i) => (
          <PostCard post={node} key={i} />
        ))}
      </div>
    </section>
  );
};

export default PostList;
