import AccountImg from '../../images/account.jpeg';
import Icons from 'images/sprite.svg';
import Button from 'components/Button';

import s from './Account.module.css';

function Account() {
  return (
    <form className={s.accountForm}>
      <h2 className={s.accountTitle}>Account settings</h2>

      <img className={s.accountImg} src={AccountImg} width='200' height='220' alt='Transactions' />
      <label>
        <input type='file' name='foto'></input>
      </label>

      <svg className={s.subscriptionIcon} width='20' height='20'>
        <use href='../../images/subscription.svg' />
      </svg>
      <p className={s.subscriptionTite}>Premiun subscription</p>

      <label className={s.accountLabel}>
        <input
          className={s.accountInput}
          placeholder='Name'
          // onChange={handleChange}
          name='name'
          // value={name}
          autoFocus
          autoComplete='false'
        ></input>
        <div className={s.accountPlaceholder}>
          <svg width='21' height='16'>
            <use href={`${Icons}#icon-account_box`} />
          </svg>
          <span className={s.accountPlaceholder__title}>Name</span>
        </div>
      </label>

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
        <div className={s.accountPlaceholder}>
          <svg width='21' height='16'>
            <use href={`${Icons}#icon-email`} />
          </svg>
          <span className={s.accountPlaceholder__title}>E-mail</span>
        </div>
      </label>

      <div className={s.wrapper}>
        <Button className='btn__primary' type='button' text='try premium' />
        <Button className='btn__red' type='button' text='delete account' />
      </div>
    </form>
  );
}

export default Account;
