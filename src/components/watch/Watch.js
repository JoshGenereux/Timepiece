import React, { useEffect, useState } from 'react';
import styles from './watch.module.scss';
import { useSelector } from 'react-redux';
import axios from 'axios';

const URL = 'http://localhost:5432';

const Watch = () => {
  const currentBrand = useSelector((state) => state.brand.name);
  const [loading, setLoading] = useState(true);
  const [brand, setBrand] = useState([]);
  const [brandName, setBrandName] = useState('');

  useEffect(() => {
    const getName = async () => {
      try {
        const getBrand = await currentBrand;
        setBrand(getBrand);
        setBrandName(brand[0].name);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getName();
  }, [currentBrand, brand, loading, brandName]);

  return (
    <div className={styles.watch}>
      <div className={styles.left}>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div className={styles.header}>{brandName}</div>
        )}
        <div className={styles.description}></div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Watch;
