import s from './DashboardPage.module.css';
// import { Routes, Route } from 'react-router-dom';

import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import HomeTab from 'components/HomeTab';
import { DoughnutChart } from 'components/DoughnutChart/DoughnutChart';
import DiagramTable from 'components/DiagramTable';

function DashboardPage() {
  return (
    <>
      <Header />

      <main className={s.main}>
        <Navigation />
        <ButtonAddTransactions />
        <HomeTab />
        <Balance />
        <Currency />
        <DoughnutChart />
        <DiagramTable />
        {/* <Routes>
          <Route path='' element={<HomeTab />} />
          <Route path='statistics' element={<DiagramTab />} />
          <Route path='currency' element={<Currency />} />
        </Routes> */}
      </main>
    </>
  );
}

export default DashboardPage;
