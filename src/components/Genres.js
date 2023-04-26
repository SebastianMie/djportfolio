import React from "react";
import djalpshome from '../assets/pictures/tatto_drip.png';

function Genres() {
  return (
    <div className="home-outer top-to-bottom-colorflow">
    <div className="row-container-center flex sm:flex-col md:flex-row">
    <div className="sm:col-span-6 md:col-span-6 lg:col-span-12 flex">
    <div className="home-picture-container">
      <img className="picture-home" src={djalpshome} alt="djalpshome" />
    </div>
    </div>
    <div className="sm:col-span-6 md:col-span-6 lg:col-span-12 items-center">
    <div className="home-picture-container">
    <h1 className="large-bold-white">Meine fav. Musikgenres</h1>
    <br></br>
      <ul className="bold-white">
        <li><h1>DnB</h1> 170-180 BPM</li><li>Charakteristischer Drum und Bass Rythmnus</li>
        <br></br>
        <li><h1>Harderstyles</h1> 150-200+ BPM</li><li>Charakteristische Bass Kicks und melodische Elemente</li>
        <br></br>
        <li><h1>Hardtekk</h1> 170-190 BPM</li><li>Charakteristische kürzere Techno Bass Kicks und melodische Elemente</li>
        <br></br>
        <li><h1>Psytrance</h1> 130-170 BPM</li><li>Charakteristische Psytrance Bass Kicks und melodische Elemente</li>
        <br></br>
        <li><h1>Techno</h1> 130-160 BPM</li><li>Charakteristische Bass Kicks</li>
      </ul>
    </div>
    </div> 
  </div>
  </div>
  );
}

export default Genres;
