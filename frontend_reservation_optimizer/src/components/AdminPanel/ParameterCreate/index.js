import React, { useState } from 'react';
import { TextField, Button, Dialog, Box } from '@mui/material';
import './style.css';

const CreateParameterModal = ({ open, onClose, onCreateParameter }) => {
  const [newParameter, setNewParameter] = useState({ firstName: '', lastName: '', email: '', role: '' });

  const handleCreateParameter = () => {
    onCreateParameter(newParameter);
    setNewParameter({ firstName: '', lastName: '', email: '', role: '' });
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box className="modal-content">
        <h2 id="modal-title">Create new parameter</h2>
        <TextField
          label="Name"
          variant="outlined"
          value={newParameter.name}
          onChange={(e) => setNewParameter({ ...newParameter, name: e.target.value })}
        />
        <TextField
          label="Value"
          variant="outlined"
          value={newParameter.paramValue}
          onChange={(e) => setNewParameter({ ...newParameter, paramValue: e.target.value })}
        />
          <TextField
          label="Description"
          variant="outlined"
          value={newParameter.description}
          onChange={(e) => setNewParameter({ ...newParameter, description: e.target.value })}
        />
        <Button className='button' onClick={handleCreateParameter}>
          Crear
        </Button>
      </Box>
    </Dialog>
  );
};

export default CreateParameterModal;
