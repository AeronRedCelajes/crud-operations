import React from 'react';
import {useLocation } from 'react-router-dom';
import './Navbar.css'; // Make sure to import the correct CSS file

function Navbar() {
  const location = useLocation(); // Get the current location
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="img/logo.png" alt="AnimeGaze Logo" className="logo" />
      </div>
      <h3 className="navbar-title"><strong>AnimeGaze</strong></h3>
      {/* Conditionally render the logout button if on the Account page */}
      {(location.pathname === '/account' || location.pathname === '/admin') && (
          <ul className="navbar-links">
              <li><a href="/login">Log Out</a></li>
          </ul>
      )}
    </nav>
  );
}

export default Navbar;