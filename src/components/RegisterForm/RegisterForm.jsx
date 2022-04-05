import s from './RegisterForm.module.css';
import React from 'react';
import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';

export default function RegisterForm() {
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
          <input
            id='inputcheck'
            className={s.input}
            placeholder='Password'
            name='password'
            type='password'
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
          ></input>
          <svg width='16' height='21' className={s.inputIcon}>
            <use href={`${Icons}#icon-lock`} />
          </svg>
        </label>
        <label className={s.authLabel}>
          <input className={s.input} placeholder='Your name' name='name'></input>
          <svg width='18' height='18' className={s.inputIcon}>
            <use href={`${Icons}#icon-account_box`} />
          </svg>
        </label>
        <button className={s.regBtn} type='button'>
          sign up
        </button>
        <button className={s.logBtn} type='button'>
          log in
        </button>
      </form>
    </div>
  );
}
