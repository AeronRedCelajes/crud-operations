import React from 'react';
import { Link } from 'react-router-dom';
import './Account.css'; // Ensure you create this CSS file for styling

function Account() {
  return (
    <div className="account-container">
      {/* Header Section */}
      <div className="header">
        <div className="logo-section">
          <img src="/img/logo.png" alt="AnimeGaze Logo" className="logo" />
          <h2>AnimeGaze</h2>
        </div>
        <Link to="/logout" className="logout-btn">Logout</Link>
      </div>

      {/* Account Info Section */}
      <div className="account-info">
        <div className="banner">
          <img src="/img/banner.png" alt="Profile Banner" className="banner-img" />
        </div>

        <div className="profile-section">
          <div className="profile-pic">
            <img src="/img/profile-pic.png" alt="User Profile" className="profile-img" />
            <button className="edit-profile-pic">
              <i className="fas fa-pencil-alt"></i>
            </button>
          </div>
          <h2>Jose Rizal</h2>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>

        <div className="account-details">
          <div className="account-fields">
            <div className="field-group">
              <label>USERNAME</label>
              <input type="text" value="bossjose123" disabled />
            </div>
            <div className="field-group">
              <label>EMAIL ADDRESS</label>
              <input type="text" value="joserizal@gmail.com" disabled />
            </div>
          </div>
          <div className="account-fields">
            <div className="field-group">
              <label>PASSWORD</label>
              <input type="password" value="********" disabled />
            </div>
            <div className="field-group">
              <label>FIRST NAME</label>
              <input type="text" value="Jose" disabled />
            </div>
            <div className="field-group">
              <label>LAST NAME</label>
              <input type="text" value="Rizal" disabled />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;