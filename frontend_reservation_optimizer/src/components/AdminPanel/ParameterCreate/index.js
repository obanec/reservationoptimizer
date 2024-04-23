import React, { useState } from 'react';
import { TextField, Button, Dialog, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import './style.css';

const CreateParameterModal = ({ open, onClose, handleChange, handleCreateParameter }) => {
  const newParameter = useSelector(state => state.param.form)

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box className="modal-content">
        <h2 id="modal-title">Create new parameter</h2>
        <TextField
          label="Name"
          variant="outlined"
          name='name'
          value={newParameter.name}
          onChange={handleChange}
        />
        <TextField
          label="Value"
          variant="outlined"
          name='paramValue'
          value={newParameter.paramValue}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          variant="outlined"
          name='description'
          value={newParameter.description}
          onChange={handleChange}
        />
        <Button className='button' onClick={handleCreateParameter}>
          Crear
        </Button>
      </Box>
    </Dialog>
  );
};

export default CreateParameterModal;
