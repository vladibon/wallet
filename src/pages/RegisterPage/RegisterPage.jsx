import s from './RegisterPage.module.css';
import React from 'react';
import RegisterForm from 'components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className={s.container}>
      <div className={s.heroContainer}>
        <div className={s.loginImage}></div>

        <div className={s.spanContainer}>
          <span className={s.title}>Finance App</span>
        </div>
      </div>
      <div className={s.desktopContainer}>
        <RegisterForm />
      </div>
    </div>
  );
}
