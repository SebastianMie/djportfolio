import React, { useState } from 'react';
import { FaInfoCircle, FaShieldAlt, FaCog, FaHeart, FaTimes } from 'react-icons/fa'; 

function Footer() {
  const [popup, setPopup] = useState(null); // 'info' oder 'privacy'

  const openPopup = (type) => {
    setPopup(type);
  };

  const closePopup = () => {
    setPopup(null);
  };

  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="row-container">
          <div className="icon-container">
            <FaInfoCircle onClick={() => openPopup('info')} />
          </div>

          <div className="icon-container">
            <FaShieldAlt onClick={() => openPopup('privacy')} />
          </div>

          <div className="icon-container love-container">
            <h3>Made with</h3>
            <FaHeart className="icon" />
            <h3>and React JS</h3>
            <FaCog className="icon spinning" />
          </div>
        </div>
      </footer>

      {popup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <div className="popup-header">
              <FaTimes onClick={closePopup} />
            </div>
            {popup === 'info' && (
              <>
                <h2>Informationen</h2>
                <p>
                  UNTIL DJ<br />
                  Name: Sebastian Mierisch<br />
                </p>
              </>
            )}
            {popup === 'privacy' && (
              <>
                <h2>Datenschutz</h2>
                <p>
                  Wir nehmen den Schutz deiner persönlichen Daten sehr ernst.<br /> 
                  Deine Daten werden ausschließlich für die Email Kontaktaufnahme verarbeitet
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        .footer-container {
          position: relative;
        }

        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .popup-content {
          background: white;
          padding: 20px;
          border-radius: 5px;
          width: 80%;
          max-width: 500px;
          position: relative;
        }

        .popup-header {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }

        .love-container {
          display: flex;
          align-items: center;
          gap: 5px;
        }
      `}</style>
    </div>
  );
}

export default Footer;
