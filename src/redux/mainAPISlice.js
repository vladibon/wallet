import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token;

      headers.set('Authorization', `Bearer ${token}`);

      return headers;
    },
  }),

  tagTypes: ['Users', 'Transactions'],
  reducerPath: 'mainAPISlice',
  endpoints: () => ({}),
});
