import { Restaurant } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const restaurantApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/restaurants",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["Restaurants"],
  endpoints: (builder) => ({
    getRestaurantsList: builder.query<Restaurant[], void>({
      query: () => "",
      providesTags: ["Restaurants"],
      transformResponse: (response: { data: Restaurant[] }) => response.data,
    }),
  }),
});

// client-side hook
export const { useGetRestaurantsListQuery } = restaurantApi;
