import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'variables';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://wallet-proj.herokuapp.com/api',
    baseUrl: `${BASE_URL}/api`,
    // baseUrl: 'http://localhost:4000/api',

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
