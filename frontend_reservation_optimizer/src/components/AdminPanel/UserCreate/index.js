import React from 'react';
import { TextField, Button, Dialog, Box } from '@mui/material';
import './style.css';
import { useSelector} from 'react-redux';

const CreateUserModal = ({ open, onClose, handleChange, handleCreateUser}) => {
  const newUser = useSelector(state => state.user.form)

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box className="modal-content">
        <h2 id="modal-title">Create new user</h2>
        <TextField
          label="Nombre"
          variant="outlined"
          value={newUser.firstName}
          name='firstName'
          onChange={handleChange}
        />
        <TextField
          label="Apellido"
          variant="outlined"
          value={newUser.lastName}
          name='lastName'
          onChange={handleChange}
        />
          <TextField
          label="Rol"
          variant="outlined"
          value={newUser.role}
          name='role'
          onChange={handleChange}
        />
        <TextField
          label="Correo Electrónico"
          variant="outlined"
          value={newUser.username}
          name='username'
          onChange={handleChange}
        />
        <Button className='button' onClick={handleCreateUser}>
          Crear
        </Button>
      </Box>
    </Dialog>
  );
};

export default CreateUserModal;
