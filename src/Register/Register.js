import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register.css'; // Keep this for your styling

function Register() {
  const [emailError, setEmailError] = useState('');
  const [confirmEmailError, setConfirmEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleEmailChange = () => {
    setEmailError('');
    setConfirmEmailError('');
  };

  const handlePasswordChange = () => {
    setPasswordError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const confirmEmail = event.target.confirmEmail.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    // Clear previous errors
    setEmailError('');
    setConfirmEmailError('');
    setPasswordError('');

    // Email validation
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Email match validation
    if (email !== confirmEmail) {
      setConfirmEmailError('Emails do not match.');
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('NOTE: Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 6 characters long.');
      return;
    }

    // Password match validation
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }

    // If no errors, show success alert and navigate to login page
    alert('Successfully registered!'); // Alert for successful registration
    navigate('/login'); // Navigate to the login page after successful submission
  };

  return (
    <div className="register-container">
      <div className="register-section">
        {/* Logo and Title */}
        <div className="logo-container">
          <img src="/img/logo.png" alt="AnimeGaze Logo" className="logo" />
        </div>
        <h1>Register Account</h1>

        {/* Register Form */}
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <i className="fas fa-user"></i>
            <input type="text" name="username" placeholder="USERNAME" required />
          </div>

          <div className="name-fields">
            <div className="input-container">
              <i className="fas fa-user"></i>
              <input type="text" name="firstname" placeholder="FIRSTNAME" required />
            </div>
            <div className="input-container">
              <i className="fas fa-user"></i>
              <input type="text" name="lastname" placeholder="LASTNAME" required />
            </div>
          </div>

          <div className="input-container">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="EMAIL ADDRESS"
              required
              onChange={handleEmailChange}
            />
            {emailError && <span className="error">{emailError}</span>}
          </div>

          <div className="input-container">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="confirmEmail"
              placeholder="CONFIRM EMAIL ADDRESS"
              required
              onChange={handleEmailChange}
            />
            {confirmEmailError && <span className="error">{confirmEmailError}</span>}
          </div>

          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              required
              onChange={handlePasswordChange}
            />
          </div>
          
          {/* Password Error Message */}
          {passwordError && (
            <>
              <span className="error1">{passwordError}</span>
              <br /> {/* Line break appears only if there's a password error */}
            </>
          )}

          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              name="confirmPassword"
              placeholder="CONFIRM PASSWORD"
              required
              onChange={handlePasswordChange}
            />
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