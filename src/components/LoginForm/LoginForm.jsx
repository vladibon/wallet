import s from './LoginForm.module.css';
import React from 'react';
import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';

export default function LoginForm() {
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
          <input className={s.input} placeholder='Пароль' name='password' type='password'></input>
          <svg width='16' height='21' className={s.inputIcon}>
            <use href={`${Icons}#icon-lock`} />
          </svg>
        </label>
        <button className={s.logBtn} type='submit'>
          log in
        </button>
        <button className={s.regBtn} type='submit'>
          sign up
        </button>
      </form>
    </div>
  );
}
