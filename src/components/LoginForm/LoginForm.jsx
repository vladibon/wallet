import s from './LoginForm.module.css';
import React from 'react';
import Logo from 'components/Logo';

export default function LoginForm() {
  return (<div className={s.authForm}>
          <div className ={s.logo}><Logo/></div>
          <form className={s.form}>
            <label className={s.authLabel}>
              <input className={s.input} placeholder='E-mail' name='email'></input>
              <svg width='21' height='16' className={s.inputIcon}>
                <path
                  d='M18 0H2C.9 0 .00999999.9.00999999 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V2l8 5 8-5v2Z'
                  fill='#E0E0E0'
                />
              </svg>
            </label>

            <label className={s.authLabel}>
              <input
                className={s.input}
                placeholder='Пароль'
                name='password'
                type='password'
              ></input>
              <svg width='16' height='21' className={s.inputIcon}>
                <path
                  d='M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm3.1-9H4.9V5c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2Z'
                  fill='#E0E0E0'
                />
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
