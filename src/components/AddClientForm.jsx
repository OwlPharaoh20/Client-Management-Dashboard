import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const AddClientForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  // Add the status field to the form
  const [status, setStatus] = useState('Active');

  const handleAddClient = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'clients'), {
        name,
        email,
        phone,
        status, // Add status to the client document
      });
      setMessage('Client added successfully!');
      setName('');
      setEmail('');
      setPhone('');
    } catch (err) {
      setMessage('Error adding client: ' + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
  <h2 className="text-2xl font-bold mb-4">Add Client</h2>
  {message && <p className="text-green-500">{message}</p>}
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
