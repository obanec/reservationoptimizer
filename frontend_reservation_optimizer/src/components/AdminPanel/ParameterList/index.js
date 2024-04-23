import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import './style.css';
import { useSelector } from 'react-redux';

const ParametersList = ({ filter }) => {
  const parameters = useSelector(state => state.param.params);

  return (
    <TableContainer className="parameter-list-container" component={Paper}>
      <Table>
        <TableHead >
          <TableRow className='table-header'>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {parameters.map((parameter) => (
            <TableRow className='parameter-row' key={parameter.id}>
              <TableCell>{parameter._id}</TableCell>
              <TableCell>{parameter.name}</TableCell>
              <TableCell>{parameter.paramValue}</TableCell>
              <TableCell>{parameter.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ParametersList;
