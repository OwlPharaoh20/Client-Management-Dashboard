import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const AddClientForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('Active');
  const [message, setMessage] = useState('');

  // Function to handle adding a client
  const handleAddClient = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any previous messages

    try {
      console.log('Adding client...'); // Debugging statement

      // Adding document to Firestore
      const docRef = await addDoc(collection(db, 'clients'), {
        name,
        email,
        phone,
        status,
      });

      console.log('Client added with ID:', docRef.id); // Debugging statement

      setMessage('Client added successfully!');
      
      // Clear form fields
      setName('');
      setEmail('');
      setPhone('');
      setStatus('Active');
    } catch (err) {
      console.error('Error adding client:', err);
      setMessage('Error adding client: ' + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add Client</h2>
      {message && <p className={message.includes('Error') ? 'text-red-500' : 'text-green-500'}>{message}</p>}
      <form onSubmit={handleAddClient} className="space-y-4">
        <input
          type="text"
          placeholder="Client Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="email"
          placeholder="Client Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="tel"
          placeholder="Client Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 w-full mb-4 rounded"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Add Client
        </button>
      </form>
    </div>
  );
};

export default AddClientForm;
