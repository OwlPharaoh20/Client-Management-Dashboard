import React from 'react';
import { db } from '../firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';

const DeleteClient = ({ id }) => {
  const handleDeleteClient = async () => {
    try {
      await deleteDoc(doc(db, 'clients', id));
      alert('Client deleted successfully!');
    } catch (err) {
      alert('Error deleting client: ' + err.message);
    }
  };

  return (
    <button
      onClick={handleDeleteClient}
      className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
    >
      Delete Client
    </button>
  );
};

export default DeleteClient;
