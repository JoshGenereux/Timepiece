import React, { useState } from 'react';
import styles from './landing.module.scss';

export default function Landing() {
  const [search, setSearch] = useState('');

  return <div className={styles.landing}></div>;
}
