import React, { useState } from 'react';
import { TextField, Button, Dialog, Box } from '@mui/material';
import './style.css';

const CreateMeetingModal = ({ open, onClose, onCreateMeeting }) => {
  const [newMeeting, setNewMeeting] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    zoomRoomId:'',
    organizerUserId: '',
   });

  const handleCreateMeeting = () => {
    onCreateMeeting(newMeeting);
    setNewMeeting({
      title: '',
      description: '',
      startTime: '',
      endTime: '',
      zoomRoomId:'',
      organizerUserId: '' 
    });
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box className="modal-content">
        <h2 id="modal-title">Create new Meeting</h2>
        <TextField
            name="title"
            value={newMeeting.title}
            onChange={(e) => setNewMeeting({ ...newMeeting, name: e.target.value })}
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name="description"
            value={newMeeting.description}
            onChange={(e) => setNewMeeting({ ...newMeeting, name: e.target.value })}
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name="startTime"
            value={newMeeting.startTime}
            onChange={(e) => setNewMeeting({ ...newMeeting, name: e.target.value })}
            label="Start Time"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name="endTime"
            value={newMeeting.endTime}
            onChange={(e) => setNewMeeting({ ...newMeeting, name: e.target.value })}
            label="End Time"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name="zoomRoomId"
            value={newMeeting.zoomRoomId}
            onChange={(e) => setNewMeeting({ ...newMeeting, name: e.target.value })}
            label="Zoom Room ID"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name="organizerUserId"
            value={newMeeting.organizerUserId}
            onChange={(e) => setNewMeeting({ ...newMeeting, name: e.target.value })}
            label="Organizer User ID"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name="participants"
            value={newMeeting.participants}
            onChange={(e) => setNewMeeting({ ...newMeeting, name: e.target.value })}
            label="Participants"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        <Button className='button' onClick={handleCreateMeeting}>
          Crear
        </Button>
      </Box>
    </Dialog>
  );
};

export default CreateMeetingModal;
