import s from './RegisterPage.module.css';
import React, { useState, useEffect } from 'react';

import RegisterForm from 'components/RegisterForm';
import LoginTestUser from 'components/LoginTestUser';

export default function RegisterPage() {
  const [showTestMode, setShowTestMode] = useState(false);

  useEffect(() => {
    const onComponentMount = setTimeout(() => setShowTestMode(true), 2000);

    return () => clearTimeout(onComponentMount);
  }, []);

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
      <LoginTestUser showTestMode={showTestMode} onClose={() => setShowTestMode(false)} />
    </div>
  );
}
