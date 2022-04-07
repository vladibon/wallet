import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  stats: [],
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setLatestTransactions: (state, action) => {
      state.transactions = [...action.payload];
    },
    setMoreTransactions: (state, action) => {
      state.transactions = [...state.transactions, ...action.payload];
    },
  },
});

export const { setLatestTransactions, setMoreTransactions } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
