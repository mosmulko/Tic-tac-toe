import { createSlice } from "@reduxjs/toolkit";

const initialState = "new";

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    statusChanged: (state, action) => (state = action.payload),
  },
});

export const { statusChanged } = statusSlice.actions;

export const selectStatus = (state) => state.status;

export default statusSlice.reducer;
