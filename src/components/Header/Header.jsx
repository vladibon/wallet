import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import s from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { selectUserName, selectAvatarURL } from 'redux/selectors';
import { openModalLogout } from 'redux/index';

import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const name = useSelector(selectUserName);
  const userAvatar = useSelector(selectAvatarURL);
  const dispatch = useDispatch();

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 450px)' });

  return (
    <header className={s.header__bg}>
      <div className={`container ${s.header}`}>
        <Link to='/home'>
          <Logo />
        </Link>

        <div className={s.nav}>
          <nav>
            <NavLink className={s.nav__wrapper} to='account'>
              <img
                className={s.userAvatar}
                src={`https://wallet-proj.osc-fr1.scalingo.io/${userAvatar}`}
                width='50'
                height='50'
                alt='Avatar'
              />
              {isTabletOrDesktop && <div className={s.name}>{name}</div>}
            </NavLink>
          </nav>
          <button className={s.logoutBtn} onClick={() => dispatch(openModalLogout())}>
            <svg className={s.logoutIcon}>
              <use href={`${Icons}#icon-logout`} />
            </svg>
            <div className={s.logoutText}>Log out</div>
          </button>
        </div>
      </div>
    </header>
  );
}
