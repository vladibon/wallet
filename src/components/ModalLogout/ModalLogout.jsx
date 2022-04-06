import s from './ModalLogout.module.css';

import { useLogOutUserMutation, closeModalWindow, resetUser } from 'redux/index';
import { useDispatch } from 'react-redux';

import Button from 'components/Button';

function ModalLogout() {
  const [logOutUser] = useLogOutUserMutation();
  const dispatch = useDispatch();

  const onLogout = e => {
    logOutUser();
    dispatch(closeModalWindow());
    dispatch(resetUser());
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
