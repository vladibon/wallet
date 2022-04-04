import Currency from 'components/Currency';
import s from './DashboardPage.module.css';

function DashboardPage() {
  return <main className={s.main}>
    <Currency></Currency>
  </main>;
}

export default DashboardPage;
