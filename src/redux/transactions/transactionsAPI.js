import { emptySplitApi } from '../mainAPISlice';

const transactionsAPI = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getTransactions: builder.query({
      query: () => `/transactions`,
      providesTags: ['Transactions'],
    }),
    addTransaction: builder.mutation({
      query: ({ transaction }) => ({
        url: `/transactions`,
        method: 'POST',
        body: transaction,
      }),
      invalidatesTags: ['Transactions'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetTransactionsQuery, useAddTransactionMutation } = transactionsAPI;
