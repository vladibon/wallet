import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import s from './Header.module.css';
import { useDispatch } from 'react-redux';

import { openModalLogout } from 'redux/index';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      <Logo />

      <div className={s.nav}>
        <div className={s.name}>Name</div>
        <div className={s.logout} onClick={() => dispatch(openModalLogout())}>
          <svg className={s.logoutIcon}>
            <use href={`${Icons}#icon-logout`} />
          </svg>
          <div className={s.logoutText}>Log out</div>
        </div>
      </div>
    </header>
  );
}
