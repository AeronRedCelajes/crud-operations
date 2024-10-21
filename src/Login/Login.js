import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css'; // Keep this for your styling

function Login() {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Check username and password
    if (username === 'Earth' && password === 'Earth') {
      navigate('/admin'); // Redirect to Admin page
    } else {
      navigate('/account'); // Redirect to Account page for incorrect credentials
    }
  };

  return (
    <div className="login-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="logo-container">
          <img src="img/logo.png" alt="AnimeGaze Logo" className="logo" />
        </div>
        <h1>AnimeGaze</h1>
        <p>
          Dive into our reviews, character spotlights, and fun recommendations to help you discover your next favorite series. Join our friendly community to share thoughts, swap recommendations, and chat about all things anime. We’re excited to explore this vibrant world with you. Let’s make some unforgettable memories together!
        </p>
      </div>

      {/* Login Section */}
      <div className="login-section">
        <div className="login-form">
          <div className="icon">
            <img src="/img/user.png" alt="User Icon" className="user-icon" />
          </div>
          <form onSubmit={handleSubmit}> {/* Call handleSubmit on form submission */}
            <div className="input-container">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="USERNAME"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update username state
              />
            </div>
            <div className="input-container">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
              />
            </div>
            <button type="submit" className="login-button">LOG IN</button> {/* No Link here */}
          </form>
          <p className="register-text">
            <Link to="/register">Don't have an account?</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;