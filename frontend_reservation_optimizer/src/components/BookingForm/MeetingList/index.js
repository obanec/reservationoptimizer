import React from 'react';
import {Alert, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import './style.css';
import { useSelector } from 'react-redux';

const MeetingList = () => {
  
  const {meeting:meetings , error } = useSelector(state => state.meeting);
  
  return ( <> 
      { error && <Alert style={{marginTop: 30}} severity='error'> {error}</Alert>}
      <TableContainer className="parameter-list-container" component={Paper}>
      <Table>
        <TableHead >
          <TableRow className='table-header'>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Start</TableCell>
            <TableCell>End</TableCell>
            <TableCell>Zoom Room</TableCell>
            <TableCell>Participants</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meetings.map((meeting) => (
            <TableRow className='parameter-row' key={meeting.id}>
              <TableCell>{meeting._id}</TableCell>
              <TableCell>{meeting.title}</TableCell>
              <TableCell>{meeting.startTime}</TableCell>
              <TableCell>{meeting.endTime}</TableCell>
              <TableCell>{meeting.zoomRoomId}</TableCell>
              <TableCell>{meeting.participants}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  
  );
};

export default MeetingList;
