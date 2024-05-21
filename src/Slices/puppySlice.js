import { createSlice } from "@reduxjs/toolkit";
import { puppyBowlApi } from "../api";

const puppySlice = createSlice({
  name: "puppy",
  initialState: {
    data: [],
    results: [],
  },
  reducers: {},
  extraReducers: (build) => {
    build.addMatcher(
      puppyBowlApi.endpoints.getPlayers.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});
export default puppySlice.reducer;
