/**
 * Navbar component
 *
 * Serves as the top-level header, displaying user information and providing quick action buttons.
 */

import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-gray-100 flex items-center justify-between p-4 pl-72">
      <div className="text-xl font-bold">Dashboard</div>
      <div>
        <button className="mr-4 bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
 