import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo1 from '../assets/logos/logo_black.png';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <nav className="navbar h-40 rounded-lg">
      <div className="row-container">
        <div className="col-span-6 flex items-center">
            <Link to="/">
            <img className="logo-standard" src={logo1} alt="logo1" />
            </Link>
        </div>
        <div className="col-span-5 flex items-center">
            <Link to="/">
            <span className="large-bold-white">UNTIL DJ</span>
            </Link>
        </div>
        <div className="col-span-1 flex items-center">
          <button onClick={toggleDropdown} className="button-dropdown">
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          {showDropdown && (
          <div className="dropdown">
            <div className="col-span-12 flex">
              <Link to="/informations" className="element-standard mb-2">Information</Link>
            </div>
            <div className="col-span-12 flex">
              <Link to="/genres" className="element-standard mb-2 flex">Genres</Link>
            </div>
            <div className="col-span-12 flex">
              <Link to="/contact" className="element-standard mb-2">Kontakt</Link>
            </div>  
          </div>
        )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;