/**
 * Navbar component
 *
 * Serves as the top-level header, displaying user information and providing quick action buttons.
 */

import React from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      console.error('Failed to log out');
    }
  };

  return (
    <div className="w-full h-16 bg-gray-100 flex items-center justify-between p-4 pl-72">
      <div className="text-xl font-bold">Dashboard</div>
      {currentUser && (
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;