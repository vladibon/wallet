import s from './Logo.module.css';
import Icons from 'images/sprite.svg';

export default function Logo() {
  return (
    <span className={s.logo}>
      <svg className={s.logoIcon}>
        <use href={`${Icons}#icon-logo`} />
      </svg>
      <span className={s.logoText}>Wallet</span>
    </span>
  );
}
