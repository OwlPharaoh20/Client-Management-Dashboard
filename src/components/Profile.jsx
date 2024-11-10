//This component shows the current user’s email.
//It also has a button to switch to edit mode to update profile information.

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import EditProfileForm from './EditProfileForm';

const Profile = () => {
  const { currentUser } = useAuth(); // Access current user data from AuthContext
  const [editMode, setEditMode] = useState(false); // Manage edit mode state

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      
      {editMode ? (
        <EditProfileForm setEditMode={setEditMode} /> // If in edit mode, render the edit form
      ) : (
        <>
          <p className="mb-4"><strong>Email:</strong> {currentUser?.email}</p>
          {/* Add more user information if needed */}
          <button 
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
