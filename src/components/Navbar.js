import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faAngleDown, faInfoCircle, faMusic, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo2 from '../assets/logos/logo_glow.png';

function Navbar() {
  let [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
      setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const dropdownItems = [
    { id: 1, label: 'Information', url: '/informations', component: 'Informations', icon: faInfoCircle },
    { id: 2, label: 'Genres', url: '/genres', component: 'Genres', icon: faMusic },
    { id: 3, label: 'Kontakt', url: '/contact', component: 'Contact', icon: faEnvelope },
  ];

  return (
    <nav className="navbar h-40 rounded-lg">
      <div className="row-container">
        <div className="col-span-6 flex items-center">
          <Link to="/">
            <img className="logo-standard" src={logo2} alt="logo2" />
          </Link>
        </div>
        <div className="col-span-5 flex items-center">
          <Link to="/">
            <span className="large-bold-white">UNTIL DJ</span>
          </Link>
        </div>
        <div className="col-span-1 flex items-center">
          <button onClick={() => handleModalOpen()} className={`button-dropdown ${showModal ? 'open' : ''}`}>
            <FontAwesomeIcon icon={faAngleDown} rotation={showModal ? 90 : 0} />
          </button>
        </div>
      </div>
      <div className="row-container" hidden={!showModal}>
      <div className="modal col-span-4 flex items-center" hidden={!showModal}>
      <ul>
          {dropdownItems.map(item => (
            <li key={item.id} className="button-dropdown">
              <Link to={item.url} className="modal-link" onClick={handleModalClose}>
                <span className="modal-icon"><FontAwesomeIcon icon={item.icon} /></span>
                <span className="modal-text">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
