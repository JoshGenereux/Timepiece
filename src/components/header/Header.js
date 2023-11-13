import React from 'react';
import styles from './header.module.scss';
import axios from 'axios';

export default function Header() {
  const handleSearch = (e) => {
    e.preventDefault();

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

    console.log('search');
  };

  return (
    <div className={styles.header}>
      <div className={styles.timepiece}>TimePiece</div>
      <form className={styles.form} onSubmit={handleSearch}>
        <button className={styles.searchButton} type="submit">
          Search
        </button>
        <input className={styles.search}></input>
      </form>
    </div>
  );
}
