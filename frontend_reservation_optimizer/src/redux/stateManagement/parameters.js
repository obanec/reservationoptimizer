import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {submitParams, fetchParams} from "../services/params";

const initialState = {
  params: [],
  loading: false,
  error: null,
  form: {} 
};

export const submitParameter = createAsyncThunk(
  "params/handle", submitParams
);

export const fetch = createAsyncThunk(
  "params/list", fetchParams
);

const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    updateParamsfields:(state, {payload:{name, value}}) => {
      state.form[name] = value 
    }
  },
  extraReducers: (builder) => {
    builder.addCase(submitParameter.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(submitParameter.fulfilled, (state, action) => {
      state.loading = false;
      state.form= {};
      state.error = null;
      state.success = true;  
    })
    builder.addCase(submitParameter.rejected, (state, action) => {
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
      state.params = action.payload.configParams;
      state.error = null;  
    })
    builder.addCase(fetch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  },
  
});

export const {updateParamsfields} = paramsSlice.actions; 
export default paramsSlice.reducer;