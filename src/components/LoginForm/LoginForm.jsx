import s from './LoginForm.module.css';
import React from 'react';
import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import { validate } from 'indicative/validator';

import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { useLogInUserMutation, setUser } from 'redux/index';

export default function LoginForm() {
  const [loginUser, { data, error }] = useLogInUserMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const rules = {
    email: 'required|email',
    password: 'required|min:6|max:16',
  };
  const messages = {
    required: field => `${field} is required`,
    email: 'Enter valid email address',
    min: field => `The ${field} value is too small`,
    max: field => `The ${field} value is too large`,
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
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

  const onLoginSubmit = e => {
    e.preventDefault();
    validate({ email, password }, rules, messages)
      .then(() => {
        const user = { email, password };
        loginUser({ user });
        setEmail('');
        setPassword('');
        console.log(`Congrats you have successfully logged in `);
      })
      .catch(errors => {
        console.log(errors[0].message);
      });
  };

  return (
    <div className={s.authForm}>
      <div className={s.logo}>
        <Logo />
      </div>
      <form className={s.form} onSubmit={onLoginSubmit}>
        <label className={s.authLabel}>
          <input
            className={s.input}
            placeholder='E-mail'
            onChange={handleChange}
            name='email'
            value={email}
          ></input>
          <svg width='21' height='16' className={s.inputIcon}>
            <use href={`${Icons}#icon-email`} />
          </svg>
        </label>

        <label className={s.authLabel}>
          <input
            className={s.input}
            placeholder='Password'
            onChange={handleChange}
            name='password'
            type='password'
            value={password}
          ></input>
          <svg width='16' height='21' className={s.inputIcon}>
            <use href={`${Icons}#icon-lock`} />
          </svg>
        </label>
        <div className={s.wrapper}>
          <Button className='btn__primary' type='submit' text='log in' />
          <Link to='/register' className={s.authLink}>
            <Button className='btn__secondary' type='buttom' text='sign up' />
          </Link>
        </div>
      </form>
    </div>
  );
}
