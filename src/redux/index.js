import {
  useCreateUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrenthUserQuery,
  useAddCategoryMutation,
} from './auth/authAPI';
import {
  useGetTransactionsQuery,
  useAddTransactionMutation,
  useGetStatisticsQuery,
} from './finance/financeAPI';
import { setUser, resetUser, setBalance, setUserCategories } from './auth/auth-slice';
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
  setUser,
  resetUser,
  setBalance,
  setUserCategories,
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
};
