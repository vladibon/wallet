import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: { data: [], page: 1 },
  stats: {
    income: [],
    expense: [],
    totalIncome: 0,
    totalExpenses: 0,
  },
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setLatestTransactions: (state, action) => {
      state.transactions.data = [...action.payload];
    },
    setMoreTransactions: (state, action) => {
      state.transactions.data = [...state.transactions.data, ...action.payload];
    },
    setNextPage: (state, action) => {
      state.transactions.page += 1;
    },
    resetPage: (state, action) => {
      state.transactions.page = 1;
    },
    setStatistics: (state, action) => {
      state.stats.income = [...action.payload.income];
      state.stats.expense = [...action.payload.expense];
      state.stats.totalIncome = action.payload.totalIncome;
      state.stats.totalExpenses = action.payload.totalExpenses;
    },
  },
});

export const { setLatestTransactions, setMoreTransactions, setNextPage, resetPage, setStatistics } =
  financeSlice.actions;
export const financeReducer = financeSlice.reducer;
