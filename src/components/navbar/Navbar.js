import React from 'react';
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <div className={styles.timepiece}>TimePiece</div>
        <div className={styles.link}>Mens</div>
        <div className={styles.link}>Womens</div>
        <div className={styles.link}>Sports</div>
        <div className={styles.link}>Dress</div>
      </div>
    </div>
  );
}
