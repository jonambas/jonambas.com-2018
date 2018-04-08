import React from 'react';
import Link from 'gatsby-link'
import styles from './UnstyledLink.module.scss';

const UnstyledLink = ({
  children,
  external,
  to,
  ...rest
 }) => {

  if (external) {
    return <a href={to} className={styles.UnstyledLink} {...rest}> {children}</a>
  }

  return <Link to={to} className={styles.UnstyledLink} {...rest}>{ children }</Link>
};

export default UnstyledLink;