import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute'; // Custom private route
import ProfilePage from './pages/ProfilePage'; // Import ProfilePage
import DashboardPage from './pages/DashboardPage'; // Import DashboardPage
import AddClientForm from './components/AddClientForm';
import ClientList from './components/ClientList';
import EditClientForm from './components/EditClientForm';
import NotificationsPanel from './components/NotificationsPanel';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/profile" element={<ProfilePage />} /> 
          <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} /> // Add a new Route for the dashboard page
          <Route path="/clients" element={<ClientList />} />
          <Route path="/add-client" element={<AddClientForm />} />
          <Route path="/edit-client/:id" element={<EditClientForm />} />
          <Route path="/notifications" element={<PrivateRoute><NotificationsPanel /></PrivateRoute>} />
          {/* More routes to be added here */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;