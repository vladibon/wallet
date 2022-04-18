import { emptySplitApi } from 'redux/mainAPISlice';

const userAPI = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getCurrenthUser: builder.query({
      query: () => ({
        url: `/users/current`,
        providesTags: ['Users'],
      }),
    }),
    addCategory: builder.mutation({
      query: body => ({
        url: `/users/category`,
        method: 'POST',
        invalidatesTags: ['Users', 'Finance'],
        body,
      }),
    }),
    updateSubscription: builder.mutation({
      query: body => ({
        url: `/users/subscription`,
        method: 'PATCH',
        invalidatesTags: ['Users'],
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCurrenthUserQuery, useAddCategoryMutation, useUpdateSubscriptionMutation } =
  userAPI;
