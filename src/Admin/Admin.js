import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'; // Ensure you create this CSS file for styling

function Admin() {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-section">
          <img src="/img/logo.png" alt="AnimeGaze Logo" className="logo" />
          <h2>AnimeGaze Admin</h2>
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/users">Manage Users</Link></li>
          <li><Link to="/admin/reviews">Manage Reviews</Link></li>
          <li><Link to="/admin/analytics">Analytics</Link></li>
        </ul>
        <Link to="/logout" className="logout-btn">Logout</Link>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="admin-header">
          <h1>Admin Dashboard</h1>
        </header>

        {/* Content Section */}
        <div className="admin-stats">
          <div className="stat-card">
            <h3>Users</h3>
            <p>1200</p>
          </div>
          <div className="stat-card">
            <h3>Reviews</h3>
            <p>450</p>
          </div>
          <div className="stat-card">
            <h3>Active Sessions</h3>
            <p>320</p>
          </div>
          <div className="stat-card">
            <h3>Pending Approvals</h3>
            <p>15</p>
          </div>
        </div>

        <div className="table-section">
          <h2>Recent Users</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>bossjose123</td>
                <td>bossjose123@gmail.com</td>
                <td>Active</td>
                <td><button className="edit-btn">Edit</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>animesuperfan</td>
                <td>superfan@anime.com</td>
                <td>Inactive</td>
                <td><button className="edit-btn">Edit</button></td>
              </tr>
              {/* More rows can be added here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;