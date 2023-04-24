import React from "react";
import djalpshome from '../assets/pictures/tatto_drip.png';

function Genres() {
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
    <h1 className="large-bold-white">Meine fav. Musikgenres</h1>
    <br></br>
      <ul className="bold-white">
        <li>DnB 170-180 BPM</li><li>Charakteristischer Drum und Bass Rythmnus</li>
        <li>Harderstyles 150-200+ BPM</li><li>Charakteristische Kicks und melodische Elemente</li>
        <li>Hardtekk 170-190 BPM</li><li>Charakteristischer Techno "artige" Kicks und melodische Elemente</li>
        <li>Psytrance 130-170 BPM</li><li>Charakteristischer Kicks und melodische Elementer</li>
        <li>Techno 130-160 BPM</li><li>Charakteristische Kicks</li>
      </ul>
    </div>
    </div> 
  </div>
  </div>
  );
}

export default Genres;
