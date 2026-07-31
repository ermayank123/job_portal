import { createSlice } from "@reduxjs/toolkit";

const salaryInsightsSlice = createSlice({
  name: "salaryInsights",

  initialState: {
    salaries: []
  },

  reducers: {
    setSalaryInsights: (state, action) => {
      state.salaries = action.payload;
    }
  }
});

export const {
  setSalaryInsights
} = salaryInsightsSlice.actions;

export default salaryInsightsSlice.reducer;