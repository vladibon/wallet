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
    updateName: builder.mutation({
      query: body => ({
        url: `/users/name`,
        method: 'PATCH',
        invalidatesTags: ['Users'],
        body,
      }),
    }),
    updateEmail: builder.mutation({
      query: body => ({
        url: `/users/email`,
        method: 'PATCH',
        invalidatesTags: ['Users'],
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
    updateAvatar: builder.mutation({
      query: body => ({
        url: `/users/avatars`,
        method: 'PATCH',
        invalidatesTags: ['Users'],
        body,
      }),
    }),
    deleteUser: builder.mutation({
      query: () => ({
        url: `/users/delete`,
        method: 'DELETE',
        invalidatesTags: ['Users'],
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCurrenthUserQuery,
  useAddCategoryMutation,
  useUpdateNameMutation,
  useUpdateEmailMutation,
  useUpdateSubscriptionMutation,
  useUpdateAvatarMutation,
  useDeleteUserMutation,
} = userAPI;
