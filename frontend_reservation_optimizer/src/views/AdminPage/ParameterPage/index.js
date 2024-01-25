import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import ParameterList from '../../../components/AdminPanel/ParameterList';
import ParameterCreate from '../../../components/AdminPanel/ParameterCreate';

const ParametersCreateContainer = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCreateParameter = (newParameter) => {
   
    handleCloseModal();
  };

  return (
    <>
      {}
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Create Parameter
      </Button>
      {}
      <ParameterCreate open={openModal} onClose={handleCloseModal} onCreateParameter={handleCreateParameter} />
    </>
  );
};


const Parameters = () => {
  const [filter, setFilter] = useState({
    name: '',
    paramValue: '',
    description: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

 

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
        Parameters
      </Typography>
      <Box mb={2}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                name="name"
                value={filter.name}
                onChange={handleFilterChange}
                label="Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="paramValue"
                value={filter.paramValue}
                onChange={handleFilterChange}
                label="Value"
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
            <Grid item xs={12} display={'flex'} gap={4} justifyContent={'flex-end'}>
              <Button className="button" variant="contained" color="primary" type="submit" >
                Apply filter
              </Button>
              <ParametersCreateContainer/>
            </Grid>
          </Grid>
        </form>
      </Box>
      
      <ParameterList filter={filter} />
    </Container>
  );
};

export default Parameters;
