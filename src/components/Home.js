import React from 'react';
import djalpshome from '../assets/pictures/djalpshome.jpeg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-outer top-to-bottom-colorflow">
      <div className="row-container-center">
      <div className="col-span-12 flex">
      <div className="home-picture-container">
        <img className="picture-home" src={djalpshome} alt="djalpshome" />
      </div>
      </div>
      <div className="margin-left col-span-12 items-center">
      <div className="home-text-container">
          <h1 className="large-bold-white">Willkommen zu meinem Dj Portfolio!</h1>
          <h1 className="bold-white">Hier findest du alle Informationen über mich, <Link to="/informations">UNTIL DJ.</Link></h1>
      </div>
      </div> 
    </div>
    </div>
  );
}

export default Home;