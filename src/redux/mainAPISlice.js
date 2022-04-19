import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'variables';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,

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
