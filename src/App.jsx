import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute'; // Custom private route
import ProfilePage from './pages/ProfilePage'; // Import ProfilePage


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
              // Wrap the Home component with PrivateRoute to protect it
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/profile" element={<ProfilePage />} /> 
          {/* More routes to be added here */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};


export default App;