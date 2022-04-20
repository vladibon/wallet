import { createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from 'variables';

const initialState = {
  name: null,
  email: null,
  balance: 0,
  subscription: '',
  categories: { income: [], expense: [] },
  avatarURL: '',
  signupDate: '11.12.2021',
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
      state.avatarURL = `${BASE_URL}/${action.payload.avatarURL}?${new Date()}`;
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
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    updateSubscription: (state, action) => {
      state.subscription = action.payload.subscription;
    },
    setUserCategories: (state, action) => {
      state.categories.income = [...action.payload.income];
      state.categories.expense = [...action.payload.expense];
    },
    setAvatarURL: (state, action) => {
      state.avatarURL = `${BASE_URL}/${action.payload.avatarURL}?${new Date()}`;
    },
  },
});

export const {
  setUser,
  resetUser,
  setBalance,
  setName,
  setEmail,
  updateSubscription,
  setUserCategories,
  setAvatarURL,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
