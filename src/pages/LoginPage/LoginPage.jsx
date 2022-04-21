import s from './LoginPage.module.css';
import React from 'react';
import LoginForm from 'components/LoginForm';
import LoginDefaultUser from 'components/LoginDefaultUser';

export default function LoginPage() {
  return (
    <div className={s.container}>
      <div className={s.heroContainer}>
        <div className={s.loginImage}></div>

        <div className={s.spanContainer}>
          <span className={s.title}>Finance App</span>
        </div>
      </div>
      <div className={s.desktopContainer}>
        <LoginForm />
        <LoginDefaultUser />
      </div>
    </div>
  );
}
