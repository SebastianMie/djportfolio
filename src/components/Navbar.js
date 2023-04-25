import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faAngleDown, faInfoCircle, faMusic, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo2 from '../assets/logos/logo_black1.png';

function Navbar() {
  let [showModal, setShowModal] = useState(false);
let [dropdownItemsShown, setDropdownItemsShown] = useState(false);

const handleModalOpen = () => {
  setShowModal(!showModal);

  // Rufe die Dropdown-Elemente verzögert auf
  setTimeout(() => {
    setDropdownItemsShown(true);
  }, 100);
};

const handleModalClose = () => {
  setShowModal(false);
  setDropdownItemsShown(false);
};

const dropdownItems = [
  { id: 1, label: 'Information', url: '/informations', component: 'Informations', icon: faInfoCircle },
  { id: 2, label: 'Genres', url: '/genres', component: 'Genres', icon: faMusic },
  { id: 3, label: 'Kontakt', url: '/contact', component: 'Contact', icon: faEnvelope },
];

return (
    <nav className="navbar h-40 rounded-lg">
      <div className="row-container diagonal-colorflow flex justify-center">
        <div className="col-span-6 flex items-center justify-center">
          <Link to="/">
            <img className="logo-standard" src={logo2} alt="logo2" />
          </Link>
        </div>
        <div className="col-span-5 flex items-center justify-center">
          <Link to="/">
            <span className="large-bold-white">UNTIL DJ</span>
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
      {dropdownItems.map((item, index) => (
      <li key={item.id}>
        {dropdownItemsShown && (
          <div
            className="link-wrapper flex justify-center items-center h-12 w-32 rounded-full bg-gray-700 hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-500 hover:to-gray-700 transform hover:-translate-y-1 hover:scale-140"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Link to={item.url} className="modal-link" onClick={handleModalClose}>
              <span className="modal-icon">
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <span className="bold-white">{item.label}</span>
            </Link>
          </div>
          )}
        </li>
      ))}
    </ul>
  </div>
      </div>
    </nav>
  );
}

export default Navbar;
