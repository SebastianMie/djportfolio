import React from 'react';
import pic from '../assets/pictures/tatto4.png';

function Home() {
  return (
    <div className="home-outer">
      <div className="row-container">
      <div className="col-span-6 flex items-center">
        <img className="picture-standard" src={pic} alt="pic" />
      </div>
      <div className="col-span-6 flex items-top">
        <h1 className="large-bold-white">Willkommen zu meinem Dj Portfolio!</h1>
        <br></br>
        <p className="bold-white">Hier findest du alle Informationen über mich, UNTIL DJ.</p>
      </div>
    </div>
    </div>
  );
}

export default Home;