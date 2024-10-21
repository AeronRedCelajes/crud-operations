import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import { motion } from 'framer-motion';
import Navbar from './Navbar'; // Adjust this if Navbar is also in a folder
import Login from './Login/Login'; // Adjusted import
import Register from './Register/Register'; // Adjusted import
import Account from './Account/Account'; // Adjusted import
import Admin from './Admin/Admin'; // Adjusted import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<Navigate to="/login" />} // Redirect from root to login
        />
        <Route 
          path="/login" // Updated to lowercase for consistency
          element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Login />
            </motion.div>
          } 
        />
        <Route 
          path="/register" // Updated the path
          element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Register />
            </motion.div>
          } 
        />
        <Route 
          path="/account" 
          element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Account />
            </motion.div>
          } 
        />
        <Route 
          path="/admin" 
          element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Admin />
            </motion.div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;