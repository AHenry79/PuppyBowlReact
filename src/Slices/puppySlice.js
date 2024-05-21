import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

const puppySlice = createSlice({
  name: "puppy",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getPlayers.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});
export default puppySlice.reducer;
