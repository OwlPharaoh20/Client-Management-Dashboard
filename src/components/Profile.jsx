import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import EditProfileForm from './EditProfileForm';

const Profile = () => {
  const { currentUser } = useAuth(); // Access current user data from AuthContext
  const [editMode, setEditMode] = useState(false); // Manage edit mode state

  return (
    <div className="max-w-3xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">User Profile</h2>
      
      {editMode ? (
        <EditProfileForm setEditMode={setEditMode} /> // If in edit mode, render the edit form
      ) : (
        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="flex justify-center">
            <img 
              src={currentUser?.photoURL || 'https://via.placeholder.com/150'} 
              alt="Profile"
              className="w-32 h-32 rounded-full shadow-md object-cover"
            />
          </div>

          {/* User Information */}
          <div className="text-center">
            <p><strong>Name:</strong> {currentUser?.displayName || 'Not Available'}</p>
            <p><strong>Email Address:</strong> {currentUser?.email}</p>
            <p><strong>Phone Number:</strong> {currentUser?.phoneNumber || 'Not Available'}</p>
            <p><strong>Address:</strong> {currentUser?.address || 'Not Available'}</p>
            <p><strong>Account Status:</strong> {currentUser?.status || 'Active'}</p>
          </div>

          {/* Password Management */}
          <div className="text-center space-y-4">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => alert('Change Password Functionality Not Implemented Yet')}
            >
              Change Password
            </button>
            <button 
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={() => alert('Reset Password Email Sent')}
            >
              Reset Password
            </button>
          </div>

          {/* Edit Profile Button */}
          <div className="text-center mt-6">
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
