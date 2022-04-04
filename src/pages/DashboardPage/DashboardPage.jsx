import Header from 'components/Header';
import HomeTab from 'components/HomeTab';

import s from './DashboardPage.module.css';
import transactions from 'components/HomeTab/hometab.json';

function DashboardPage() {
  return (
    <main className={s.main}>
      <Header />
      <HomeTab items={transactions} />
    </main>
  );
}

export default DashboardPage;
