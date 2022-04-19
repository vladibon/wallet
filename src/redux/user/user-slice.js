import { createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from 'variables';

const initialState = {
  name: null,
  email: null,
  balance: 0,
  subscription: '',
  categories: { income: [], expense: [] },
  avatarURL: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.balance = action.payload.balance;
      state.subscription = action.payload.subscription;
      state.categories = { ...action.payload.categories };
      state.avatarURL = action.payload.avatarURL;
    },
    resetUser: (state, _) => {
      state.name = null;
      state.email = null;
      state.balance = 0;
      state.subscription = '';
      state.categories = { income: [], expense: [] };
      state.avatarURL = '';
    },
    setBalance: (state, action) => {
      state.balance = action.payload.balance;
    },
    updateSubscription: (state, action) => {
      state.subscription = action.payload.subscription;
    },
    setUserCategories: (state, action) => {
      state.categories.income = [...action.payload.income];
      state.categories.expense = [...action.payload.expense];
    },
    setAvatarURL: (state, action) => {
      state.avatarURL = action.payload.avatarURL;
    },
  },
});

export const {
  setUser,
  resetUser,
  setBalance,
  updateSubscription,
  setUserCategories,
  setAvatarURL,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
