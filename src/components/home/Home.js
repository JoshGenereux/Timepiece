import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBrand } from '../../redux/watchBrandsSlice';
import Header from '../header/Header';
import styles from './home.module.scss';

const URL = 'http://localhost:5432';

const Home = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.watchBrands.brands);
  const currentBrand = useSelector((state) => state.brand.name);

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const response = await axios.get(`${URL}/api/all`);
        response.data.brands.map((watch) => {
          return dispatch(addBrand(watch));
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchWatches();
    console.log(currentBrand);
  }, []);

  useEffect(() => {
    console.log(currentBrand);
  }, [brands, currentBrand]);

  return (
    <div className={styles.home}>
      <Header />
    </div>
  );
};

export default Home;
