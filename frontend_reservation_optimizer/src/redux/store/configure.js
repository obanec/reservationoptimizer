import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../stateManagement/auth';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
