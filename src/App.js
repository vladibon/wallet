import { Suspense, lazy } from 'react';
import Loading from 'components/Loading';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';

const DashboardPage = lazy(() =>
  import('pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RegistrationPage />
      <DashboardPage />
    </Suspense>
  );
}

export default App;
