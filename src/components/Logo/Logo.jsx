import s from './Logo.module.css';
import { ReactComponent as ReactSprite } from 'images/sprite.svg';

export function Logo() {
  return (
    <span className={s.logo}>
      <svg className={s.logoIcon}>
        <use href='#icon-logo'></use>
      </svg>
      <span className={s.logoText}>Wallet</span>
      <ReactSprite />
    </span>
  );
}
