import React, { useState } from 'react';
import { FaInfoCircle, FaShieldAlt, FaCog, FaHeart } from 'react-icons/fa'; 

function Footer() {
  const [popup, setPopup] = useState(null); // 'info', 'privacy', oder null

  const openPopup = (type) => {
    setPopup(type);
  };

  const closePopup = () => {
    setPopup(null);
  };

  return (
    <footer className="footer">
      <div className="row-container">
        <div className="icon-container">
          <FaInfoCircle onClick={() => openPopup('info')} />
          {popup === 'info' && (
            <div className="popup">
              <p>
                UNTIL DJ<br />
                Name: Sebastian Mierisch<br />
              </p>
              <button onClick={closePopup}>Schließen</button>
            </div>
          )}
        </div>

        <div className="icon-container">
          <FaShieldAlt onClick={() => openPopup('privacy')} />
          {popup === 'privacy' && (
            <div className="popup">
              <p>
                Wir nehmen den Schutz deiner persönlichen Daten sehr ernst.<br /> 
                Deine Daten werden ausschließlich für die Email Kontaktaufnahme verarbeitet
              </p>
              <button onClick={closePopup}>Schließen</button>
            </div>
          )}
        </div>

        <div className="icon-container">
          <h3>Made with</h3>
          <FaHeart className="icon" />
          <h3>and React JS</h3>
          <FaCog className="icon spinning" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
