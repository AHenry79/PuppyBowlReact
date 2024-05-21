import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/",
  }),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => "players",
    }),
    addPlayer: builder.mutation({
      query: (newPlayer) => ({
        url: "players",
        method: "POST",
        body: newPlayer,
      }),
    }),
    deletePlayer: builder.mutation({
      query: (name) => ({
        url: `players/${name}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetPlayersQuery,
  useAddPlayerMutation,
  useDeletePlayerMutation,
} = api;
