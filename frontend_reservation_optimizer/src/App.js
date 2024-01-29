import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Sidebar from './components/Sidebar';
import LoginPage from './views/LoginPage'; 
import UserPage from './views/AdminPage/UserPage'; 
import ParameterPage from './views/AdminPage/ParameterPage'; 
import MyMeetingsPage from './views/DashboardPage/MyMeetingsPage'; 
import NewMeetingPage from './views/BookingPage/NewMeeting'; 

const drawerWidth = 119;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })
(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


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
    <Main open= {isSidebarOpen}> 
    <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/user" element={<UserPage/>} />
        <Route path="/parameter" element={<ParameterPage/>} />
        <Route path="/meetings" element={<MyMeetingsPage/>} />
        <Route path="/meetings/new" element={<NewMeetingPage/>} />
      </Routes>
    </Main>
    
  </div>
    
  );
}

export default App;