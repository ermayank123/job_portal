import { createSlice } from "@reduxjs/toolkit";

const skillTestsSlice = createSlice({
  name: "skillTests",

  initialState: {
    tests: []
  },

  reducers: {
    setSkillTests: (state, action) => {
      state.tests = action.payload;
    }
  }
});

export const {
  setSkillTests
} = skillTestsSlice.actions;

export default skillTestsSlice.reducer;