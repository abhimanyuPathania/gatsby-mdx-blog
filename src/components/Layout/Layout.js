import React from 'react';

import SiteMetadata from '../SiteMetadata';

import styles from './styles.module.css';

const Layout = ({ children }) => {
  return (
    <main className={styles.root}>
      <SiteMetadata />
      {children}
    </main>
  );
};

export default Layout;
