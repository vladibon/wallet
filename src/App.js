import { Suspense, lazy, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import Modal from 'components/Modal';
import ModalAddTransaction from 'components/ModalAddTransaction';
import { setUser, resetUser, openModal, closeModal } from './redux';

const LoginPage = lazy(() => import('components/LoginPage'));
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

  // Andrii
  const [showModalAddTransaction, setShowModalAddTransaction] = useState(false);
  const toggleModalAddTransaction = () => {
    setShowModalAddTransaction(showModalAddTransaction => !showModalAddTransaction);
  };

  return (
    <Suspense fallback={null}>
      <LoginPage />
      <DashboardPage />
      <button onClick={set}>set</button>
      <button onClick={() => dispatch(resetUser())}>reset</button>
      <button onClick={() => dispatch(openModal())}>show</button>
      <button onClick={() => dispatch(closeModal())}>hide</button>
      {isModalOpen && <p>MODAL</p>}

      {/* Andrii */}
      <ButtonAddTransactions onClick={toggleModalAddTransaction} />
      {showModalAddTransaction && (
        <Modal onClose={toggleModalAddTransaction}>
          <ModalAddTransaction
            onClose={toggleModalAddTransaction}
            onSubmit={(amount, date) => console.log(`Amount-${amount}. Date-${date}`)}
          />
        </Modal>
      )}
    </Suspense>
  );
}

export default App;
