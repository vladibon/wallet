import {
  useCreateUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrenthUserQuery,
} from './auth/authAPI';
import { useGetCategoriesQuery } from './categories/categoriesAPI';
import {
  useGetTransactionsQuery,
  useAddTransactionMutation,
  useGetStatisticsQuery,
} from './finance/financeAPI';
import { setUser, resetUser, setBalance } from './auth/auth-slice';
import { setCategories } from './categories/categories-slice';
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
  openModalLogout,
  setCategories,
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
  useGetCategoriesQuery,
  useGetTransactionsQuery,
  useAddTransactionMutation,
  useGetStatisticsQuery,
};
