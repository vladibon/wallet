import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  stats: [],
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = [...action.payload];
    },
  },
});

export const { setTransactions } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
