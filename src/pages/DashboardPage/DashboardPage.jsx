import s from './DashboardPage.module.css';
import { useDispatch } from 'react-redux';

import { openModalAddTransaction } from 'redux/index';
import Header from 'components/Header';
import ButtonAddTransactions from 'components/ButtonAddTransactions';

import HomeTab from 'components/HomeTab';

import transactions from 'components/HomeTab/hometab.json';
import Balance from 'components/Balance';

import { DoughnutChart } from 'components/DoughnutChart/DoughnutChart';

function DashboardPage() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main className={`container ${s.dashboardPage}`}>
        <div className={s.dashboardPage__section}>
          <Balance />
        </div>
        <HomeTab items={transactions} />
        <ButtonAddTransactions onClick={() => dispatch(openModalAddTransaction())} />
        <DoughnutChart />
      </main>
    </>
  );
}

export default DashboardPage;
