import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLogInUserMutation, setAuth, setUser, setError } from 'redux/index';
import Button from 'components/Button';
import s from './LoginDefaultUser.module.css';

export default function LoginDefaultUser() {
  const [loginUser, { data, error, isLoading }] = useLogInUserMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      try {
        dispatch(setAuth({ token: data.token }));
        dispatch(setUser(data.user));
      } catch (error) {
        dispatch(setError(error));
      }
    }
  }, [data, dispatch, error]);

  const onLogin = () => {
    try {
      loginUser({ user: { email: 'guest@mail.com', password: 'pAp5QdfFUqmwATk' } });
    } catch (error) {
      dispatch(setError(error));
    }
  };

  return (
    <div className={s.buttonContainer}>
      <Button
        className='btn__primary'
        type='button'
        text='Login as a guest'
        isLoading={isLoading}
        onClick={onLogin}
      />
    </div>
  );
}
