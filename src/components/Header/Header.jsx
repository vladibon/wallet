import {Logo} from 'components/Logo/Logo';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <Logo />

      <div className={s.nav}>
        Name | Log out
      </div>
    </header>
  );
}
