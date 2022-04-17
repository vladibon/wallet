import AccountImg from '../../images/account.jpeg';
import Icons from 'images/sprite.svg';
import Button from 'components/Button';

function Account() {
  return (
    <>
      <h2>Account settings</h2>
      <div>
        <img src={AccountImg} alt='Transactions' />
        <p>+ upload photo</p>
      </div>
      <svg width='20' height='20'>
        <use href={`${Icons}#icon-email`} />
      </svg>
      <p>Premiun subscription</p>
      <input
        placeholder='Name'
        // onChange={handleChange}
        name='name'
        // value={name}
        autoFocus
        autoComplete='false'
      ></input>
      <svg width='21' height='16'>
        <use href={`${Icons}#icon-account_box`} />
      </svg>
      <input
        placeholder='E-mail'
        // onChange={handleChange}
        name='email'
        // value={email}
        autoFocus
        autoComplete='false'
      ></input>
      <svg width='21' height='16'>
        <use href={`${Icons}#icon-email`} />
      </svg>
      <Button className='btn__primary' type='submit' text='quit premium' />
      <Button className='btn__primary' type='submit' text='delete account' />
    </>
  );
}

export default Account;
