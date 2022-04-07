import { emptySplitApi } from 'redux/mainAPISlice';

const authAPI = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    createUser: builder.mutation({
      query: ({ user }) => ({
        url: `/auth/signup`,
        method: 'POST',
        providesTags: ['Users'],
        body: user,
      }),
    }),
    logInUser: builder.mutation({
      query: user => ({
        url: `/auth/login`,
        method: 'POST',
        providesTags: ['Users'],
        body: user,
      }),
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
        providesTags: ['Users'],
      }),
    }),
    getCurrenthUser: builder.query({
      query: () => ({
        url: `/users/current`,
        providesTags: ['Users'],
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrenthUserQuery,
} = authAPI;
