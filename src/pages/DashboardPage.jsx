import React from 'react';
import DashboardCharts from '../components/DashboardCharts';

const DashboardPage = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <DashboardCharts /> {/* Renders charts for data visualization */}
    </div>
  );
};

export default DashboardPage;
