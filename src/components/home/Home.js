import axios from 'axios';
import React, { useEffect, useState } from 'react';

const URL = 'http://localhost:5432';

const Home = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const response = await axios.get(`${URL}/api/all`);
        setWatches(response.data.brands);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWatches();
  }, []);

  const search = () => {
    console.log(watches);
  };

  return (
    <div>
      <div></div>
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Home;
