import React, { useState } from 'react';
import { TextField, Button, Dialog, Box } from '@mui/material';
import './style.css';

const CreateUserModal = ({ open, onClose, onCreateUser }) => {
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', role: '' });

  const handleCreateUser = () => {
    onCreateUser(newUser);
    setNewUser({ firstName: '', lastName: '', email: '', role: '' });
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box className="modal-content">
        <h2 id="modal-title">Create new user</h2>
        <TextField
          label="Nombre"
          variant="outlined"
          value={newUser.firstName}
          onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
        />
        <TextField
          label="Apellido"
          variant="outlined"
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />
          <TextField
          label="Rol"
          variant="outlined"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <TextField
          label="Correo Electrónico"
          variant="outlined"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <Button className='button' onClick={handleCreateUser}>
          Crear
        </Button>
      </Box>
    </Dialog>
  );
};

export default CreateUserModal;
