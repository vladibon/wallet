import AccountImg from '../../images/account.jpeg';
import Icons from 'images/sprite.svg';
import { MdOutlineFileUpload, MdWork, MdStars } from 'react-icons/md';
import Button from 'components/Button';

import s from './Account.module.css';

function Account() {
  return (
    <form className={s.accountForm}>
      <div className={s.accountForm__bgColor}></div>
      <h2 className={s.accountTitle}>Account settings</h2>

      <div className={s.accountForm__wrapper}>
        <div>
          <img className={s.accountImg} src={AccountImg} width='200' height='220' alt='Avatar' />
          <label className={s.inputFile__button}>
            <input className={s.inputFile} type='file' name='foto'></input>
            <div className={s.inputFile__wrapper}>
              <span className={s.inputFile__iconWrapper}>
                <MdOutlineFileUpload className={s.inputFile__icon} />
              </span>
              <span className={s.inputFile__title}>upload photo</span>
            </div>
          </label>
        </div>

        <div>
          <p className={s.subscription__wrapper}>
            <MdWork />
            <span className={s.subscriptionTitle}>Regular subscription</span>
          </p>

          <div>
            <label className={s.accountLabel}>
              <input
                className={`${s.accountInput} ${s.accountInput__marginBottom}`}
                placeholder='Name'
                // onChange={handleChange}
                name='name'
                // value={name}
                autoFocus
                autoComplete='false'
              ></input>
              <button className={s.accountBtn__update}>update</button>
              <div className={s.accountPlaceholder}>
                <div className={s.accountPlaceholder__iconWrapper}>
                  <svg width='21' height='16'>
                    <use href={`${Icons}#icon-account_box`} />
                  </svg>
                  <span className={s.accountPlaceholder__title}>Name</span>
                </div>
              </div>
            </label>
          </div>

          <div>
            <label className={s.accountLabel}>
              <input
                className={s.accountInput}
                placeholder='E-mail'
                // onChange={handleChange}
                name='email'
                // value={email}
                autoFocus
                autoComplete='false'
              ></input>
              <button className={s.accountBtn__update}>update</button>
              <div className={s.accountPlaceholder}>
                <div className={s.accountPlaceholder__iconWrapper}>
                  <svg width='21' height='16'>
                    <use href={`${Icons}#icon-email`} />
                  </svg>
                  <span className={s.accountPlaceholder__title}>E-mail</span>
                </div>
              </div>
            </label>
          </div>

          <div className={s.btn__wrapper}>
            <Button className='btn__primary' type='button' text='try premium' />
            <Button className='btn__red' type='button' text='delete account' />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Account;
