import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const DashboardCharts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for demo purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Example data for Bar Chart
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Number of Clients Joined',
        data: [10, 15, 30, 40, 25],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Example data for Pie Chart
  const pieData = {
    labels: ['Active Clients', 'Inactive Clients', 'Pending Clients'],
    datasets: [
      {
        label: 'Client Status Distribution',
        data: [60, 20, 10],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 205, 86, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  if (isLoading) {
    return <div className="text-center mt-8">Loading Charts...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">Client Data Visualization</h2>

      {/* Bar Chart Section */}
      <div className="mb-10 p-6 bg-gray-50 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-6 text-gray-700">Clients Joined Over Time</h3>
        <div className="h-64">
          <Bar data={barData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="p-6 bg-gray-50 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-6 text-gray-700">Client Status Breakdown</h3>
        <div className="h-64">
          <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
