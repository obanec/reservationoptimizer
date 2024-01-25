import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import './style.css';


const parametersList = ({ filter }) => {
  const parameters = [
    {
      id: 1,
      name: 'CONFIG PARAM 1 ',
      paramValue: 'Doe',
      description: 'PARAMETER 1 DESC'
    },
    {
      id: 2,
      name: 'CONFIG PARAM 2 ',
      paramValue: 'hgfda523',
      description: 'PARAMETER 2 DESC'
    },
  ];


  const filteredparameters = parameters.filter((parameter) => {
    const nameMatch = parameter.name.toLowerCase().includes(filter.name.toLowerCase());
    const paramValueMatch = parameter.paramValue.toLowerCase().includes(filter.paramValue.toLowerCase());
    const descriptionMatch = parameter.description.toLowerCase().includes(filter.description.toLowerCase());

    return nameMatch && paramValueMatch && descriptionMatch;
  });

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
          {filteredparameters.map((parameter) => (
            <TableRow className='parameter-row' key={parameter.id}>
              <TableCell>{parameter.id}</TableCell>
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

export default parametersList;
