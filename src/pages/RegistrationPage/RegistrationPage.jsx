import React from 'react'
import styles from "./RegistrationPage.module.css"

const RegistrationPage = () => {
  return (
    <div className={styles.RegistrationPage}>
      <div className={styles.imgContainer}>

      <div className={styles.imgFrame}>
        </div>
        <div>
<span className={styles.finApp}>Finance App</span>
        </div>
      </div>
        <div className={styles.registrationContainer}>
      <div className={styles.titleWallet}>
      <h2 className={styles.header}>Wallet</h2>
      <svg className={styles.logoWallet}>
            <path fill="#24cca7"  d="M3.755 7.619l16.211-4.537-0.858-1.779c-0.562-1.157-1.932-1.634-3.060-1.058l-14.513 7.375h2.219z"></path>
            <path fill="#24cca7"  d="M24.813 3.048c-0.195 0-0.391 0.029-0.586 0.087l-15.012 4.484h18.431l-0.693-2.779c-0.266-1.083-1.163-1.793-2.14-1.793z"></path>
            <path fill="#4a56e2"  d="M28.36 8.573h-26.559c-0.568 0-1.074 0.26-1.405 0.67-0.151 0.189-0.266 0.406-0.331 0.645-0.040 0.15-0.065 0.307-0.065 0.467v19.862c0 0.984 0.805 1.783 1.797 1.783h26.559c0.992 0 1.797-0.799 1.797-1.783v-4.973h-10.662c-1.685 0-3.055-1.358-3.055-3.030v-3.964c0-0.82 0.331-1.565 0.866-2.111 0.474-0.485 1.11-0.813 1.822-0.895 0.119-0.014 0.241-0.021 0.363-0.021h10.665v-4.867c0.004-0.984-0.801-1.783-1.793-1.783z"></path>
            <path fill="#4a56e2"  d="M31.414 16.926c-0.18-0.164-0.392-0.289-0.629-0.371-0.183-0.061-0.377-0.096-0.582-0.096h-10.712c-0.992 0-1.797 0.799-1.797 1.783v3.968c0 0.984 0.805 1.783 1.797 1.783h10.712c0.205 0 0.399-0.036 0.582-0.096 0.237-0.078 0.449-0.207 0.629-0.371 0.359-0.324 0.586-0.795 0.586-1.316v-3.968c0-0.521-0.226-0.991-0.586-1.316zM23.243 20.58c0 0.492-0.402 0.891-0.898 0.891h-0.596c-0.496 0-0.898-0.399-0.898-0.891v-0.592c0-0.285 0.133-0.538 0.345-0.699 0.154-0.118 0.345-0.193 0.553-0.193h0.596c0.496 0 0.898 0.399 0.898 0.891v0.592z"></path>

      </svg>
      </div>
     
      <form className={styles.form} >
        <label className={styles.authLabel}>
           <input
                 className={styles.input}
                placeholder="E-mail"
                name="email"
          ></input>
          <svg width="24" height="24" className={styles.inputIcon}>                                  <use href="./images/icons.svg#icon-Vector-2"></use>
<path  d="M18 0H2C.9 0 .00999999.9.00999999 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V2l8 5 8-5v2Z" fill="#E0E0E0"
                />
          </svg>
        </label>
        <label className={styles.authLabel}>
         <input
                 className={styles.input}
                placeholder="Пароль"
                name="password"
                type="password"
          ></input>
          <svg width="24" height="24" className={styles.inputIcon}>
          <path
                  d="M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm3.1-9H4.9V5c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2Z"
                  fill="#E0E0E0"
                />
          </svg>
        </label>
        <label className={styles.authLabel}>
          <input
                 className={styles.input}
                placeholder="Подтвердите пароль"
                name="password"
                type="password"
          ></input>
           <svg width="24" height="24" className={styles.inputIcon}>
          <path
                  d="M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm3.1-9H4.9V5c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2Z"
                  fill="#E0E0E0"
                />
          </svg>
        </label>
        <label className={styles.authLabel}>
         <input
                  className={styles.input}
                placeholder="Ваше имя"
                name="name"
                type="name"
          ></input>
              <svg width="26" height="26" className={styles.inputIcon}>
       
<path fill="#e0e0e0"  d="M4.667 6.667v18.667c0 1.467 1.187 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667h-18.667c-1.48 0-2.667 1.2-2.667 2.667zM20.667 12c0 2.213-1.787 4-4 4s-4-1.787-4-4c0-2.213 1.787-4 4-4s4 1.787 4 4zM8.667 22.667c0-2.667 5.333-4.133 8-4.133s8 1.467 8 4.133v1.333h-16v-1.333z"></path>
</svg>
        </label>
        <div className={styles.btnList}>

          <button className={styles.btnRegistr}>регистрация</button>
          <button className={styles.btnEnter}>вход</button>
        </div>
       
          </form>
          </div>
      
      </div>
  )
}

export default RegistrationPage
