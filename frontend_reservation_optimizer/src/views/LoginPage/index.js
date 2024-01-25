import React from 'react';
import { Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import LoginForm from '../../components/LoginForm';
import * as Yup from 'yup';

const LoginPage = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div>
      <Typography align='center' variant="h2">Zoom reservation Optimizer</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <Form>
            <LoginForm handleSubmit={handleSubmit} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
