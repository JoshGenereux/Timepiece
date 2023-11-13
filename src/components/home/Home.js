import React, { useState, useEffect } from 'react';
import styles from './home.module.scss';
import Landing from '../landing/Landing';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import axios from 'axios';

export default function Home() {
  const [showLanding, setShowLading] = useState(true);
  const [watches, setWatches] = useState([]);

  async function fetchAllWatches() {
    try {
      const watches = await axios
        .get('http://localhost:5432/api/all')
        .then((res) => {
          const brands = res.data.brands;
          setWatches([...brands]);
        })
        .catch((err) => {
          console.log(err);
        });
      return watches;
    } catch (error) {
      console.log(error);
    }
  }
  fetchAllWatches();

  return (
    <div className={styles.home}>
      <Header />
      {/* <Navbar /> */}
      {/* {showLanding && <Landing />} */}
      <div></div>
    </div>
  );
}
