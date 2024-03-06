import React from 'react';
import { TextField, Container, Button, Typography, Grid } from '@mui/material';
import { Field } from 'formik';

const LoginForm = ({ handleSubmit }) => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
        Login
      </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field name="username" component={TextField} fullWidth label="Username" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Field name="password" component={TextField} fullWidth label="Password" variant="outlined" type="password" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
    </Container>
  );
};

export default LoginForm;
