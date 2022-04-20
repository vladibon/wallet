import s from './ModalLogoutAndDelete.module.css';
import { useEffect } from 'react';

import {
  useLogOutUserMutation,
  closeModalWindow,
  resetAuth,
  resetUser,
  resetTransactions,
  resetStatistics,
  setError,
  resetError,
  useDeleteUserMutation,
} from 'redux/index';
import { emptySplitApi } from 'redux/mainAPISlice';
import { useDispatch } from 'react-redux';

import Button from 'components/Button';
import { toast } from 'react-toastify';

function ModalLogoutAndDelete({ action }) {
  const dispatch = useDispatch();
  const [logOutUser] = useLogOutUserMutation();
  const [deleteAccount, { data, error }] = useDeleteUserMutation();

  useEffect(() => {
    try {
      if (data) {
        toast.success(data.message);
        cleanState();
      } else {
        toast.error(error.data.message);
      }
    } catch {
      setError(500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const onLogout = () => {
    logOutUser();
    cleanState();
  };

  const cleanState = () => {
    dispatch(emptySplitApi.util.resetApiState());
    dispatch(closeModalWindow());
    dispatch(resetAuth());
    dispatch(resetUser());
    dispatch(resetTransactions());
    dispatch(resetStatistics());
    dispatch(resetError());
  };

  const onCancelLogout = e => {
    dispatch(closeModalWindow());
  };

  return (
    <div className={s.modal}>
      <h2 className={s.title}>
        Are you sure you want to {action === 'logout' && 'log out'}
        {action === 'delete' && 'delete your account'}?
      </h2>
      <div className={s.wrapper}>
        {action === 'logout' && (
          <Button className='btn__secondary-logout' onClick={onLogout} type='button' text='Yes' />
        )}
        {action === 'delete' && (
          <Button
            className='btn__secondary-logout'
            onClick={deleteAccount}
            type='button'
            text='Yes'
          />
        )}
        <Button className='btn__primary-logout' onClick={onCancelLogout} type='button' text='No' />
      </div>
    </div>
  );
}

export default ModalLogoutAndDelete;
