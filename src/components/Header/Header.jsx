import Logo from 'components/Logo';
// import AuthNav from 'components/AuthNav';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <Logo/>
      <div>AuthNav</div>
    </header>
  );
}
