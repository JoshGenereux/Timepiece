import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBrand } from '../../redux/watchBrandsSlice';

const URL = 'http://localhost:5432';

const Home = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.watchBrands.brands);

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
  }, []);

  const search = () => {
    console.log(brands);
  };

  return (
    <div>
      <div></div>
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Home;
