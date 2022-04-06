import Currency from 'components/Currency';
import Header from 'components/Header';
import s from './DashboardPage.module.css';

function DashboardPage() {
  return (
    <main className={s.main}>
      <Header />
      <Currency />
    </main>
  );
}

export default DashboardPage;
