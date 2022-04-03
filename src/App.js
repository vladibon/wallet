import { Suspense, lazy } from 'react';
import Loading from 'components/Loading';
import Header from 'components/Header';

const DashboardPage = lazy(() =>
  import('pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <DashboardPage />
    </Suspense>
  );
}

export default App;
