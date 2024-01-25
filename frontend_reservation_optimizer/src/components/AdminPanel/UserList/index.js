import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import './style.css';


const UsersList = ({ filter }) => {
  //obtener la lista de usuarios según los filtros aplicados
  const users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      status: 'Active',
      role: 'User',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'janesmith@example.com',
      status: 'Inactive',
      role: 'Admin',
    },
    // Agrega más usuarios aquí
  ];


  const filteredUsers = users.filter((user) => {
    const emailMatch = user.email.toLowerCase().includes(filter.email.toLowerCase());
    const statusMatch = user.status.toLowerCase().includes(filter.status.toLowerCase());
    const roleMatch = user.role.toLowerCase().includes(filter.role.toLowerCase());

    return emailMatch && statusMatch && roleMatch;
  });

  return (
    <TableContainer className="user-list-container" component={Paper}>
      <Table>
        <TableHead >
          <TableRow className='table-header'>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow className='user-row' key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersList;
