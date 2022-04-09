import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: { data: [], page: 1 },
  stats: [],
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setLatestTransactions: (state, action) => {
      state.transactions.data = [...action.payload];
    },
    setMoreTransactions: (state, action) => {
      state.transactions.data = [...state.transactions, ...action.payload];
    },
    setNextPage: (state, action) => {
      state.transactions.page += 1;
    },
    resetPage: (state, action) => {
      state.transactions.page = 1;
    },
  },
});

export const { setLatestTransactions, setMoreTransactions, setNextPage, resetPage } =
  financeSlice.actions;
export const financeReducer = financeSlice.reducer;
