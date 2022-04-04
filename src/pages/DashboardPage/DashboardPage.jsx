import s from './DashboardPage.module.css';
import { useDispatch } from 'react-redux';

import { openModalAddTransaction } from 'redux/index';
import Header from 'components/Header';
import ButtonAddTransactions from 'components/ButtonAddTransactions';

function DashboardPage() {
  const dispatch = useDispatch();

  return (
    <main className={s.main}>
      <Header />
      <ButtonAddTransactions onClick={() => dispatch(openModalAddTransaction())} />
    </main>
  );
}

export default DashboardPage;
