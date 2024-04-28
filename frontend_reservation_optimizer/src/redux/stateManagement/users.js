import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {submitUser, fetchUser} from "../services/usersdata";

const initialState = {
  users: [],
  loading: false,
  error: null,
  form: {} 
};

export const register = createAsyncThunk(
  "user/handle", submitUser
);

export const fetch = createAsyncThunk(
  "user/list", fetchUser
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUserfields:(state, {payload:{name, value}}) => {
      state.form[name] = value 
    }
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.form= {};
      state.error = null;
      state.success = true;  
    })
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    }) 
    builder.addCase(fetch.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;  
    })
    builder.addCase(fetch.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload.users;
      state.error = null;  
    })
    builder.addCase(fetch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  },
  
});

export const {updateUserfields} = usersSlice.actions; 
export default usersSlice.reducer;