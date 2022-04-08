import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import s from './DashboardPage.module.css';

import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency';

const HomeTab = lazy(() => import('components/HomeTab' /* webpackChunkName: "home-tab" */));

const DiagramTable = lazy(() =>
  import('components/DiagramTable' /* webpackChunkName: "diagram-table" */),
);

function DashboardPage() {
  return (
    <>
      <Header />
      <main className={`container ${s.dashboardPage}`}>
        <div className={s.dashboardPage__opacity}></div>
        <div className={s.dashboardPage__section}>
          <div className={s.dashboardPage__subSection}>
            <Navigation />
            <Balance />
          </div>
          <Currency />
          <Outlet />
        </div>

        <Suspense>
          <Routes>
            <Route path='/' element={<HomeTab />} />
            <Route path='/statistics' element={<DiagramTable />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default DashboardPage;
