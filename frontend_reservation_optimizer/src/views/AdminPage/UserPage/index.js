import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import UserList from '../../../components/AdminPanel/UserList';
import UserCreate from '../../../components/AdminPanel/UserCreate';
import { useDispatch, useSelector } from 'react-redux';
import { register, fetch, updateUserfields } from '../../../redux/stateManagement/users';

const Users = () => {
  const [filter, setFilter] = useState({
    username: '',
    role: '',
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch(filter));
  }, []);


  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };


  const fetchFilteredUsers = () => {
    dispatch(fetch(filter));
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
        Users
      </Typography>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              name="username"
              value={filter.username}
              onChange={handleFilterChange}
              label="User Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="role"
              value={filter.role}
              onChange={handleFilterChange}
              label="Role"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} display={'flex'} gap={4} justifyContent={'flex-end'}>
            <Button className="button" variant="contained" color="primary" onClick={() => fetchFilteredUsers()} >
              Apply filter
            </Button>
            <UsersCreateContainer />
          </Grid>
        </Grid>
      </Box>

      <UserList filter={filter} />
    </Container>
  );
};

const UsersCreateContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const { success } = useSelector(state => state.user)
  useEffect(() => {
    if (success) {
      dispatch(fetch({}));
    }
  }, [success])

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(updateUserfields({ name, value }))
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCreateUser = async (newUser) => {
    dispatch(register());
    handleCloseModal();
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Create user
      </Button>
      <UserCreate open={openModal} onClose={handleCloseModal} handleCreateUser={handleCreateUser} handleChange={handleChange} />
    </>
  );
};

export default Users;
