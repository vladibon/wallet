import { Suspense, lazy } from 'react';
import Loading from 'components/Loading';
import Header from 'components/Header';
import './App.module.css';

const LoginForm = lazy(() => import('components/LoginForm'));
const DashboardPage = lazy(() =>
  import('pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <LoginForm />
      <DashboardPage />
    </Suspense>
  );
}

export default App;
