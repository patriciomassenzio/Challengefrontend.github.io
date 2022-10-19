import React, { useState, useEffect } from 'react';

import Card from './Card';
import './css/Style.css';

const Home = () => {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    const getBands = () => {
      fetch('https://my-json-server.typicode.com/improvein/dev-challenge/bands')
        .then((res) => res.json())
        .then((res) => setBands(res));
    };
    getBands();
  }, []);

  // Filter for gender

  const [inputTerm, setInputTerm] = useState('');

  return (
    <div>
      <div className="searchBar">
        <input type="text" placeholder="SEARCH" className="mt-3 px-2 " onChange={(e) => setInputTerm(e.target.value)} />
      </div>
      <div>
        <h1 className="my-5 title">BANDS</h1>
        <div className="container ">
          <div className="d-flex justify-content-center row mb-3">
            {bands.filter((val) => {
              if (inputTerm === '') {
                return val;
              } if (val.genreCode.toLowerCase().includes(inputTerm.toLowerCase())) {
                return val;
              }
            }).map((band) => (
              <Card
                key={band.name}
                band={band}
              />

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
