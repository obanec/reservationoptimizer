import React from 'react';
import { TextField, Button, Dialog, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import './style.css';

const CreateMeetingModal = ({ open, onClose, handleChange, handleCreateMeeting }) => {
  const newMeeting = useSelector(state => state.meeting.form)

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box className="modal-content">
        <h2 id="modal-title">Create new Meeting</h2>
        <TextField
          name="title"
          value={newMeeting.title}
          onChange={handleChange}
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          name="description"
          value={newMeeting.description}
          onChange={handleChange}
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          name="startTime"
          type='datetime-local'
          value={newMeeting.startTime}
          onChange={handleChange}
          label="Start Time"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          name="endTime"
          type='datetime-local'
          value={newMeeting.endTime}
          onChange={handleChange}
          label="End Time"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          name="zoomRoomId"
          value={newMeeting.zoomRoomId}
          onChange={handleChange}
          label="Zoom Room ID"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          name="organizerUserId"
          value={newMeeting.organizerUserId}
          onChange={handleChange}
          label="Organizer User ID"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          name="participants"
          value={newMeeting.participants}
          onChange={handleChange}
          label="Participants"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button className='button' onClick={handleCreateMeeting}>
          Create
        </Button>
      </Box>
    </Dialog>
  );
};

export default CreateMeetingModal;
