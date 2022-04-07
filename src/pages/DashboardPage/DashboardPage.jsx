import { useDispatch } from 'react-redux';
import { openModalAddTransaction } from 'redux/index';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import HomeTab from 'components/HomeTab';
import transactions from 'components/HomeTab/hometab.json';
import { DoughnutChart } from 'components/DoughnutChart/DoughnutChart';
import s from './DashboardPage.module.css';

function DashboardPage() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />

      <main className={s.main}>
        <Navigation />
        <ButtonAddTransactions onClick={() => dispatch(openModalAddTransaction())} />
        <HomeTab items={transactions} />
        <DoughnutChart />
      </main>
    </>
  );
}

export default DashboardPage;
