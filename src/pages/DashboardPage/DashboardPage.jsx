import s from './DashboardPage.module.css';
import { useDispatch } from 'react-redux';

import { openModalAddTransaction } from 'redux/index';
import Header from 'components/Header';
import ButtonAddTransactions from 'components/ButtonAddTransactions';

import HomeTab from 'components/HomeTab';

import transactions from 'components/HomeTab/hometab.json';

import { DoughnutChart } from 'components/DoughnutChart/DoughnutChart';

import DiagramTable from 'components/DiagramTable'

function DashboardPage() {
  const dispatch = useDispatch();

  return (
    <main className={s.main}>
      <Header />
      <ButtonAddTransactions onClick={() => dispatch(openModalAddTransaction())} />
      <HomeTab items={transactions} />
      <DoughnutChart />
      <DiagramTable/>
    </main>
  );
}

export default DashboardPage;
