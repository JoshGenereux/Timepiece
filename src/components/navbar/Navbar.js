import React from 'react';
import styles from './navbar.module.scss';
import axios from 'axios';

export default function Navbar() {
  const handleClick = () => {
    axios
      .get('http://localhost:5432/api/search')
      .then((res) => {
        console.log(res.data.watch);
        const watch = res.data.watch;
        return { watch };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <div className={styles.timepiece} onClick={handleClick}>
          TimePiece
        </div>
        <div className={styles.link}>Mens</div>
        <div className={styles.link}>Womens</div>
        <div className={styles.link}>Sports</div>
        <div className={styles.link}>Dress</div>
      </div>
    </div>
  );
}
