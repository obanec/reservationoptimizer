import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import ParameterList from '../../../components/AdminPanel/ParameterList';
import ParameterCreate from '../../../components/AdminPanel/ParameterCreate';
import { useDispatch, useSelector } from 'react-redux';
import { submitParameter, fetch, updateParamsfields } from '../../../redux/stateManagement/parameters';

const ParametersCreateContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const { success } = useSelector(state => state.param)
  useEffect(() => {
    if (success) {
      dispatch(fetch({}));
    }
  }, [success])

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(updateParamsfields({ name, value }))
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCreateParameter = () => {
    dispatch(submitParameter());
    handleCloseModal();
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Create Parameter
      </Button>
      <ParameterCreate open={openModal} onClose={handleCloseModal} handleCreateParameter={handleCreateParameter} handleChange={handleChange} />
    </>
  );
};

const Parameters = () => {
  const [filter, setFilter] = useState({
    name: '',
    paramValue: '',
    description: '',
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch(filter));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const fetchFilteredparams = () => {
    dispatch(fetch(filter));
  }

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
              <Button className="button" variant="contained" color="primary" onClick={() => fetchFilteredparams()}>
                Apply filter
              </Button>
              <ParametersCreateContainer />
            </Grid>
          </Grid>
        </form>
      </Box>

      <ParameterList filter={filter} />
    </Container>
  );
};

export default Parameters;
