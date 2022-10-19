import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Style.css';

const Card = (props) => {
  const {
    id,
    name,
    genreCode,
    year,
    members,
  } = props.band;

  const [details, setDetails] = useState(false);

  const handleShowDetails = () => {
    if (details === false) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };

  return (
    <div className="card mx-4 mb-5" style={{ width: 250, height: 150 }} onClick={handleShowDetails}>
      <div className="card-body">
        <h4 className="card-title title my-4">
          {name}
          -
          {id}
        </h4>
        <p className="card-txt my-2 text-center">{genreCode}</p>

        <div />

        {/* DISPLAY DITAILS */}

        {details === true ? (
          <div className="details card-text" key={id}>
            <div className="mx-4">
              <span>Genre Code: </span>
              {genreCode}
              {' '}
              <br />
              <span>Year : </span>
              {year}
              {' '}
              <br />
              <span>Members :</span>
              {' '}
              {members.map((m) => (
                <div>
                  ★
                  {m.name}
                </div>
              ))}
            </div>
            <button className="mx-3 my-3" type="button" onClick={handleShowDetails}>x</button>
            <Link to="/albums" className="nav-link navbar-text btn">let's go to see the albums</Link>

          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Card;
