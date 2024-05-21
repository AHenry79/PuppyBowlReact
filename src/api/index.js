import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const puppyBowlApi = createApi({
  reducerPath: "puppyBowl",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-ET-WEB-FT/",
  }),
  endpoints: (build) => ({
    getPlayers: build.query({
      query: () => "players",
    }),
  }),
});
export const { useGetPlayersQuery } = puppyBowlApi;
