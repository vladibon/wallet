import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
    },
    closeModal: (state, action) => {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
