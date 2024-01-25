import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import LoginPage from './views/LoginPage'; 
import UserPage from './views/AdminPage/UserPage'; 
import ParameterPage from './views/AdminPage/ParameterPage'; 
import MyMeetingsPage from './views/DashboardPage/MyMeetingsPage'; 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
          {isLoggedIn && <button onClick={toggleSidebar}>☰</button>}
          {isLoggedIn && <Sidebar open={isSidebarOpen} onClose={toggleSidebar} />}
    <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/user" element={<UserPage/>} />
        <Route path="/parameter" element={<ParameterPage/>} />
        <Route path="/meetings" element={<MyMeetingsPage/>} />
      </Routes>
  </div>
    
  );
}

export default App;