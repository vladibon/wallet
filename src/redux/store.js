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

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth/auth-slice';
import { userReducer } from './user/user-slice';
import { financeReducer } from './finance/finance-slice';
import { globalReducer } from './global/global-slice';
import { emptySplitApi } from 'redux/mainAPISlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer,
  finance: financeReducer,
  global: globalReducer,
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
