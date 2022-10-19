/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import './css/Style.css';

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);
  const [bands, setBands] = useState([]);

  useEffect(() => {
    const getAlbums = () => {
      fetch('https://my-json-server.typicode.com/improvein/dev-challenge/albums')
        .then((res) => res.json())
        .then((res) => setAlbums(res));
    };
    getAlbums();
  }, []);

  useEffect(() => {
    const getBands = () => {
      fetch('https://my-json-server.typicode.com/improvein/dev-challenge/bands')
        .then((res) => res.json())
        .then((res) => setBands(res));
    };
    getBands();
  }, []);

  // filtrar bandas

  const [valueInput, setValueInput] = useState(0);

  const onChangeBand = (e) => {
    setValueInput(parseInt(e.target.value));
  };

  let filtered = albums.filter((a) => (a.bandId === valueInput))

  //console.log(Number.isInteger(valueInput))

  return (
    <div className="container mt-3 albums">

      <div>
        <select onChange={onChangeBand} className="title text-black">
          {bands.map((band) => (
            <option value={band.id}>
              {' '}
              {band.name}
              {' '}
            </option>
          ))}

        </select>
      </div>

      <div className="mt-3">
        {filtered.map((f) => (
          <div key={f.id}>
            <p>
              <span>
                ★
                {f.name}
              </span>
              {' '}
              -
              {' '}
              {f.year}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AlbumsPage;
