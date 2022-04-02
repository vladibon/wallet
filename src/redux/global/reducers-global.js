import { createReducer } from '@reduxjs/toolkit';
import { openModal, closeModal } from './actions-global';

export const isModalOpenReducer = createReducer(false, {
  [openModal.type]: () => true,
  [closeModal.type]: () => false,
});
