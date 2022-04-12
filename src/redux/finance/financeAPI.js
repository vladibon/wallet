import { emptySplitApi } from '../mainAPISlice';

const financeAPI = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getTransactions: builder.query({
      query: (page = 1) => `/transactions?page=${page}&limit=12`,
      providesTags: ['Finance'],
    }),
    addTransaction: builder.mutation({
      query: ({ transaction }) => ({
        url: `/transactions`,
        method: 'POST',
        body: transaction,
      }),
      invalidatesTags: ['Finance'],
    }),
    getStatistics: builder.query({
      query: ({ month, year }) => ({
        url: `/transactions/stats?month=${month}&year=${year}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetTransactionsQuery, useAddTransactionMutation, useGetStatisticsQuery } =
  financeAPI;
