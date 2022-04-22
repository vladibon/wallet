import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { TEST_USER } from 'variables';
import { useLogInUserMutation, setAuth, setUser, setError } from 'redux/index';

import Icons from 'images/sprite.svg';
import s from './LoginTestUser.module.css';
import { toast } from 'react-toastify';
import Spinner from 'components/Spinner';

export default function LoginTestUser({ showTestMode, onClose }) {
  const [loginUser, { data, error, isLoading }] = useLogInUserMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (data) {
        dispatch(setAuth({ token: data.token }));
        dispatch(setUser(data.user));
      } else if (error) toast.error('Request failed');
    } catch {
      dispatch(setError(500));
    }
  }, [data, dispatch, error]);

  const onLogin = () => {
    loginUser({ user: TEST_USER });
  };

  return (
    <div className={s[showTestMode ? 'modalContainer' : 'modalContainerHidden']}>
      <div className={s[isLoading ? 'wrapperLoading' : 'wrapper']}>
        <button
          type='button'
          className={s.buttonHide}
          onClick={onClose}
          aria-label='hide test user mode'
        >
          <svg className={s.icon} width='20' height='20'>
            <use href={`${Icons}#icon-close-cross`}></use>
          </svg>
        </button>
        <p className={s.text}>
          Before creating your personal account you can
          <button className={s.button} type='button' onClick={onLogin}>
            run demo verion
          </button>
        </p>
      </div>
      {isLoading && <Spinner size={80} color='white' />}
    </div>
  );
}
