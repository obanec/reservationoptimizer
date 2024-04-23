import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apicall from "../services/auth";


const initialState = {
  user: null,
  isLoggedIn: false,
  session: {},
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login", apicall
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { 
    setAuthenticate: (state, {payload}) => {
      state.isLoggedIn= true; 
      state.session= payload
    }, 
    setLoading: (state, {payload}) => {
      state.loading = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  },
});

export const {setAuthenticate, setLoading} = authSlice.actions
export default authSlice.reducer;