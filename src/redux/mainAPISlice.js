import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from 'variables';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/api`,

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
