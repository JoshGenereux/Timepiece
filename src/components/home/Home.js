import React, { useState } from 'react';
import styles from './home.module.scss';
import Landing from '../landing/Landing';
import Navbar from '../navbar/Navbar';

export default function Home() {
  const [showLanding, setShowLading] = useState(true);

  return (
    <div className={styles.home}>
      <Navbar />
      {showLanding && <Landing />}
      <div></div>
    </div>
  );
}
