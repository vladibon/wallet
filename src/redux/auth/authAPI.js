import { emptySplitApi } from 'redux/mainAPISlice';

const authAPI = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    createUser: builder.mutation({
      query: ({ user }) => ({
        url: `/api/auth/signup`,
        method: 'POST',
        providesTags: ['Users'],
        body: user,
      }),
    }),
    logInUser: builder.mutation({
      query: ({ user }) => ({
        url: `/api/auth/login`,
        method: 'POST',
        providesTags: ['Users'],
        body: user,
      }),
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: `/api/auth/logout`,
        method: 'POST',
        providesTags: ['Users'],
      }),
    }),
    getCurrenthUser: builder.query({
      query: () => ({
        url: `/api/users/current`,
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
