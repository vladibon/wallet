import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  stats: {
    income: [],
    expense: [],
    totalIncome: 0,
    totalExpense: 0,
  },
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
    resetTransactions: (state, action) => {
      state.transactions = [];
    },
    setStatistics: (state, action) => {
      state.stats.income = [...action.payload.income];
      state.stats.expense = [...action.payload.expense];
      state.stats.totalIncome = action.payload.totalIncome;
      state.stats.totalExpense = action.payload.totalExpenses;
    },
    resetStatistics: (state, action) => {
      state.stats.income = [];
      state.stats.expense = [];
      state.stats.totalIncome = 0;
      state.stats.totalExpense = 0;
    },
  },
});

export const {
  setLatestTransactions,
  setMoreTransactions,
  resetTransactions,
  setStatistics,
  resetStatistics,
} = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
