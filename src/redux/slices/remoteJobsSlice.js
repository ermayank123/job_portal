import { createSlice } from "@reduxjs/toolkit";

const remoteJobsSlice = createSlice({
  name: "remoteJobs",

  initialState: {
    jobs: []
  },

  reducers: {
    setRemoteJobs: (state, action) => {
      state.jobs = action.payload;
    }
  }
});

export const {
  setRemoteJobs
} = remoteJobsSlice.actions;

export default remoteJobsSlice.reducer;