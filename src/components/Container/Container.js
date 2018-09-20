import React from 'react';
import classnames from 'classnames';
import styles from './Container.module.scss';


const Container = ({ children, compact }) => (
  <div className={classnames(styles.Container, compact && styles.Compact)}>
    <div className={styles.Content}>
    { children }
    </div>
  </div>
)

export default Container;