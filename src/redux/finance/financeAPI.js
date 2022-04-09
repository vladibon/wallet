import { emptySplitApi } from '../mainAPISlice';
import { useSelector } from 'react-redux';
import { selectTransactionsPage } from 'redux/selectors';

const GetPage = () => useSelector(selectTransactionsPage);

const financeAPI = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getTransactions: builder.query({
      query: (page = GetPage()) => `/transactions?page=${page}`,
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
  }),
  overrideExisting: false,
});

export const { useGetTransactionsQuery, useAddTransactionMutation } = financeAPI;
