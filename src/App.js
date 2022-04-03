import { Suspense, lazy } from 'react';
import Loading from 'components/Loading';
import { setUser, resetUser, openModal, closeModal } from './redux';
import { useDispatch, useSelector } from 'react-redux';

const DashboardPage = lazy(() =>
  import('pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);

function App() {
  // const state = useSelector(state => state);
  const { isModalOpen } = useSelector(state => state.global);
  const dispatch = useDispatch();
  const set = () => {
    // console.log(state);
    dispatch(setUser({ user: { name: 'uuu', email: '@jhh' }, token: 'j8d8d8s8ds' }));
  };

  return (
    <Suspense fallback={<Loading />}>
      <DashboardPage />
      <button onClick={set}>set</button>
      <button onClick={() => dispatch(resetUser())}>reset</button>
      <button onClick={() => dispatch(openModal())}>show</button>
      <button onClick={() => dispatch(closeModal())}>hide</button>
      {isModalOpen && <p>MODAL</p>}
    </Suspense>
  );
}

export default App;
