import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  errorStatus: null,
  successResponse: false,
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
    isSuccessResponse: (state, _) => {
      state.successResponse = true;
    },
    noSuccessResponse: (state, _) => {
      state.successResponse = false;
    },
  },
});

export const {
  openModalLogout,
  openModalAddTransaction,
  closeModalWindow,
  setError,
  resetError,
  isSuccessResponse,
  noSuccessResponse,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
