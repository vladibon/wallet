import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  errorStatus: null,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalLogout: (state, _) => {
      state.isModalLogoutOpen = true;
    },
    openModalAddTransaction: (state, _) => {
      state.isModalAddTransactionOpen = true;
    },
    closeModalWindow: (state, _) => {
      state.isModalLogoutOpen = false;
      state.isModalAddTransactionOpen = false;
    },
    setError: (state, action) => {
      state.errorStatus = action.payload;
    },
    resetError: (state, _) => {
      state.errorStatus = null;
    },
  },
});

export const { openModalLogout, openModalAddTransaction, closeModalWindow, setError, resetError } =
  globalSlice.actions;
export const globalReducer = globalSlice.reducer;
