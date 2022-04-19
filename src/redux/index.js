import { useCreateUserMutation, useLogInUserMutation, useLogOutUserMutation } from './auth/authAPI';
import {
  useGetCurrenthUserQuery,
  useAddCategoryMutation,
  useUpdateSubscriptionMutation,
  useUpdateAvatarMutation,
} from './user/userAPI';
import {
  useGetTransactionsQuery,
  useAddTransactionMutation,
  useGetStatisticsQuery,
} from './finance/financeAPI';
import { setAuth, resetAuth } from './auth/auth-slice';
import {
  setUser,
  resetUser,
  setBalance,
  updateSubscription,
  setUserCategories,
  setAvatarURL,
} from './user/user-slice';
import {
  setLatestTransactions,
  setMoreTransactions,
  resetTransactions,
  setStatistics,
  resetStatistics,
} from './finance/finance-slice';
import {
  openModalLogout,
  openModalAddTransaction,
  closeModalWindow,
  setError,
  resetError,
} from './global/global-slice';

export {
  setAuth,
  resetAuth,
  setUser,
  resetUser,
  setBalance,
  updateSubscription,
  setUserCategories,
  setAvatarURL,
  openModalLogout,
  setLatestTransactions,
  setMoreTransactions,
  resetTransactions,
  setStatistics,
  resetStatistics,
  openModalAddTransaction,
  closeModalWindow,
  setError,
  resetError,
};
export {
  useCreateUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrenthUserQuery,
  useGetTransactionsQuery,
  useAddTransactionMutation,
  useGetStatisticsQuery,
  useAddCategoryMutation,
  useUpdateSubscriptionMutation,
  useUpdateAvatarMutation,
};
