import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import MeetingCreate from '../../../components/BookingForm/MeetingCreate';
import { useDispatch, useSelector } from 'react-redux';
import { submitMeetingRoom, fetch, updateMeetingfields } from '../../../redux/stateManagement/meetings';
import MeetingList from '../../../components/BookingForm/MeetingList';

const MeetingsCreateContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const { success } = useSelector(state => state.meeting)
  useEffect(() => {
    if (success) {
      dispatch(fetch({}));
    }
  }, [success])

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(updateMeetingfields({ name, value }))
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCreateMeeting = () => {
    dispatch(submitMeetingRoom());
    handleCloseModal();
  };

  return (
    <>
      { }
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Create Meeting
      </Button>
      { }
      <MeetingCreate open={openModal} onClose={handleCloseModal} handleCreateMeeting={handleCreateMeeting} handleChange={handleChange} />
    </>
  );
};

const Meetings = () => {
  const [filter, setFilter] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    zoomRoomId: '',
    organizerUserId: '',
    participants: []
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch(filter));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const fetchFilteredMeetings = () => {
    dispatch(fetch(filter));
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
        Meetings
      </Typography>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              name="title"
              value={filter.title}
              onChange={handleFilterChange}
              label="Title"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="description"
              value={filter.description}
              onChange={handleFilterChange}
              label="Description"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="startTime"
              value={filter.startTime}
              onChange={handleFilterChange}
              label="Start Time"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="endTime"
              value={filter.endTime}
              onChange={handleFilterChange}
              label="End Time"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="zoomRoomId"
              value={filter.zoomRoomId}
              onChange={handleFilterChange}
              label="Zoom Room ID"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="organizerUserId"
              value={filter.organizerUserId}
              onChange={handleFilterChange}
              label="Organizer User ID"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="participants"
              value={filter.participants}
              onChange={handleFilterChange}
              label="Participants"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} display={'flex'} gap={4} justifyContent={'flex-end'}>
            <Button className="button" variant="contained" color="primary" onClick={fetchFilteredMeetings} >
              Apply filter
            </Button>
            <MeetingsCreateContainer />
          </Grid>
        </Grid>
      </Box>
      <MeetingList />
    </Container>
  );
};

export default Meetings;
