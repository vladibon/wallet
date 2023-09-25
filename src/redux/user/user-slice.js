import { createSlice } from '@reduxjs/toolkit';

const { API_BASE_URL } = process.env;

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
      state.avatarURL = `${API_BASE_URL}/${action.payload.avatarURL}?${new Date().getTime()}`;
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
      state.avatarURL = `${API_BASE_URL}/${action.payload.avatarURL}?${new Date().getTime()}`;
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
