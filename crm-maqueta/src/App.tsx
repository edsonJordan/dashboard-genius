
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/organisms/Navbar'; 
import SidebarDashboard from './components/organisms/SidebarDashboard';
import Home from './pages/Home';
import Settings from './pages/Settings';
// ... otras importaciones

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <SidebarDashboard isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1">
          {/* Aquí iría tu contenido principal, que se desplazaría a la derecha cuando el sidebar esté visible */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            {/* Tus otras rutas */}
          </Routes>
        </div>
      </div>
      {/* Resto del código, como Footer si lo tienes */}
    </Router>
  );
};

export default App;
