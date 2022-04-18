import s from './RegisterForm.module.css';
import React from 'react';
import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useCreateUserMutation, setUser, setError } from 'redux/index';
import { validate } from 'indicative/validator';
import { toast } from 'react-toastify';

const rules = {
  email: 'required|email',
  password: 'required|min:6|max:16|confirmed',
  password_confirmation: 'required|min:6|max:16',
  name: 'required|string|min:1|max:12',
};

const messages = {
  required: field => `${field} is required`,
  email: 'Enter valid email address',
  min: field => `The ${field} is too short`,
  max: field => `The ${field} is too long`,
  confirmed: 'Entered passwords do not match',
  'password.min': 'Password is too short',
};

function protectionLine(password) {
  const passLength = password.length;
  if (passLength >= 1 && passLength < 7) {
    return s.lowProtection;
  }
  if (passLength >= 7 && passLength < 10) {
    return s.middleProtection;
  }
  if (passLength >= 10) {
    return s.strongProtection;
  }
  return s.protection;
}

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState({ field: null, message: '' });
  const [createUser, { data, error, isLoading }] = useCreateUserMutation();
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    setValidationError({ field: null, message: '' });

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
      resetForm();
    } else if (error) {
      if (error.status >= 500 || error.status === 'FETCH_ERROR') dispatch(setError(500));
      toast.error(error.data?.message || 'your request failed');
    }
  }, [data, dispatch, error]);

  const onRegisterSubmit = e => {
    e.preventDefault();
    validate({ email, password, password_confirmation, name }, rules, messages)
      .then(() => {
        const user = { name, email, password };
        createUser({ user });
      })
      .catch(errors => {
        setValidationError({ field: errors[0].field, message: errors[0].message });
      });
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  const { message, field } = validationError;

  return (
    <div className={s.authForm}>
      <div className={s.logo}>
        <Logo />
      </div>
      <form className={s.form} onSubmit={onRegisterSubmit}>
        {field && <p className={s[`${field}Error`]}>{message}</p>}
        <label className={s.authLabel}>
          <input
            className={s.input}
            placeholder='E-mail'
            name='email'
            onChange={handleChange}
            value={email}
            autoFocus
            autoComplete='off'
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
            value={password_confirmation}
          ></input>
          <svg width='16' height='21' className={s.inputIcon}>
            <use href={`${Icons}#icon-lock`} />
          </svg>
        </label>
        <div className={protectionLine(password)}></div>
        <label className={s.authLabel}>
          <input
            className={s.input}
            placeholder='Your name'
            onChange={handleChange}
            name='name'
            value={name}
            autoComplete='off'
          ></input>
          <svg width='18' height='18' className={s.inputIcon}>
            <use href={`${Icons}#icon-account_box`} />
          </svg>
        </label>
        <div className={s.wrapper}>
          <Button className='btn__primary' type='submit' text='sign up' isLoading={isLoading} />
          <Link to='/login' className={s.authLink}>
            <Button className='btn__secondary' type='buttom' text='log in' />
          </Link>
        </div>
      </form>
    </div>
  );
}
