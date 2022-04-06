import {
  useCreateUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrenthUserQuery,
} from './auth/authAPI';
import { useGetCategoriesQuery } from './categories/categoriesAPI';
import { setUser, resetUser } from './auth/auth-slice';
import { setCategories } from './categories/categories-slice';
import { openModalLogout, openModalAddTransaction, closeModalWindow } from './global/global-slice';

export {
  setUser,
  resetUser,
  openModalLogout,
  setCategories,
  openModalAddTransaction,
  closeModalWindow,
};
export {
  useCreateUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrenthUserQuery,
  useGetCategoriesQuery,
};
