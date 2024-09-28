// apps/customer-portal/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TrackOrder from './pages/TrackOrder';
import Profile from './pages/Profile';
import Support from './pages/Support';
import Navbar from '../../../packages/shared-components/Navbar';

function App() {
  const adminLinks = [
    { path: "/", label: "Home" },
    { path: "/track-order", label: "TrackOrder" },
    { path: "/profile", label: "Profile" },
    { path: "/support", label: "Support" },
  ];

  return (
    <Router>
      <Navbar links={adminLinks} />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Track Order Page */}
        <Route path="/track-order" element={<TrackOrder />} />

        {/* Profile Page */}
        <Route path="/profile" element={<Profile />} />

        {/* Support Page */}
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
