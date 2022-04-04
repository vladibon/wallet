import {
  useCreateUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrenthUserQuery,
} from './auth/authAPI';
import { setUser, resetUser } from './auth/auth-slice';
import { openModalLogout, openModalAddTransaction, closeModalWindow } from './global/global-slice';

export { setUser, resetUser, openModalLogout, openModalAddTransaction, closeModalWindow };
export {
  useCreateUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrenthUserQuery,
};
