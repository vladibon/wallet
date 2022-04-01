import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PAUSE,
  PERSIST,
  PURGE,
} from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { authReducer } from 'redux/auth/auth-slice';
import { emptySplitApi } from 'redux/mainAPISlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  [emptySplitApi.reducerPath]: emptySplitApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
      },
    }),
    emptySplitApi.middleware,
  ],
});

export const persistor = persistStore(store);
