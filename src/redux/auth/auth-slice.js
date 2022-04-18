import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    resetAuth: (state, _) => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setAuth, resetAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
