import { Suspense, lazy } from 'react';
import Loading from 'components/Loading';
// import { setUser, resetUser } from './redux/auth/auth-slice';
// import { useDispatch } from 'react-redux';

const DashboardPage = lazy(() =>
  import('pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);

function App() {
  // const dispatch = useDispatch();
  // const getContact = () => {
  //   dispatch(setUser({ user: { name: 'uuu', email: '@jhh' }, token: 'j8d8d8s8ds' }));
  // };
  // getContact();
  return (
    <Suspense fallback={<Loading />}>
      <DashboardPage />
    </Suspense>
  );
}

export default App;
