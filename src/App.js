import { Suspense, lazy } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { openModalLogout, openModalAddTransaction } from './redux';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { store } from 'redux/store';
import ModalBackdrop from 'components/ModalBackdrop';
import ModalLogout from 'components/ModalLogout';
import {
  useCreateUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrenthUserQuery,
  setUser,
} from 'redux/index';

const DashboardPage = lazy(() =>
  import('pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);

function App() {
  // const [logInUser, { data, error }] = useLogInUserMutation();
  const { isModalLogoutOpen, isModalAddTransactionOpen } = useSelector(state => state.global);
  const dispatch = useDispatch();
  const { data, isFetching } = useGetCurrenthUserQuery();

  useEffect(() => {
    const token = store.getState().auth?.token;

    if (!token && !data) return;
    else dispatch(setUser({ user: data, token }));
  }, [data, dispatch]);

  const modal = text => {
    return (
      <div style={{ width: 500, height: 500, backgroundColor: 'white' }}>
        <p>MODAL</p>
        <p>{text}</p>
      </div>
    );
  };

  const login = () => {
    const user = { email: 'aaa@gmail.ru', password: '1234567' };
    // logInUser({ user });
  };
  // useEffect(() => {
  //   if (data) {
  //     dispatch(setUser(data));
  //   } else if (error) {
  //     console.log('Your request failed');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data, error]);

  const onClick = () => {
    dispatch(openModalLogout());
  };

  const onClickS = () => {
    dispatch(openModalAddTransaction());
  };

  return (
    // <BrowserRouter>
    <Suspense fallback={null}>
      <DashboardPage />

      <button onClick={login}>LOGIN</button>
      {/* <button onClick={onClickS}>show transaction</button> */}
      <button onClick={onClick}>show logout</button>
      <button onClick={onClickS}>show transaction</button>
      {isModalLogoutOpen && <ModalBackdrop children={<ModalLogout />} />}
      {isModalAddTransactionOpen && <ModalBackdrop children={modal('AddTransaction')} />}
    </Suspense>
    // </BrowserRouter>
  );
}

export default App;
