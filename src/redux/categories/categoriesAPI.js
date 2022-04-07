import { emptySplitApi } from 'redux/mainAPISlice';

const categoriesAPI = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => ({
        url: `/categories`,
        providesTags: ['Categories'],
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoriesQuery } = categoriesAPI;
