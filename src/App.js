import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FetchCurrentUser } from 'services/FetchCurrentUser';
import { SaveCategories } from 'services/SaveCategories';

import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';

import Modal from 'components/Modal';
import ModalLogout from 'components/ModalLogout';
import ModalAddTransaction from 'components/ModalAddTransaction';
import { selectIsModalLogoutOpen, selectIsModalAddTransactionOpen } from 'redux/selectors';

import Spinner from 'components/Spinner';
import Loader from 'components/Loader';

const DashboardPage = lazy(() =>
  import('pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);
const LoginPage = lazy(() => import('pages/LoginPage' /* webpackChunkName: "login-page" */));
const RegisterPage = lazy(() =>
  import('pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const NotFoundPage = lazy(() =>
  import('pages/NotFoundPage' /* webpackChunkName: "notfound-page" */),
);
const InternalServerErrorPage = lazy(() =>
  import('pages/InternalServerErrorPage' /* webpackChunkName: "server-error-page" */),
);

function App() {
  SaveCategories();
  const isFetching = FetchCurrentUser();

  const showModalAddTransaction = useSelector(selectIsModalAddTransactionOpen);
  const showModalLogout = useSelector(selectIsModalLogoutOpen);

  return (
    <>
      {!isFetching ? (
        <>
          <Suspense
            fallback={
              <div style={{ paddingTop: 'calc((100vh - 70px) / 2)' }}>
                <Spinner size={70} color='blue' />
              </div>
            }
          >
            <Routes>
              <Route
                path='/home/*'
                element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path='/register'
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path='/login'
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route path='/' element={<Navigate to='/home' />} />
              <Route path='/server-error' element={<InternalServerErrorPage />} />
              <Route path='/*' element={<NotFoundPage />} />
            </Routes>
          </Suspense>

          {showModalLogout && <Modal children={<ModalLogout />} />}
          {showModalAddTransaction && <Modal children={<ModalAddTransaction />} />}
          <ToastContainer autoClose={3000} theme='colored' />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
