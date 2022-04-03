import { Suspense, lazy, useState } from 'react';
import Loading from 'components/Loading';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import Modal from 'components/Modal';
import ModalAddTransaction from 'components/ModalAddTransaction';

const DashboardPage = lazy(() =>
  import('pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);

function App() {
  const [showModalAddTransaction, setShowModalAddTransaction] = useState(false);

  const toggleModalAddTransaction = () => {
    setShowModalAddTransaction(showModalAddTransaction => !showModalAddTransaction);
  };
  return (
    <>
      <Suspense fallback={<Loading />}>
        <DashboardPage />
      </Suspense>
      <ButtonAddTransactions onClick={toggleModalAddTransaction} />
      {showModalAddTransaction && (
        <Modal onClose={toggleModalAddTransaction}>
          <ModalAddTransaction
            onClose={toggleModalAddTransaction}
            onSubmit={(amount, date) => console.log(`Amount-${amount}. Date-${date}`)}
          />
        </Modal>
      )}
    </>
  );
}

export default App;
