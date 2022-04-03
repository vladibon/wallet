import { emptySplitApi } from '../mainAPISlice';

const transactionsAPI = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getTransactions: builder.query({
      query: () => `/api/transactions`,
      providesTags: ['Transactions'],
    }),
    addTransaction: builder.mutation({
      query: ({ transaction }) => ({
        url: `/api/transactions`,
        method: 'POST',
        body: transaction,
      }),
      invalidatesTags: ['Transactions'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetTransactionsQuery, useAddTransactionMutation } = transactionsAPI;
