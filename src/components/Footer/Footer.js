import React from 'react';
import { UnstyledLink } from '../'
import styles from './Footer.module.scss';

const Footer = () => (
  <ul className={styles.Footer}>
    <li className={styles.Item}>
      <UnstyledLink external to='https://github.com/jonambas'>Github</UnstyledLink>
    </li>
    <li className={styles.Item}>
      <UnstyledLink external to='https://dribbble.com/jonambas'>Dribbble</UnstyledLink>
    </li>
    <li className={styles.Item}>
      <UnstyledLink external to='https://twitter.com/jonambas'>@jonambas</UnstyledLink>
    </li>
    <li className={styles.Item}>
      <UnstyledLink external to='http://jonambas.com/mailto:jon@jonambas.com?subject=Hello!'>jon@jonambas.com</UnstyledLink>
    </li>
  </ul>
)

export default Footer;