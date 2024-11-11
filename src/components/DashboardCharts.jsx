import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const DashboardCharts = () => {
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

  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Client Data Visualization</h2>

      {/* Bar Chart */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Clients Joined Over Time</h3>
        <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
      </div>

      {/* Pie Chart */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Client Status Breakdown</h3>
        <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default DashboardCharts;
