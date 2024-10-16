import React from 'react';
import './Login.css';

function App() {
  return (
    <div className="login-container">
      <div className="welcome-section">
        {/* Logo near the paragraph */}
        <div className="logo-container">
          <img src="https://media.discordapp.net/attachments/1287821843834863708/1296047734482014229/logo.png?ex=6710de03&is=670f8c83&hm=dc4306930a32fc077b895f8dc01c77579f0c41959161666f21f0ad4383aafc92&=&format=webp&quality=lossless" alt="AnimeGaze Logo" className="logo" />
        </div>
        <h1>AnimeGaze</h1>
        <p>
          Dive into our reviews, character spotlights, and fun recommendations to help you discover your next favorite series. Join our friendly community to share thoughts, swap recommendations, and chat about all things anime. We’re excited to explore this vibrant world with you. Let’s make some unforgettable memories together!
        </p>
      </div>
      <div className="login-section">
        <div className="login-form">
          <div className="icon">
            <img src="https://media.discordapp.net/attachments/1287821843834863708/1296047408052174880/user.png?ex=6710ddb5&is=670f8c35&hm=1588caf9f20b84f4596474decb4ea4a770b3473f9fe35d3a322f732c3158ef5d&=&format=webp&quality=lossless" alt="User Icon" className="user-icon" />
          </div>
          <form>
            <div className="input-container">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="USERNAME" />
            </div>
            <div className="input-container">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="PASSWORD" />
            </div>
            <button type="submit">LOG IN</button>
          </form>
          <p>Don't have an account?</p>
        </div>
      </div>
    </div>
  );
}

export default App;