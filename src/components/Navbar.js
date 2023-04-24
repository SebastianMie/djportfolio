import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo2 from '../assets/logos/logo_black.png';

function Navbar() {
  let [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
      setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const dropdownItems = [
    { id: 1, label: 'Information', url: '/informations', component: 'Informations', icon: 'faLightEnvelope' },
    { id: 2, label: 'Genres', url: '/genres', component: 'Genres', icon: 'faLightEnvelope' },
    { id: 3, label: 'Kontakt', url: '/contact', component: 'Contact', icon: 'faLightEnvelope' },
  ];

  return (
    <nav className="navbar h-40 rounded-lg">
      <div className="row-container top-to-bottom-colorflow">
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
            <FontAwesomeIcon className="bold-white" icon={faAngleDown} rotation={showModal ? 90 : 0} />
          </button>
        </div>
      </div>
      <div className="rounded row-container" hidden={!showModal}>
      <div className="modal rounded col-span-4 flex items-center" hidden={!showModal}>
      <ul>
          {dropdownItems.map(item => (
            <li key={item.id} className="top-to-bottom-colorflow button-dropdown">
              <Link to={item.url} className="modal-link" onClick={handleModalClose}>
                <span className="modal-icon"><FontAwesomeIcon icon={['faLight', 'faEnvelope']}/></span>
                <span className="bold-white">{item.label}</span>
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
