import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const initialUsers = [
    {
      id: 1,
      username: 'bossjose123',
      password: 'segundakatigbak',
      firstName: 'Jose',
      lastName: 'Rizal',
      profilePicture: 'https://i.imgur.com/7UK7A94.png', // Placeholder Image URL
      email: 'joserizal@gmail.com'
    },
    {
      id: 2,
      username: 'moshingxp',
      password: 'malupitonnn',
      firstName: 'Boss',
      lastName: 'Mapagmahal',
      profilePicture: 'https://i.imgur.com/ZfQKMBq.png', // Placeholder Image URL
      email: 'mossing12@gmail.com'
    },
    {
      id: 3,
      username: 'hwedfi20412',
      password: 'abcdef',
      firstName: 'Cha',
      lastName: 'Rizard',
      profilePicture: 'https://i.imgur.com/KYJqtsD.png', // Placeholder Image URL
      email: 'pokemon@gmail.com'
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [editingUserId, setEditingUserId] = useState(null);
  const [newProfilePicture, setNewProfilePicture] = useState({});

  // Handle Edit
  const handleEdit = (id) => {
    setEditingUserId(id);
  };

  // Handle Delete
  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Handle Input Change
  const handleInputChange = (e, id, field) => {
    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return { ...user, [field]: e.target.value };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  // Handle Profile Picture Change
  const handleProfilePictureChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfilePicture(prev => ({ ...prev, [id]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Save Changes
  const handleSave = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          profilePicture: newProfilePicture[id] || user.profilePicture // If a new picture was uploaded, use it
        };
      }
      return user;
    }));
    setEditingUserId(null);
    setNewProfilePicture({});
  };

  // Handle Cancel
  const handleCancel = () => {
    setEditingUserId(null);
    setNewProfilePicture({});
  };

  return (
    <div className="admin-page">
      <table className="admin-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Username</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Profile Picture</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={user.username}
                    onChange={(e) => handleInputChange(e, user.id, 'username')}
                  />
                ) : (
                  user.username
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="password"
                    value={user.password}
                    onChange={(e) => handleInputChange(e, user.id, 'password')}
                  />
                ) : (
                  user.password
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={user.firstName}
                    onChange={(e) => handleInputChange(e, user.id, 'firstName')}
                  />
                ) : (
                  user.firstName
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={user.lastName}
                    onChange={(e) => handleInputChange(e, user.id, 'lastName')}
                  />
                ) : (
                  user.lastName
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <div className="profile-picture-container">
                    <img
                      src={newProfilePicture[user.id] || user.profilePicture}
                      alt="Profile"
                      className="profile-picture"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleProfilePictureChange(e, user.id)}
                    />
                  </div>
                ) : (
                  <img src={user.profilePicture} alt="Profile" className="profile-picture" />
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => handleInputChange(e, user.id, 'email')}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <div>
                    <button className="save-button" onClick={() => handleSave(user.id)}>
                      Save
                    </button>
                    <button className="cancel-button" onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <button className="edit-button" onClick={() => handleEdit(user.id)}>
                      Update
                    </button>
                    <button className="delete-button" onClick={() => handleDelete(user.id)}>
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;