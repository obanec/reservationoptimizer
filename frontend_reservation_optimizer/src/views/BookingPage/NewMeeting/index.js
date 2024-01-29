import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import MeetingCreate from '../../../components/BookingForm/MeetingCreate';

const MeetingsCreateContainer = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCreateMeeting = (newMeeting) => {
   
    handleCloseModal();
  };

  return (
    <>
      {}
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Create Meeting
      </Button>
      {}
      <MeetingCreate open={openModal} onClose={handleCloseModal} onCreateMeeting={handleCreateMeeting} />
    </>
  );
};


const Meetings = () => {
  const [filter, setFilter] = useState({
    title: 'Test meeting',
    description: 'Test meeting',
    startTime: '2024/01/26 14:00:000T00Z',
    endTime: '2024/01/26 14:00:000T00Z',
    zoomRoomId:'room id',
    organizerUserId: '2',
    participants: []
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

 

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
        Meetings
      </Typography>
      <Box mb={2}>
        <form>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
              <TextField
                name="title"
                value={Meetings.title}
                onChange={handleFilterChange}
                label="Title"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="description"
                value={Meetings.description}
                onChange={handleFilterChange}
                label="Description"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="startTime"
                value={Meetings.startTime}
                onChange={handleFilterChange}
                label="Start Time"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="endTime"
                value={Meetings.endTime}
                onChange={handleFilterChange}
                label="End Time"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="zoomRoomId"
                value={Meetings.zoomRoomId}
                onChange={handleFilterChange}
                label="Zoom Room ID"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="organizerUserId"
                value={Meetings.organizerUserId}
                onChange={handleFilterChange}
                label="Organizer User ID"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="participants"
                value={Meetings.participants}
                onChange={handleFilterChange}
                label="Participants"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} display={'flex'} gap={4} justifyContent={'flex-end'}>
              <Button className="button" variant="contained" color="primary" type="submit" >
                Apply filter
              </Button>
              <MeetingsCreateContainer/>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Meetings;
