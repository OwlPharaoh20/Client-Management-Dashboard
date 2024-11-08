/**
 * Sidebar component
 *
 * The Sidebar includes navigation links to various parts of the dashboard.
 * The links include:
 * - Home
 * - Clients
 * - Analytics
 * - Notifications
 * - Profile
 */



import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <h2 className="text-2xl font-bold p-4">Client Dashboard</h2>
      <nav className="mt-10">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/clients">Clients</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/analytics">Analytics</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/notifications">Notifications</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
