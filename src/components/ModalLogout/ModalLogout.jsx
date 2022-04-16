import s from './ModalLogout.module.css';

import {
  useLogOutUserMutation,
  closeModalWindow,
  resetUser,
  resetTransactions,
  resetStatistics,
  resetError,
} from 'redux/index';
import { emptySplitApi } from 'redux/mainAPISlice';
import { useDispatch } from 'react-redux';

import Button from 'components/Button';

function ModalLogout() {
  const [logOutUser] = useLogOutUserMutation();
  const dispatch = useDispatch();

  const onLogout = e => {
    logOutUser();

    dispatch(emptySplitApi.util.resetApiState());
    dispatch(closeModalWindow());
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
      <h2 className={s.title}>Are you sure you want to log out?</h2>
      <div className={s.wrapper}>
        <Button className='btn__secondary-logout' onClick={onLogout} type='button' text='Yes' />
        <Button className='btn__primary-logout' onClick={onCancelLogout} type='button' text='No' />
      </div>
    </div>
  );
}

export default ModalLogout;
