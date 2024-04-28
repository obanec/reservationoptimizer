import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {submitMeeting, fetchMeeting} from "../services/meeting";

const initialState = {
  meeting: [],
  loading: false,
  error: null,
  form: {} 
};

export const submitMeetingRoom = createAsyncThunk(
  "meeting/handle", submitMeeting
);

export const fetch = createAsyncThunk(
  "meeting/list", fetchMeeting
);

const MeetingSlice = createSlice({
  name: 'Meeting',
  initialState,
  reducers: {
    updateMeetingfields:(state, {payload:{name, value}}) => {
      state.form[name] = value 
    }
  },
  extraReducers: (builder) => {
    builder.addCase(submitMeetingRoom.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(submitMeetingRoom.fulfilled, (state, action) => {
      state.loading = false;
      state.form= {};
      state.error = null;
      state.success = true;  
    })
    builder.addCase(submitMeetingRoom.rejected, (state, action) => {
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
      state.meeting = action.payload.meetings;
      state.error = null;  
    })
    builder.addCase(fetch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  },
  
});

export const {updateMeetingfields} = MeetingSlice.actions; 
export default MeetingSlice.reducer;