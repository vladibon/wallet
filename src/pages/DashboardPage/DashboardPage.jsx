import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import HomeTab from 'components/HomeTab';
import transactions from 'components/HomeTab/hometab.json';
import { DoughnutChart } from 'components/DoughnutChart/DoughnutChart';
import s from './DashboardPage.module.css';

import DiagramTable from 'components/DiagramTable';

function DashboardPage() {
  return (
    <>
      <Header />

      <main className={s.main}>
        <Navigation />
        <ButtonAddTransactions />
        <HomeTab items={transactions} />
        <Balance />
        <Currency />
        <DoughnutChart />
        <DiagramTable />
      </main>
    </>
  );
}

export default DashboardPage;
