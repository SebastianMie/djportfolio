import React, { useState } from 'react';
import { faAngleDown, faInfoCircle, faMusic, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo2 from '../assets/logos/logo_black1.png';
import { Link } from 'react-scroll';

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(!showModal);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <nav className="navbar h-40 rounded-lg">
      <div className="row-container justify-center">
        <div className="col-span-6 flex items-center justify-center">
          <Link
                to="home"
                smooth="true"
                duration={500}
                offset={-70}
                className="modal-link"
                onClick={handleModalClose}
              >
                <img className="logo-standard" src={logo2} alt="logo2" />
          </Link>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <button onClick={() => handleModalOpen()} className={`button-dropdown ${showModal ? 'open' : ''}`}>
            <FontAwesomeIcon className="bold-white" icon={faAngleDown} rotation={showModal ? 90 : 0} />
          </button>
        </div>
      </div>
      <div className="rounded row-container flex justify-center" hidden={!showModal}>
        <div className="modal rounded col-span-4 flex items-center justify-center bg-black" hidden={!showModal}>
          <ul>
          <li>
              <Link
                to="events"
                smooth="true"
                duration={500}
                offset={-60}
                className="modal-link"
                onClick={handleModalClose}
              >
                <span className="modal-icon">
                  <FontAwesomeIcon icon={faInfoCircle} />
                </span>
                <span className="bold-white">Events</span>
              </Link>
            </li>
            <li>
              <Link
                to="information"
                smooth="true"
                duration={500}
                offset={-60}
                className="modal-link"
                onClick={handleModalClose}
              >
                <span className="modal-icon">
                  <FontAwesomeIcon icon={faInfoCircle} />
                </span>
                <span className="bold-white">Information</span>
              </Link>
            </li>
            <li>
              <Link
                to="genres"
                smooth="true"
                duration={500}
                offset={-60}
                className="modal-link"
                onClick={handleModalClose}
              >
                <span className="modal-icon">
                  <FontAwesomeIcon icon={faMusic} />
                </span>
                <span className="bold-white">Genres</span>
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth="true"
                duration={500}
                offset={-60}
                className="modal-link"
                onClick={handleModalClose}
              >
                <span className="modal-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="bold-white">Kontakt</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
