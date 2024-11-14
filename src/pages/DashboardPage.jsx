import React from 'react';
import DashboardCharts from '../components/DashboardCharts';
import NotificationsPanel from '../components/NotificationsPanel';

const DashboardPage = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Notifications Panel */}
        <div className="md:col-span-1">
          <NotificationsPanel />
        </div>

        {/* Dashboard Charts */}
        <div className="md:col-span-2">
          <DashboardCharts />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
