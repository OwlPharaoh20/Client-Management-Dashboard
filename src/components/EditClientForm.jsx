import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const EditClientForm = () => {
  const { id } = useParams(); // Get client ID from route parameters
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const clientRef = doc(db, 'clients', id);
        const clientSnap = await getDoc(clientRef);
        if (clientSnap.exists()) {
          const clientData = clientSnap.data();
          setName(clientData.name);
          setEmail(clientData.email);
          setPhone(clientData.phone);
        } else {
          setMessage('Client not found');
        }
      } catch (err) {
        setMessage('Error fetching client data: ' + err.message);
      }
    };

    fetchClient();
  }, [id]);

  const handleUpdateClient = async (e) => {
    e.preventDefault();
    try {
      const clientRef = doc(db, 'clients', id);
      await updateDoc(clientRef, {
        name,
        email,
        phone,
      });
      setMessage('Client updated successfully!');
    } catch (err) {
      setMessage('Error updating client: ' + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Client</h2>
      {message && <p className="text-green-500">{message}</p>}
      <form onSubmit={handleUpdateClient} className="space-y-4">
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
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Update Client
        </button>
      </form>
    </div>
  );
};

export default EditClientForm;
