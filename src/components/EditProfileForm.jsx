import React, { useState } from 'react';
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebaseConfig';

const EditProfileForm = ({ setEditMode }) => {
  const { currentUser } = useAuth();
  const [password, setPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState(''); // Added to store the current password for re-authentication
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleReauthentication = async () => {
    // Re-authenticate the user before updating the profile
    const credential = EmailAuthProvider.credential(currentUser.email, currentPassword);
    try {
      await reauthenticateWithCredential(currentUser, credential);
      return true; // Return true if re-authentication is successful
    } catch (err) {
      setError('Failed to re-authenticate. Please check your current password.');
      return false; // Return false if re-authentication fails
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    try {
      // Re-authenticate before updating the password
      const isReauthenticated = await handleReauthentication();
      if (!isReauthenticated) return;

      // Update password if provided
      if (password) {
        await updatePassword(currentUser, password);
        setSuccess('Password updated successfully');
      }

      setEditMode(false); // Exit edit mode after successful update
    } catch (err) {
      setError('Failed to update profile. ' + err.message);
    }
  };

  return (
    <form onSubmit={handleUpdateProfile} className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      {/* Current Password Field for Re-authentication */}
      <input
        type="password"
        placeholder="Current Password (required for changes)"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        className="border p-2 w-full rounded"
        required
      />

      {/* New Password Field */}
      <input
        type="password"
        placeholder="New Password (optional)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <div className="flex justify-between">
        <button 
          type="button"
          className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
          onClick={() => setEditMode(false)} // Cancel edit mode
        >
          Cancel
        </button>
        <button 
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;
