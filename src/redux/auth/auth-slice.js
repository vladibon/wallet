import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null, balance: 0 },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    resetUser: (state, _) => {
      state.user = { name: null, email: null, balance: 0 };
      state.token = null;
      state.isLoggedIn = false;
    },
    setBalance: (state, action) => {
      state.user.balance = action.payload.balance;
    },
  },
});

export const { setUser, resetUser, setBalance } = authSlice.actions;
export const authReducer = authSlice.reducer;
