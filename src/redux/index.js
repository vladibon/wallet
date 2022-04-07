import {
  useCreateUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrenthUserQuery,
} from './auth/authAPI';
import { useGetCategoriesQuery } from './categories/categoriesAPI';
import { useGetTransactionsQuery, useAddTransactionMutation } from './finance/financeAPI';
import { setUser, resetUser, setBalance } from './auth/auth-slice';
import { setCategories } from './categories/categories-slice';
import { setLatestTransactions, setMoreTransactions } from './finance/finance-slice';
import { openModalLogout, openModalAddTransaction, closeModalWindow } from './global/global-slice';

export {
  setUser,
  resetUser,
  setBalance,
  openModalLogout,
  setCategories,
  setLatestTransactions,
  setMoreTransactions,
  openModalAddTransaction,
  closeModalWindow,
};
export {
  useCreateUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrenthUserQuery,
  useGetCategoriesQuery,
  useGetTransactionsQuery,
  useAddTransactionMutation,
};
