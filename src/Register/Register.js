import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // Keep this for your styling

function Register() {
  return (
    <div className="register-container">
      <div className="register-section">
        {/* Logo and Title */}
        <div className="logo-container">
          <img src="/img/logo.png" alt="AnimeGaze Logo" className="logo" />
        </div>
        <h1>Register Account</h1>

        {/* Register Form */}
        <form className="register-form">
          <div className="input-container">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="USERNAME" />
          </div>
          <div className="name-fields">
            <div className="input-container">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="FIRSTNAME" />
            </div>
            <div className="input-container">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="LASTNAME" />
            </div>
          </div>
          <div className="input-container">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="EMAIL ADDRESS" />
          </div>
          <div className="input-container">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="CONFIRM EMAIL ADDRESS" />
          </div>
          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="PASSWORD" />
          </div>
          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="CONFIRM PASSWORD" />
          </div>

          {/* Profile Picture Upload */}
          <div className="upload-section">
            <i className="fas fa-user-circle"></i>
            <p>Upload your Profile Photo</p>
            <input type="file" id="profile-pic" />
          </div>

          {/* Register Button */}
          <button type="submit" className="register-button">REGISTER</button>
        </form>

        {/* Already have an account */}
        <p className="login-text">
          Already have an account? <Link to="/login">Login Here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;