import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Icons from 'images/sprite.svg';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink
        to=''
        className={({ isActive }) => (isActive ? classNames(s.link, s.active) : s.link)}
        end
      >
        <div className={s.linkBtn}>
          <div className={s.iconBox}>
            <svg className={s.icon}>
              <use href={`${Icons}#icon-home`} />
            </svg>
          </div>

          <div className={s.textBox}>Home</div>
        </div>
      </NavLink>

      <NavLink
        to='statistics'
        className={({ isActive }) => (isActive ? classNames(s.link, s.active) : s.link)}
        end
      >
        <div className={s.linkBtn}>
          <div className={s.iconBox}>
            <svg className={s.icon}>
              <use href={`${Icons}#icon-statistics`} />
            </svg>
          </div>

          <div className={s.textBox}>Statistics</div>
        </div>
      </NavLink>

      <NavLink
        to='currency'
        className={({ isActive }) =>
          isActive ? classNames(s.link, s.linkNone, s.active) : classNames(s.link, s.linkNone)
        }
      >
        <div className={s.linkBtn}>
          <div className={s.iconBox}>
            <svg className={s.icon}>
              <use href={`${Icons}#icon-currency`} />
            </svg>
          </div>

          <div className={s.textBox}>Currency</div>
        </div>
      </NavLink>
    </nav>
  );
}
