import React from 'react';
import styles from './Container.module.scss';

const Container = ({ children }) => (
  <div className={styles.Container}>
    <div className={styles.Content}>
    { children }
    </div>
  </div>
)

export default Container;