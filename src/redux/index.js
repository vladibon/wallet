import { useCreateUserMutation, useLogInUserMutation, useLogOutUserMutation } from './auth/authAPI';
import {
  useGetCurrenthUserQuery,
  useAddCategoryMutation,
  useUpdateNameMutation,
  useUpdateEmailMutation,
  useUpdateSubscriptionMutation,
  useUpdateAvatarMutation,
  useDeleteUserMutation,
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
  setName,
  setEmail,
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
  openModalDeleteUser,
  closeModalWindow,
  setError,
  resetError,
  setSuccessResponse,
  resetSuccessResponse,
} from './global/global-slice';

export {
  setAuth,
  resetAuth,
  setUser,
  resetUser,
  setBalance,
  setName,
  setEmail,
  updateSubscription,
  setUserCategories,
  setAvatarURL,
  openModalLogout,
  openModalDeleteUser,
  setLatestTransactions,
  setMoreTransactions,
  resetTransactions,
  setStatistics,
  resetStatistics,
  openModalAddTransaction,
  closeModalWindow,
  setError,
  resetError,
  setSuccessResponse,
  resetSuccessResponse,
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
  useUpdateNameMutation,
  useUpdateEmailMutation,
  useUpdateSubscriptionMutation,
  useUpdateAvatarMutation,
  useDeleteUserMutation,
};
