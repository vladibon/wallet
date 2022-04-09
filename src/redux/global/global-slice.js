import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  error: { isError: false, errorStatus: null },
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalLogout: (state, action) => {
      state.isModalLogoutOpen = true;
    },
    openModalAddTransaction: (state, action) => {
      state.isModalAddTransactionOpen = true;
    },
    closeModalWindow: (state, action) => {
      state.isModalLogoutOpen = false;
      state.isModalAddTransactionOpen = false;
    },
  },
});

export const { openModalLogout, openModalAddTransaction, closeModalWindow } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
