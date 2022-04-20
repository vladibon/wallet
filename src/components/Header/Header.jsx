import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { MdStars } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import s from './Header.module.css';

import { selectUserName, selectAvatarURL, selectSubscription } from 'redux/selectors';
import { openModalLogout } from 'redux/index';

export default function Header() {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const userAvatar = useSelector(selectAvatarURL);
  const userSubscription = useSelector(selectSubscription);

  let isPremium = userSubscription === 'premium';
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
              <div className={s.userAvatarWrapper}>
                <img className={s.userAvatar} src={userAvatar} alt='Avatar' />
                {isPremium && <MdStars className={s.premiumIcon} />}
              </div>
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
