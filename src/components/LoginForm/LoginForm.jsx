import s from './LoginForm.module.css';
import React from 'react';
import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { useLogInUserMutation, setUser } from 'redux/index';

export default function LoginForm() {
  const [loginUser, { data, error }] = useLogInUserMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    } else if (error) {
      console('Your request failed');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const onLoginSubmit = e => {
    const user = { email: 'eee@gmail.com', password: '1234567' };
    loginUser({ user });
  };

  return (
    <div className={s.authForm}>
      <div className={s.logo}>
        <Logo />
      </div>
      <form className={s.form}>
        <label className={s.authLabel}>
          <input className={s.input} placeholder='E-mail' name='email'></input>
          <svg width='21' height='16' className={s.inputIcon}>
            <use href={`${Icons}#icon-email`} />
          </svg>
        </label>

        <label className={s.authLabel}>
          <input className={s.input} placeholder='Password' name='password' type='password'></input>
          <svg width='16' height='21' className={s.inputIcon}>
            <use href={`${Icons}#icon-lock`} />
          </svg>
        </label>
        <button className={s.logBtn} type='button' onClick={onLoginSubmit}>
          log in
        </button>
        <Link to='/register' className={s.authLink}>
          <button className={s.regBtn} type='button'>
            sign up
          </button>
        </Link>
      </form>
    </div>
  );
}
