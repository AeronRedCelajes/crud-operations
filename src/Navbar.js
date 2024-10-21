import React from 'react';
import './Navbar.css'; // Make sure to import the correct CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="img/logo.png" alt="AnimeGaze Logo" className="logo" />
      </div>
      <h3 className="navbar-title"><strong>AnimeGaze</strong></h3>
      {/*
       <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login">Log In</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
       */}
    </nav>
  );
}

export default Navbar;