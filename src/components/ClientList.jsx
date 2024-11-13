import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  
  // Use navigate to redirect to add-client page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'clients'));
        const clientList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClients(clientList);
      } catch (err) {
        console.error('Error fetching clients:', err);
      }
    };

    fetchClients();
  }, []);

  // Filter clients based on the search query and status filter
  const filteredClients = clients.filter((client) => {
    const matchesSearchQuery = client.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === 'All' ||
      (filterStatus === 'Active' && client.status === 'Active') ||
      (filterStatus === 'Inactive' && client.status === 'Inactive');
    return matchesSearchQuery && matchesStatus;
  });

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Client List</h2>

      {/* Button to Add Client */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate('/add-client')}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Client
        </button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by client name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />

      {/* Filter Dropdown */}
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="border p-2 mb-4 rounded"
      >
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      {/* Client List */}
      <ul className="space-y-4">
        {filteredClients.length > 0 ? (
          filteredClients.map((client) => (
            <li key={client.id} className="p-4 bg-gray-100 rounded shadow">
              <p><strong>Name:</strong> {client.name}</p>
              <p><strong>Email:</strong> {client.email}</p>
              <p><strong>Phone:</strong> {client.phone}</p>
              {client.status && (
                <p>
                  <strong>Status:</strong> {client.status}
                </p>
              )}
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No clients found.</p>
        )}
      </ul>
    </div>
  );
};

export default ClientList;
