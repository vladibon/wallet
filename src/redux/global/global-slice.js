import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  isModalDeleteUserOpen: false,
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
    openModalDeleteUser: (state, _) => {
      state.isModalDeleteUserOpen = true;
    },
    closeModalWindow: (state, _) => {
      state.isModalLogoutOpen = false;
      state.isModalAddTransactionOpen = false;
      state.isModalDeleteUserOpen = false;
    },
    setError: (state, action) => {
      state.errorStatus = action.payload;
    },
    resetError: (state, _) => {
      state.errorStatus = null;
    },
    setSuccessResponse: (state, _) => {
      state.successResponse = true;
    },
    resetSuccessResponse: (state, _) => {
      state.successResponse = false;
    },
  },
});

export const {
  openModalLogout,
  openModalAddTransaction,
  openModalDeleteUser,
  closeModalWindow,
  setError,
  resetError,
  setSuccessResponse,
  resetSuccessResponse,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
