import React from 'react';

import styles from './styles.module.css';

const Layout = ({ children }) => {
  return <main className={styles.root}>{children}</main>;
};

export default Layout;
