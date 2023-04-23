import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar h-40 rounded-lg">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex items-center">
            <Link to="/">
              <span className="bold-white rounded-lg">UNTIL DJ</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link to="/genres" className="bold-white rounded-lg">Genres</Link>
              <Link to="/information" className="bold-white rounded-lg">Information</Link>
              <Link to="/music" className="bold-white rounded-lg">Music</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;






