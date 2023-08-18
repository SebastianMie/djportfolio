import React, { useState } from 'react';
import { FaInfoCircle, FaShieldAlt, FaCog, FaHeart } from 'react-icons/fa'; 
import { ClockLoader } from 'react-spinners';

function Footer() {
  const [showInfo, setShowInfo] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
    setShowPrivacy(false);
  };

  const togglePrivacy = () => {
    setShowPrivacy(!showPrivacy);
    setShowInfo(false);
  };

  return (
    <footer className="footer">
      <div className="row-container">
      <div className="row-container-center1">
        <h3>Impressum</h3>
        <FaInfoCircle onClick={toggleInfo} />
        {showInfo && (
        <div className="link-content">
          <p>
            UNTIL DJ<br />
            Name: Sebastian Mierisch<br />
          </p>
        </div>
        )}
        </div>

        <div className="row-container-center1">
          <h3>Datenschutzerklärung</h3>
            <FaShieldAlt onClick={togglePrivacy} />
            {showPrivacy && (
              <div className="link-content">
                <p>
                  Wir nehmen den Schutz deiner persönlichen Daten sehr ernst.<br /> 
                  Deine Daten werden ausschließlich für die Email Kontaktaufnahme verarbeitet
                </p>
              </div>
            )}
        </div>
        <div className="row-container-center1">
          <h3>
            Made with 
          </h3>
          <FaHeart className="text-black-600 mx-1" />
          <h3>
           and React JS 
          </h3>
          <FaCog className="text-blue-500 text-4xl ml-2 animate-rotate" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
