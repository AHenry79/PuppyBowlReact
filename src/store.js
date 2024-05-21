import { configureStore } from "@reduxjs/toolkit";
import { puppyBowlApi } from "./api";
import puppySlice from "./Slices/puppySlice";

const store = configureStore({
  reducer: {
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
    puppy: puppySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});
export default store;
