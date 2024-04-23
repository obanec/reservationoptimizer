import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../stateManagement/auth';
import userReducer from '../stateManagement/users';
import paramReducer from '../stateManagement/parameters';
import meetingReducer from '../stateManagement/meetings';

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    param:paramReducer, 
    meeting:meetingReducer
  },
});
