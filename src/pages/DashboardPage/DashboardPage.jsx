import Header from 'components/Header';
import HomeTab from 'components/HomeTab';

import s from './DashboardPage.module.css';
import transactions from 'components/HomeTab/hometab.json';

import { DoughnutChart } from 'components/DoughnutChart/DoughnutChart';
function DashboardPage() {

  return (
    <main className={s.main}>
      <Header />
      <HomeTab items={transactions} />
     <DoughnutChart />
    </main>
  );
}

export default DashboardPage;
