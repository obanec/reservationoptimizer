import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import UserList from '../../../components/AdminPanel/UserList';
import UserCreate from '../../../components/AdminPanel/UserCreate';

const UsersCreateContainer = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCreateUser = (newUser) => {
   
    handleCloseModal();
  };

  return (
    <>
      {/* Código del componente UsersList */}
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Create user
      </Button>
      {/* Modal para crear un nuevo usuario */}
      <UserCreate open={openModal} onClose={handleCloseModal} onCreateUser={handleCreateUser} />
    </>
  );
};


const Users = () => {
  const [filter, setFilter] = useState({
    email: '',
    status: '',
    role: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

 

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
        Users
      </Typography>
      <Box mb={2}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                name="email"
                value={filter.email}
                onChange={handleFilterChange}
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="status"
                value={filter.status}
                onChange={handleFilterChange}
                label="Status"
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
              <Button className="button" variant="contained" color="primary" type="submit" >
                Apply filter
              </Button>
              <UsersCreateContainer/>
            </Grid>
          </Grid>
        </form>
      </Box>
      
      <UserList filter={filter} />
    </Container>
  );
};

export default Users;
