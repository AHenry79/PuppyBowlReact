import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
  reducerPath: "puppyBowl",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/",
  }),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => "players",
    }),
    getPlayer: builder.query({
      query: (id) => `players/${id}`,
    }),
  }),
});
export const { useGetPlayersQuery, useGetPlayerQuery } = puppyBowlApi;
