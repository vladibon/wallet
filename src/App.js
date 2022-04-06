import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { store } from 'redux/store';
import { useGetCurrenthUserQuery, setUser } from 'redux/index';

import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';

import Modal from 'components/Modal';
import ModalLogout from 'components/ModalLogout';
import ModalAddTransaction from 'components/ModalAddTransaction';
import { selectIsModalLogoutOpen, selectIsModalAddTransactionOpen } from 'redux/selectors';
import SaveCategoriesHook from 'hooks/SaveCategoriesHook';

const DashboardPage = lazy(() =>
  import('pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);
const LoginPage = lazy(() => import('pages/LoginPage' /* webpackChunkName: "login-page" */));
const RegisterPage = lazy(() =>
  import('pages/RegisterPage' /* webpackChunkName: "register-page" */),
);

function App() {
  const showModalAddTransaction = useSelector(selectIsModalAddTransactionOpen);
  const showModalLogout = useSelector(selectIsModalLogoutOpen);
  const dispatch = useDispatch();
  const { data, isFetching } = useGetCurrenthUserQuery();

  SaveCategoriesHook();

  useEffect(() => {
    const token = store.getState().auth?.token;

    if (!token && !data) return;
    else dispatch(setUser({ user: data, token }));
  }, [data, dispatch]);

  return (
    <>
      {!isFetching ? (
        <>
          <Suspense fallback={null}>
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
              <Route path='*' element={<Navigate to='/home' />} />
            </Routes>
          </Suspense>

          {showModalLogout && <Modal children={<ModalLogout />} />}
          {showModalAddTransaction && <Modal children={<ModalAddTransaction />} />}
        </>
      ) : (
        <p>...loading</p>
      )}
    </>
  );
}

export default App;
