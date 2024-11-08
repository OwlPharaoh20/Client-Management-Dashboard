/**
 * Dashboard component
 *
 * Initial dashboard page displaying key performance metrics and important information,
 * including:
 * - Total clients
 * - Upcoming meetings
 * - Other relevant metrics
 */

import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow ml-64">
        <Navbar />
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6">Welcome to the Client Management Dashboard</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Example Dashboard Cards */}
            <div className="p-4 bg-white shadow rounded">
              <h3 className="text-xl font-bold">Total Clients</h3>
              <p className="mt-2 text-3xl">125</p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h3 className="text-xl font-bold">Upcoming Meetings</h3>
              <p className="mt-2 text-3xl">5</p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h3 className="text-xl font-bold">Notifications</h3>
              <p className="mt-2 text-3xl">12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
