import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://wallet-proj.herokuapp.com/api',
    baseUrl: 'https://wallet-proj.osc-fr1.scalingo.io/api',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token;

      token && headers.set('Authorization', `Bearer ${token}`);

      return headers;
    },
  }),

  tagTypes: ['Users', 'Finance', 'Categories'],
  reducerPath: 'mainAPISlice',
  endpoints: () => ({}),
});
