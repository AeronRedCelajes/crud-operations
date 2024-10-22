import React, { useState } from 'react';
import './Account.css'; // Ensure styling is consistent with other pages

function Account() {
  // State to track edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: 'bossjose123',
    password: '********',
    firstName: 'Jose',
    lastName: 'Rizal',
    email: 'joserizal@gmail.com',
  });

  // Handler to toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Handler to update user details
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="account-container">
      {/* Profile Section */}
      <div className="profile-section">
        <h1>Profile</h1>
        <div className="banner">
          <img src="/img/banner.jpg" alt="Profile Banner" className="banner-img" />
          <div className="profile-details">
            <div className="profile-pic">
              <img src="/img/chiaki.jpg" alt="User Profile" className="profile-img" />
            </div>
            <h2>{userDetails.username}</h2> {/* Username next to the profile picture */}
          </div>
        </div>

          {/* Account Details */}
          <div className="account-details">
            <div className="input-group">
              <label>USERNAME</label>
              <input
                type="text"
                name="username"
                value={userDetails.username}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="input-group">
              <label>PASSWORD</label>
              <input
                type="password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="input-group">
              <label>FIRST NAME</label>
              <input
                type="text"
                name="firstName"
                value={userDetails.firstName}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="input-group">
              <label>LAST NAME</label>
              <input
                type="text"
                name="lastName"
                value={userDetails.lastName}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="input-group">
              <label>EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="delete-profile-btn">Disable</button>
          <button className="edit-profile-btn" onClick={toggleEditMode}>
            {isEditing ? 'Save' : 'Edit Profile'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;