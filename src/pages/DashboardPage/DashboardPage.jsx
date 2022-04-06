import s from './DashboardPage.module.css';

import Header from 'components/Header';
import Balance from 'components/Balance';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import HomeTab from 'components/HomeTab';

import transactions from 'components/HomeTab/hometab.json';

import { DoughnutChart } from 'components/DoughnutChart/DoughnutChart';

function DashboardPage() {
  return (
    <main className={s.main}>
      <Header />
      <ButtonAddTransactions />
      <HomeTab items={transactions} />
      <Balance />
      <DoughnutChart />
    </main>
  );
}

export default DashboardPage;
