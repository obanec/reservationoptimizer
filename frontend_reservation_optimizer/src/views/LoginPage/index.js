import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import LoginForm from '../../components/LoginForm';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {login} from '../../redux/stateManagement/auth'; 


const LoginPage = () => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
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
    console.log("lleguee");
    e.preventDefault();
    dispatch(login(username, password));
  };
  
  return (
    <div>
      <Typography align='center' variant="h2">Zoom reservation Optimizer</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({}) => (
          <Form>
            <LoginForm 
              setUsername={setUsername} 
              setPassword={setPassword} 
              username={username} 
              password={password} 
              handleSubmit={handleSubmit} 
            />
            <button type='submit' >pp  </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
