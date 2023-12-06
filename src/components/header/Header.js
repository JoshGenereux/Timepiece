import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { storeBrand, storeBrandID } from '../../redux/brandSlice';
import axios from 'axios';

const URL = 'http://localhost:5432';
library.add(faMagnifyingGlass);

const Header = () => {
  const allWatchBrands = useSelector((state) => state.watchBrands.brands);
  const [search, setSearch] = useState('');
  const [currentSearch, setCurrentSearch] = useState([]);
  const currentBrand = useSelector((state) => state.brand.name);
  const dispatch = useDispatch();

  const getBrand = async (brandID) => {
    try {
      const response = await axios.post(`${URL}/api/brand`, 37);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
    const searchArr = [];
    searchArr.push(search.toLowerCase());
    const searchString = searchArr.toString().trim();
    const match = allWatchBrands.filter((watch, i) => {
      const baseName = watch.name.toLowerCase().trim();
      return baseName.startsWith(searchString);
    });
    setCurrentSearch(match);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedName = search;
    if (searchedName && currentSearch.length === 1) {
      dispatch(storeBrand(currentSearch));
      const brandID = currentBrand[0].id;
      console.log(brandID);
      getBrand();
      setCurrentSearch([]);
      setSearch('');
    } else {
      console.log('nope');
    }
  };

  const clickDropDown = (e) => {
    e.preventDefault();
    const clicked = e.target.innerText;
    const findClicked = allWatchBrands.filter((watch) => {
      return clicked.match(watch.name);
    });
    dispatch(storeBrand(findClicked));
    getBrand();
    setSearch('');
    setCurrentSearch([]);
  };

  useEffect(() => {}, [search, currentSearch, allWatchBrands, currentBrand]);

  return (
    <div className={styles.header}>
      <div className={styles.timepiece}>TimePiece</div>
      <div className={styles.formDiv}>
        <form className={styles.form} onSubmit={handleSearch}>
          <button className={styles.search}>
            {<FontAwesomeIcon icon=" fa-magnifying-glass" />}
          </button>
          <input
            onChange={handleInput}
            placeholder="Search Watch Brands"
            className={styles.input}
            type="text"
            value={search}
          ></input>
        </form>
        <div className={styles.dropdownContainer}>
          <ul className={styles.dropdownList}>
            {currentSearch.map((watch, i) => (
              <li
                key={i}
                onClick={clickDropDown}
                className={styles.dropdownItem}
              >
                {watch.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
