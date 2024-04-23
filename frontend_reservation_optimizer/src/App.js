import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Sidebar from './components/Sidebar';
import LoginPage from './views/LoginPage';
import UserPage from './views/AdminPage/UserPage';
import ParameterPage from './views/AdminPage/ParameterPage';
import MyMeetingsPage from './views/DashboardPage/MyMeetingsPage';
import NewMeetingPage from './views/BookingPage/NewMeeting';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticate, setLoading } from './redux/stateManagement/auth';
import sessionAPI from './redux/services/session';

const drawerWidth = 119;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
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
  const isLoggedIn = useSelector(state => (state.auth.isLoggedIn))
  const dispatch = useDispatch();
  useEffect(() => {
    const asyncall = async () => {
      dispatch(setLoading(true));
      const result = await sessionAPI()
      if (result.success) {
        dispatch(setAuthenticate());
      }

      dispatch(setLoading(false));
    };
    asyncall()
  }, [window.localStorage.getItem('token')])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path='*' element={<LoginPage />} />
      </Routes>
    )
  }
  return (
    <div>
      <button onClick={toggleSidebar}>☰</button>
      <Sidebar open={isSidebarOpen} onClose={toggleSidebar} />
      <Main open={isSidebarOpen}>
        <Routes>
          <Route path="/user" element={<UserPage />} />
          <Route path="/parameter" element={<ParameterPage />} />
          <Route path="/meetings" element={<MyMeetingsPage />} />
          <Route path="/meetings/new" element={<NewMeetingPage />} />
        </Routes>
      </Main>

    </div>

  );
}

export default App;