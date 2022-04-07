import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import s from './DashboardPage.module.css';

import Header from 'components/Header';
import Balance from 'components/Balance';
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
          <Outlet />
        </div>

        <Suspense>
          <Routes>
            <Route path='hometab' element={<HomeTab items={transactions} />} />
            <Route path='diagram' element={<DoughnutChart />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default DashboardPage;
