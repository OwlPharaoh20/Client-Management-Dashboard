import React from 'react';
import { notifications } from '../data/notifications';

const NotificationsPanel = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Notifications</h2>
      
      {notifications.length === 0 ? (
        <p className="text-gray-500 text-center">No new notifications</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification.id} className="p-4 bg-gray-100 rounded shadow">
              <h3 className="text-lg font-semibold">{notification.title}</h3>
              <p className="text-gray-700">{notification.message}</p>
              <p className="text-sm text-gray-500 mt-2">{notification.timestamp}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationsPanel;
