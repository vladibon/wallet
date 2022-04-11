import Logo from 'components/Logo';
import Icons from 'images/sprite.svg';
import s from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUserName } from 'redux/selectors';
import { openModalLogout } from 'redux/index';

export default function Header() {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <header className={s.header__bg}>
      <div className={`container ${s.header}`}>
        <Link to='/home'>
          <Logo /> 
        </Link>

        <div className={s.nav}>
          <div className={s.name}>{name}</div>
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
