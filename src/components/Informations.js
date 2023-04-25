import React from "react";
import djalps5 from '../assets/pictures/djalps5.jpeg';

function Informations() {
  return (
    <div className="home-outer top-to-bottom-colorflow">
      <div className="row-container-center flex sm:flex-col md:flex-row">
        <div className="col-span-12 md:col-span-6 flex">
          <div className="home-picture-container">
            <img className="picture-home" src={djalps5} alt="djalps5" />
          </div>
        </div>
        <div className="sm:col-span-12 md:col-span-6 items-center">
          <div className="home-text-container">
            <h1 className="large-bold-white">Informationen</h1>
            <p className="bold-white">
              Mein Traum ist es, meine lebenslange Leidenschaft,
              <br />
              elektronische Musik mit anderen zu teilen und zu fühlen :)
            </p>
            <br />
            <p className="bold-white">
              Ich konnte bereits bei einigen privaten Events, Partys und Jobs verschiedenster Art meine Fähigkeiten als DJ verbessern.
              <br />
              Am liebsten lege ich melodische elektronische Musik auf, bin allerdings flexibel.
              <br />
              Falls du fragen zu meiner Person oder meinen Leistungen hast melde dich gerne bei mir.
            </p>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Informations;
