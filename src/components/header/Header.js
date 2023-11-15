import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faMagnifyingGlass);

const Header = () => {
  const allWatchBrands = useSelector((state) => state.watchBrands.brands);
  const [search, setSearch] = useState('');
  const [currentSearch, setCurrentSearch] = useState([]);

  const handleInput = (e) => {
    setSearch(e.target.value);
    const searchArr = [];
    const letter = search.toLowerCase();
    searchArr.push(letter);
    const searchString = searchArr.toString().trim();
    const match = allWatchBrands.filter((watch, i) => {
      const baseName = watch.name.toLowerCase().trim();
      return baseName.startsWith(searchString);
    });
    setCurrentSearch(match);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    // setSearch('');
    // setCurrentSearch([]);
  };

  const clickDropDown = (e) => {
    e.preventDefault();
    setSearch('');
    setCurrentSearch([]);
  };

  useEffect(() => {
    console.log('inside useEffect');
  }, [search, currentSearch, allWatchBrands]);

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
