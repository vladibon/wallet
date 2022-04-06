import { useDispatch } from 'react-redux';
import { openModalAddTransaction } from 'redux/index';
import Header from 'components/Header';
import HomeTab from 'components/HomeTab';
import Currency from 'components/Currency';
import { DoughnutChart } from 'components/DoughnutChart/DoughnutChart';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import transactions from 'components/HomeTab/hometab.json';
import s from './DashboardPage.module.css';

function DashboardPage() {
  const dispatch = useDispatch();

  return (
    <main className={s.main}>
      <Header />
      <Currency />
      <ButtonAddTransactions onClick={() => dispatch(openModalAddTransaction())} />
      <HomeTab items={transactions} />
      <DoughnutChart />
    </main>
  );
}

export default DashboardPage;
