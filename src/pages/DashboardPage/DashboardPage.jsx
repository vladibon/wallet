import s from './DashboardPage.module.css';

import Header from 'components/Header';
import Balance from 'components/Balance';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import HomeTab from 'components/HomeTab';

import transactions from 'components/HomeTab/hometab.json';

import { DoughnutChart } from 'components/DoughnutChart/DoughnutChart';

function DashboardPage() {
  return (
    <>
      <Header />
      <main className={`container ${s.dashboardPage}`}>
        <div className={s.dashboardPage__section}>
          <Balance />
        </div>
        <HomeTab items={transactions} />
        <ButtonAddTransactions />
        <DoughnutChart />
      </main>
    </>
  );
}

export default DashboardPage;
