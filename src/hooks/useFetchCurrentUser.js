import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { store } from 'redux/store';
import {
  useGetCurrenthUserQuery,
  setAuth,
  resetAuth,
  setUser,
  resetUser,
  resetTransactions,
  resetStatistics,
  setError,
  resetError,
} from 'redux/index';

export const useFetchCurrentUser = () => {
  const token = store.getState().auth?.token;
  const dispatch = useDispatch();
  const { data, error, isFetching } = useGetCurrenthUserQuery();

  useEffect(() => {
    if (error) {
      if (error.status >= 500 || error.status === 'FETCH_ERROR') dispatch(setError(500));
      else {
        toast.info('please, log in');
        dispatch(resetAuth());
        dispatch(resetUser());
        dispatch(resetTransactions());
        dispatch(resetStatistics());
      }
    }
    if (data) {
      dispatch(resetError());
      dispatch(setAuth({ token }));
      dispatch(setUser(data));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  return isFetching;
};
