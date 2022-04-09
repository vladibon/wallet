import s from './RegisterForm.module.css';
import React from 'react';
import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useCreateUserMutation, setUser } from 'redux/index';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirm, setPasswordConfirm] = useState('');
  const [createUser, { data, error }] = useCreateUserMutation();
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'password_confirmation':
        return setPasswordConfirm(value);
      case 'name':
        return setName(value);

      default:
        return;
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    } else if (error) {
      console.log('Your request failed');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const onRegisterSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };
    createUser({ user });
    // console.log(createUser({ user }));
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
    // e.target.reset();
  };

  return (
    <div className={s.authForm}>
      <div className={s.logo}>
        <Logo />
      </div>
      <form className={s.form} onSubmit={onRegisterSubmit}>
        <label className={s.authLabel}>
          <input
            className={s.input}
            placeholder='E-mail'
            name='email'
            onChange={handleChange}
            value={email}
          ></input>
          <svg width='21' height='16' className={s.inputIcon}>
            <use href={`${Icons}#icon-email`} />
          </svg>
        </label>

        <label className={s.authLabel}>
          <input
            id='inputcheck'
            className={s.input}
            placeholder='Password'
            name='password'
            type='password'
            onChange={handleChange}
            value={password}
          ></input>
          <svg width='16' height='21' className={s.inputIcon}>
            <use href={`${Icons}#icon-lock`} />
          </svg>
        </label>

        <label className={s.authLabel}>
          <input
            className={s.input}
            placeholder='Confirm password'
            type='password'
            name='password_confirmation'
            onChange={handleChange}
            value={password_confirm}
          ></input>
          <svg width='16' height='21' className={s.inputIcon}>
            <use href={`${Icons}#icon-lock`} />
          </svg>
        </label>
        <label className={s.authLabel}>
          <input
            className={s.input}
            placeholder='Your name'
            onChange={handleChange}
            name='name'
            value={name}
          ></input>
          <svg width='18' height='18' className={s.inputIcon}>
            <use href={`${Icons}#icon-account_box`} />
          </svg>
        </label>
        <button className={s.regBtn} type='submit'>
          sign up
        </button>
        <Link to='/login' className={s.authLink}>
          <button className={s.logBtn} type='button'>
            log in
          </button>
        </Link>
      </form>
    </div>
  );
}
