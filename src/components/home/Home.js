import React, { useState, useEffect } from 'react';
import styles from './home.module.scss';
import Landing from '../landing/Landing';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setWatches } from '../../redux/watches';

export default function Home() {
  const data = useSelector((state) => state.allWatches);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  async function fetchAllWatches() {
    try {
      const watches = await axios
        .get('http://localhost:5432/api/all')
        .then((res) => {
          const brands = res.data.brands;
          dispatch(setWatches([...brands]));
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
  console.log(count);

  return (
    <div className={styles.home}>
      <Header />
      {/* <Navbar /> */}
      {/* {showLanding && <Landing />} */}
      <div></div>
    </div>
  );
}
