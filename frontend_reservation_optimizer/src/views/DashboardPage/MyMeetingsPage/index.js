import React from 'react';
import { Typography, Box } from '@mui/material';
import MyCalendar from '../../../components/Dashboard/MyMeetings';


const MyCalendarView = (props) => (
  <Box> 
    <div > 
    <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
        My meetings
      </Typography>
    </div>
    <div>
      <MyCalendar  /> 
    </div>
  </Box>
)

export default MyCalendarView;