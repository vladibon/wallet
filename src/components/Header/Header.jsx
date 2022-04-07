import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import s from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserName } from 'redux/selectors';
import { openModalLogout } from 'redux/index';

export default function Header() {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      <Logo />

      <div className={s.nav}>
        <div className={s.name}>{name}</div>
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
