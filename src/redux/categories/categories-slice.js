import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  income: null,
  expense: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.income = action.payload.income;
      state.expense = action.payload.expense;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
