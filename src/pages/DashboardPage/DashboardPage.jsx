import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import s from './DashboardPage.module.css';

import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import HomeTab from 'components/HomeTab';

import Currency from 'components/Currency';
import ButtonAddTransactions from 'components/ButtonAddTransactions';

import { DoughnutChart } from 'components/DoughnutChart/DoughnutChart';

import DiagramTable from 'components/DiagramTable';

function DashboardPage() {
  return (
    <>
      <Header />
      <main className={`container ${s.dashboardPage}`}>
        <div className={s.dashboardPage__section}>
          <Navigation />
          <Balance />
          <Outlet />
          <Currency />
        </div>

        <Suspense>
          <Routes>
            <Route path='/' element={<HomeTab />} />
            <Route path='/stats' element={<DoughnutChart />} />
          </Routes>
        </Suspense>

        <DiagramTable />
      </main>
    </>
  );
}

export default DashboardPage;
