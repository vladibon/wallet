import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <Logo />

      <div className={s.nav}>
        <div className={s.name}>
          Name
        </div>
        <div className={s.logout}>
          <svg className={s.logoutIcon}>
            <use href={`${Icons}#icon-logout`} />
          </svg>
          <div className={s.logoutText}>
            Log out
          </div>
        </div>
      </div>
    </header>
  );
}
