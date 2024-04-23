import React from 'react';
import { Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import LoginForm from '../../components/LoginForm';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {login} from '../../redux/stateManagement/auth'; 

const LoginPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });
  const handleSubmit = async (e) => {
    dispatch(login(e));
  };
  
  return (
    <>
      <Typography align='center' variant="h2">Zoom reservation Optimizer</Typography>
      <Formik
        initialValues={initialValues}
        validator={validationSchema}
        onSubmit={handleSubmit}
      >
          <Form>
            <LoginForm/>
          </Form>
      </Formik>
    </>
  );
};

export default LoginPage;