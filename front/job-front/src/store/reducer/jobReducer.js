const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  jobList: [],
};

const job = createSlice({
  name: "job",
  initialState,
  reducers: {},
});

export const selectJobList = (state) => state.job.jobList;
export default job.reducer;
