import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import deLocale from 'date-fns/locale/de';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useFetchCurrentUser } from 'hooks/useFetchCurrentUser';

import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';

import Modal from 'components/Modal';
import ModalLogoutAndDelete from 'components/ModalLogoutAndDelete';
import ModalAddTransaction from 'components/ModalAddTransaction';
import {
  selectIsModalLogoutOpen,
  selectIsModalAddTransactionOpen,
  selectIsModalDeleteUserOpen,
} from 'redux/selectors';

import Spinner from 'components/Spinner';
import Loader from 'components/Loader';
import InternalServerErrorPage from 'pages/InternalServerErrorPage';

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

function App() {
  const isFetching = useFetchCurrentUser();

  const showModalAddTransaction = useSelector(selectIsModalAddTransactionOpen);
  const showModalLogout = useSelector(selectIsModalLogoutOpen);
  const showModalDeleteUser = useSelector(selectIsModalDeleteUserOpen);

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

          {showModalLogout && <Modal children={<ModalLogoutAndDelete action='logout' />} />}
          {showModalDeleteUser && <Modal children={<ModalLogoutAndDelete action='delete' />} />}
          {showModalAddTransaction && (
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={deLocale}>
              <Modal children={<ModalAddTransaction />} />
            </LocalizationProvider>
          )}

          <ToastContainer autoClose={3000} theme='colored' limit={2} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
