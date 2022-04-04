import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { store } from 'redux/store';
import { useGetCurrenthUserQuery, setUser } from 'redux/index';

import Modal from 'components/Modal';
import ModalLogout from 'components/ModalLogout';
import ModalAddTransaction from 'components/ModalAddTransaction';

const DashboardPage = lazy(() =>
  import('pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);

function App() {
  const { isModalLogoutOpen, isModalAddTransactionOpen } = useSelector(state => state.global);
  const dispatch = useDispatch();
  const { data, isFetching } = useGetCurrenthUserQuery();

  useEffect(() => {
    const token = store.getState().auth?.token;

    if (!token && !data) return;
    else dispatch(setUser({ user: data, token }));
  }, [data, dispatch]);

  return (
    <>
      <Suspense fallback={null}>
        <DashboardPage />
      </Suspense>

      {isModalLogoutOpen && <Modal children={<ModalLogout />} />}
      {isModalAddTransactionOpen && (
        <Modal
          children={
            <ModalAddTransaction
              onSubmit={(amount, date) => console.log(`Amount-${amount}. Date-${date}`)}
            />
          }
        />
      )}
    </>
  );
}

export default App;
