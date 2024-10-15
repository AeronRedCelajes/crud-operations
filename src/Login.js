import React from 'react';
import './Login.css';

function App() {
  return (
    <div className="login-container">
      <div className="welcome-section">
        <h1>Welcome to our Page</h1>
      </div>
      <div className="login-section">
        <div className="login-form">
          <div className="icon">
            <i className="fas fa-users"></i>
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
            <button type="submit">LOGIN</button>
          </form>
          <p>Don't have an account?</p>
        </div>
      </div>
    </div>
  );
}

export default App;