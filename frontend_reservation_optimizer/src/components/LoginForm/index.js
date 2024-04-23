import React from 'react';
import { TextField, Container, Button, Typography, Grid, Alert } from '@mui/material';
import { Field } from 'formik';
import { useSelector } from 'react-redux';

const renderField = ({field, ...props}) => <TextField {...field} {...props}/>;

const LoginForm = () => {
  const {loading, error} = useSelector(state => state.auth);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
        Login
      </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field name="username" component={renderField} fullWidth label="Username" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Field name="password"  component={renderField} fullWidth label="Password" variant="outlined" type="password" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth type="submit" disabled={loading}>
              {!loading && 'Login'}
              {loading && 'Loading'}
            </Button>
          </Grid>
        </Grid>
        {error && <Alert style={{marginTop: 30}} severity='error'> {error}</Alert>}

    </Container>
  );
};

export default LoginForm;